---
title: "Site Directory — Approved Services & Links"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Site Directory — Approved Services & Links |
| Type | Reference |
| KB_TARGET | PUBLIC_WEB |
| Visibility | Public |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Navigation |
| Tags | routing, links, site directory |

# Site Directory — Approved Services & Links

This page is the **canonical routing map** for FIT Automate's public website and knowledge base.

It ensures website chat and KB responses route visitors to the **correct pages only**—using the approved link allowlist for launch.

---

## Contact (Canonical)

- **Email:** ai@forwarditthinking.com
- **Book a call / ask a question:** [https://forwarditthinking.com/contact](https://forwarditthinking.com/contact)

---

## Routing Rules (for Website Chat)

When responding to visitors:

1. Include **0–2 links per answer** (max 3 only if truly necessary).
2. Prefer the **most specific page** first (service page beats a general index).
3. If you're not sure what fits, default to the **AI Readiness Audit** (best universal starting point).
4. If the visitor is ready to act, include **one** contact option.
5. **Never invent URLs.** Use only the canonical routes listed below.

---

## Approved Routes

| Visitor intent | Send them to | Use when… |
| --- | --- | --- |
| "Talk to someone" / "Book a call" / "Contact" | https://forwarditthinking.com/contact | They want next steps or a conversation |
| "Where do I start?" / "What should we automate first?" / "Quick wins?" | https://forwarditthinking.com/services/ai-readiness-audit | They need prioritization, guardrails, and a practical plan |
| "Build automations for us" / "Connect our tools" / "Workflow build" | https://forwarditthinking.com/services/intelligent-automation | They want implementation and delivery support |
| "Train our team" / "Adopt AI safely" / "Enablement" | https://forwarditthinking.com/services/ai-enablement | They need training, adoption, and operational readiness |

---

## If You're Unsure Where to Send Them

- They want outcomes but don't know the path → https://forwarditthinking.com/services/ai-readiness-audit
- They want to engage now → https://forwarditthinking.com/contact

---

## What It Is Not

- Do not link to any route not listed in the Approved Routes table above
- All links must use the `forwarditthinking.com` domain only
- Do not create or invent URLs not listed above

---

## Machine-Readable Routing Reference

```yaml
routes:
  contact:
    email: "ai@forwarditthinking.com"
    book_a_call: "https://forwarditthinking.com/contact"

  services:
    - intent: ["start", "where do I start", "prioritize", "quick wins", "readiness", "audit"]
      url: "https://forwarditthinking.com/services/ai-readiness-audit"
      label: "AI Readiness Audit"
    - intent: ["build automation", "workflow", "integrations", "connect tools", "implementation", "automate"]
      url: "https://forwarditthinking.com/services/intelligent-automation"
      label: "Intelligent Automation"
    - intent: ["enablement", "training", "adoption", "governance", "team readiness", "AI training"]
      url: "https://forwarditthinking.com/services/ai-enablement"
      label: "AI Enablement"

  default_fallback:
    url: "https://forwarditthinking.com/services/ai-readiness-audit"
    label: "AI Readiness Audit"
```

## Next Step / Related Links

To update this routing index, contact the KB owner and submit a change request through the standard KB governance process.
