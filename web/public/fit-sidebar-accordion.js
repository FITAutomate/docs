/**
 * Top-level sidebar accordion: opening one primary section closes the others.
 * Keeps sl-sidebar-state sessionStorage in sync so Starlight’s restore matches.
 */
function patchPersistedOpen(detailsEl, open) {
  const restore = detailsEl.querySelector('sl-sidebar-restore');
  const idxRaw = restore?.dataset?.index;
  if (idxRaw === undefined) return;
  const idx = Number(idxRaw);
  if (Number.isNaN(idx)) return;
  try {
    const key = 'sl-sidebar-state';
    const target = document.querySelector('sl-sidebar-state-persist');
    const hash = target?.dataset?.hash ?? '';
    const raw = sessionStorage.getItem(key);
    const state = JSON.parse(raw || '{}');
    if (typeof state !== 'object' || state === null) return;
    if (!Array.isArray(state.open)) state.open = [];
    state.open[idx] = open;
    state.hash = hash;
    sessionStorage.setItem(key, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function wireTopLevelAccordion(sidebar) {
  const topLevel = sidebar.querySelector(':scope ul.top-level');
  if (!topLevel) return;
  const topDetails = [...topLevel.querySelectorAll(':scope > li > details')];
  if (topDetails.length < 2) return;

  for (const details of topDetails) {
    details.addEventListener('toggle', () => {
      if (!details.open) {
        patchPersistedOpen(details, false);
        return;
      }
      patchPersistedOpen(details, true);
      for (const other of topDetails) {
        if (other !== details && other.open) {
          other.open = false;
          patchPersistedOpen(other, false);
        }
      }
    });
  }
}

function init() {
  const sidebar = document.getElementById('starlight__sidebar');
  if (!sidebar || !matchMedia('(min-width: 50em)').matches) return;
  wireTopLevelAccordion(sidebar);
}

init();
document.addEventListener('astro:page-load', init);
