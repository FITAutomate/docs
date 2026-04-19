---
title: "Sales — New Engagement Discovery"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Sales — New Engagement Discovery |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Sales |
| Estimated Time | 45–60 min (call) + 30–60 min (post-call) |
| Prereqs | Prospect has agreed to an intro call, `sales/roi-calculator.xlsx` accessible, `sales/proposal-template.md` accessible |
| Tags | sales, discovery, proposal, roi, new-engagement |

# Sales — New Engagement Discovery

## Goal

Run a structured discovery call with a prospective client, complete the ROI calculator, and deliver a proposal within 48 hours. End state: a written proposal with ROI workbook is in the prospect's inbox and a clear next step is agreed.

## When to Use This

- First call with any prospective client.
- A referral or warm lead has agreed to a conversation.

This procedure runs before `🪜 PROC — Legal — Engagement Letter` and `🪜 PROC — Statement of Work — New Engagement`. Do not start infrastructure or delivery work until the engagement is signed.

## Prerequisites

- [ ] Prospect has agreed to a call
- [ ] `sales/roi-calculator.xlsx` is open and ready to fill
- [ ] `sales/proposal-template.md` is open as a blank draft
- [ ] Prospect's website and LinkedIn reviewed (if available)

## Procedure

### 1. Before the call

1. Review the prospect's website and LinkedIn profile.
2. Open `sales/roi-calculator.xlsx` — have it ready to fill during or immediately after the call.
3. Open a blank copy of `sales/proposal-template.md` — start filling it as you listen.
4. Review `pricing/rate-card.md` and `pricing/pricing-model.md` so you can quote accurately if the budget question comes up.

### 2. Run the discovery call (45–60 min)

**Opening (5 min)**
- Confirm what they know about FIT Automate.
- Set the agenda: *"I'm going to ask you some questions about your business and current situation. By the end, I'll have a clear recommendation for you."*

**Business context (10 min)**
1. What does your business do and who do you serve?
2. How big is your team right now?
3. What does your current tech stack look like? (website, docs, tools)
4. Are you currently using any AI tools?

Listen for: team size, tech maturity, existing pain points already surfacing.

**Pain discovery (15 min)**

5. What's the biggest operational headache you're dealing with right now?
6. Where does information get lost or scattered in your business?
7. How do customers or staff currently get answers to questions?
8. Is there a process that relies too heavily on one person knowing things?

Listen for: recurring manual tasks, data re-entry, document chaos, single points of failure. Note their exact words — quote them back in the proposal.

**Opportunity sizing — for each pain identified (10 min)**

- "How many people deal with this task?"
- "How long does it take each day or each time?"
- "How often does it happen?"
- "What's the rough loaded cost of the people involved?"
- "Is revenue being lost because of this — leads going cold, customers churning, jobs missed?"
- "If this was fixed, what would your team do with that time?"

Aim for at least 2–3 solid opportunities with numbers.

**Readiness signals (10 min)**

9. Have you tried to solve this before? What happened?
10. What would it mean for the business if this was solved?
11. Who else is involved in decisions like this?
12. What's your timeline — is there a specific date driving this?

**Budget framing (5 min)**

- *"FIT solutions start from around $1,200 for our Lite tier and $3,500 for Pro. Does that fit within the range you're working with?"*
- Do not negotiate on the call. Get a yes/no/maybe.

**Wrap-up (5 min)**

- Summarise what you heard — use their words.
- State your recommendation: *"Based on what you've told me, I'd recommend [solution] [tier] because..."*
- Confirm next step: *"I'll send you a proposal within 48 hours with the full breakdown."*

### 3. Complete the ROI calculator (immediately after the call)

1. Open `sales/roi-calculator.xlsx`.
2. Fill the Opportunity Overview tab with everything identified.
3. Build out the top 2–3 opportunities in their own Opp tabs.
4. Use conservative numbers — lower end of any range they gave you.
5. Fill Source and Rationale columns — quote the interview directly.
6. Confirm the Summary Dashboard auto-populates correctly.
7. Refer to `sales/roi-samples/` for SMB benchmarks if you need reference points.

### 4. Draft the proposal

Open `sales/proposal-template.md` and complete:

- **What we heard** — 2–3 sentences using their words
- **Opportunities we identified** — one entry per Opp tab in the calculator
- **ROI Summary** — pull directly from the Summary Dashboard
- **Recommendation** — match solution and tier to what you heard

Attach the completed `roi-calculator.xlsx` to the proposal email.

### 5. Send within 48 hours

Send the proposal by email within 48 hours of the call. If the ROI calculator is not ready in time, send the proposal first and note: *"Full ROI workbook to follow within 24 hours."*

The faster the proposal arrives, the higher the close rate.

### 6. Map the recommendation

Use this table to confirm your recommendation is aligned:

| What they said | Likely solution | Likely tier |
| --- | --- | --- |
| "Our website is embarrassing" / "We need a new site" | FIT Web | Lite or Pro |
| "Information is scattered everywhere" / "We lose things" | FIT Docs | Lite or Pro |
| "Staff keep asking the same questions" / "Knowledge walks out the door" | FIT Knows | Lite or Pro |
| "We have a process that's completely manual" / "We're copy-pasting all day" | Any + n8n automation | Pro or Premium |
| Multiple problems across web, docs, and knowledge | Start with biggest pain | Lite first, roadmap to Pro |

### 7. Add to project tracking

Once the proposal is sent, add the prospect to `fit-ops/finance/project-tracking.md` with:
- Status: `scoping`
- Proposal sent date
- Recommended solution and tier

## Troubleshooting

**Prospect is not the decision-maker**
- Note who is and set a follow-up to include them. Do not send the proposal until the right person is included.

**Numbers are hard to get**
- Use conservative benchmarks from `sales/roi-samples/`. Flag in Source column: "benchmark estimate."

**Call runs long or gets off track**
- Redirect: *"That's helpful context — to make sure I can build something useful for you, can we come back to [question]?"*

**Prospect is a weak fit**

Watch for these signals and qualify out early if present:
- Wants something fully autonomous with no human review
- Has no defined problem — just "interested in AI"
- Very large org (likely needs enterprise, not FIT)
- Sole founder with no team to maintain deliverables

## Related Links

- `🪜 PROC — Legal — Engagement Letter`
- `🪜 PROC — Statement of Work — New Engagement`
- `sales/roi-calculator.xlsx`
- `sales/roi-samples/`
- `sales/proposal-template.md`
- `pricing/pricing-model.md`
- `pricing/rate-card.md`
