"""
Recover files FROM marketing/Solutions (capital S) into marketing/solutions (lowercase).

IMPORTANT (Windows): `Solutions` and `solutions` are the SAME directory on typical NTFS
(case-insensitive). Never copy into `dst_root = marketing/solutions` while `Solutions`
still exists — you will delete your own copies when removing `Solutions`.

Safe pattern: stage under `marketing/__solution_staging__`, then swap names.
"""
from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MARKETING = ROOT / "src" / "content" / "docs" / "marketing"
SRC = MARKETING / "Solutions"
STAGING = MARKETING / "__solution_staging__"


def target_for(path: Path) -> Path | None:
    parts = path.parts
    mapping = {
        "FIT Web": STAGING / "fit-web",
        "FIT Docs": STAGING / "fit-docs",
        "FIT Knows": STAGING / "fit-knows",
        "Agencies": STAGING / "agencies",
    }
    for key, dest in mapping.items():
        if key in parts:
            return dest
    return None


def main() -> None:
    if not SRC.exists():
        print("No marketing/Solutions folder found.")
        return

    if STAGING.exists():
        shutil.rmtree("\\\\?\\" + str(STAGING.resolve()))

    for path in SRC.rglob("*.md"):
        dest_parent = target_for(path)
        if dest_parent is None:
            continue
        dest_parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, dest_parent / path.name)

    # Remove only the source tree (extended path for deep trees)
    shutil.rmtree("\\\\?\\" + str(SRC.resolve()), ignore_errors=False)

    final = MARKETING / "solutions"
    if final.exists():
        shutil.rmtree("\\\\?\\" + str(final.resolve()), ignore_errors=False)
    STAGING.rename(final)
    print("Flattened Solutions into marketing/solutions/.")


if __name__ == "__main__":
    main()
