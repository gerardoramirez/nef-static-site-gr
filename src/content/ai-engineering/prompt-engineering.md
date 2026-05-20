---
title: Prompt Engineering
subtitle: Techniques and examples for crafting effective AI prompts
---

Prompt engineering is the art and science of crafting inputs that guide AI models to produce high-quality, relevant outputs. Well-designed prompts can transform a basic AI interaction into a powerful tool for analysis, research, and problem-solving.

## Example: Elite Market Research Prompt

Here's a comprehensive prompt template for conducting thorough market research using AI. This example demonstrates how structured, detailed prompts can yield professional-grade analysis.

### Why This Prompt Works

- **Clear Structure:** Organized sections guide the AI to cover all critical aspects of market research
- **Specific Instructions:** Each bullet point asks for concrete, actionable information rather than vague generalities
- **Evidence-Based:** Requests for data sources (Reddit, Amazon, forums) ensure grounded analysis
- **Comprehensive Scope:** Covers market, competition, operations, marketing, risks, and validation
- **Actionable Output:** Ends with a request for clear conclusions and next steps

## Example: ICE Score Prioritization Prompt

This prompt guides you through the ICE (Impact, Confidence, Ease) Framework developed by Sean Ellis for scientifically prioritizing ideas, features, and experiments.

### Why This Prompt Works

- **Step-by-Step Structure:** Enforces a sequential workflow that prevents rushing through the prioritization process
- **Clear Role Definition:** Establishes the AI as an expert in the ICE Framework, ensuring accurate guidance
- **Explicit Definitions:** Provides concrete scoring criteria with clear anchors (10 vs 1) to reduce ambiguity
- **Guided Interaction:** Instructs the AI to not proceed until each step is complete, maintaining focus and thoroughness
- **Actionable Output:** Ends with a specific recommendation table and explicit next action, removing decision paralysis

## Example: Tax Strategist & CPA Prompt

This prompt structures an AI assistant as a tax strategist and CPA to help maximize deductions and minimize tax liability.

### Why This Prompt Works

- **Role Specialization:** Specifies individual vs. business tax focus so the AI tailors advice appropriately
- **Comprehensive Situation Capture:** Puts all key variables (income, status, state, dependents, special situations) in one place for accurate guidance
- **Actionable Deliverables:** Requests a checklist, document list, strategies, and recommendations—not just general advice
- **Scenario Modeling:** Asks for estimated liability across different scenarios to support informed decisions
- **Practical Guidance:** Includes CPA vs. software recommendation, quarterly estimates, and state-specific considerations

## Example: Critical Bug-Finding Routine Prompt

This prompt is designed for a recurring software engineering routine (daily or weekly cron) that inspects recent commits and only escalates high-severity correctness bugs.

### Why This Prompt Works

- **High Signal Focus:** Restricts output to severe bugs with real business impact (data loss, crashes, security, major breakage)
- **Concrete Trigger Requirement:** Forces a reproducible scenario before escalation, reducing false positives
- **End-to-End Reasoning:** Requires tracing caller chains and downstream effects instead of diff-only pattern matching
- **Safe Automation Guardrails:** Prevents low-confidence PR churn and sets a default "no critical bugs found" path
- **Minimal Fix Discipline:** Prioritizes small, high-confidence patches and test coverage to reduce regression risk

### Prompt Template

```text
You are a deep bug-finding automation focused on high-severity issues.

## Goal

Inspect recent commits and identify critical correctness bugs that escaped review. Only surface issues that would cause data loss, crashes, security holes, or significant user-facing breakage.

## Investigation strategy

- Focus on behavioral changes with meaningful blast radius.
- Look for: data corruption, race conditions that lose writes, null dereferences in critical paths, auth/permission bypasses, infinite loops, resource leaks, and silent data truncation.
- Trace through the full code path — don't just pattern-match on the diff. Understand the caller chain and downstream effects.
- Ignore: style issues, minor edge cases, theoretical concerns without a concrete trigger, and low-severity issues that would merely degrade UX.

## Confidence bar

- You must be able to describe a concrete scenario that triggers the bug.
- If you cannot construct a plausible trigger scenario, do not open a PR.
- When in doubt, report your findings in Slack without opening a PR.

## Fix strategy

- If you find a critical bug, implement a minimal, high-confidence fix.
- Add or update tests when possible to lock in the behavior.
- Avoid broad refactors in the same PR.

## Safety rules

- Do not open a PR unless you are highly confident the bug is real and the fix is correct.
- If no critical bug is found, post a short "no critical bugs found" summary. This is the expected outcome most days.

## Output

If fixed, include:
- Bug and impact
- Root cause
- Fix and validation performed
```

## Example: Staff-Level Feature Enhancement Brief (GitHub / Copilot)

Use this style when opening a GitHub issue or pasting context into Copilot (or similar assistants) so the model has a clear goal, scope surface area, non-negotiable requirements, architecture expectations, and a quality bar—without micromanaging implementation details.

### Why This Brief Works

- **Role and bar:** Sets a Staff Flutter / UX mindset so tone and tradeoffs stay consistent
- **Scope map:** Lists concrete screens and interaction surfaces (lists, detail pages, menus) so nothing obvious is missed
- **Unified product outcome:** Asks for one behavior and visual language everywhere sync appears
- **Testable requirements:** Numbered requirements (states, menus, errors, architecture, tests) are easy to check off in review
- **Process hint:** “Analyze first, then apply” reduces risky drive-by refactors

### Issue / Prompt Template

```md
## Feature Enhancement: Unified Cloud Sync Experience Across App Sessions

Everything is looking great so far. Now let's improve the app with a Staff Flutter App Architect mindset and Staff-level UX/UI principles.

### Goal

Create a consistent, reliable, and polished cloud sync experience across the entire app.

This should apply to all pages where user-generated data is stored, displayed, edited, or reviewed, including:

- Drill session list views
- Round session list views
- Individual drill detail pages
- Individual round detail pages
- Top-right overflow menus
- Submenu actions
- Any page that reads from or writes to cloud-backed data

### What Needs to Improve

Please do a thorough analysis of the current sync patterns across the app and standardize the experience.

We need the same behavior, visual language, and interaction model everywhere data sync is involved.

### Requirements

1. **Consistent Sync States**
   - Show clear UI states for:
     - Syncing
     - Synced
     - Failed to sync
     - Offline / pending sync
     - Retry available

2. **Session List Views**
   - Drill sessions and round sessions should clearly indicate their cloud sync status.
   - Pending or failed sessions should be easy to identify without making the UI feel noisy.
   - Users should understand whether their data is safely saved.

3. **Menus and Submenus**
   - Standardize the top-right menu behavior across pages.
   - Include consistent options where appropriate, such as:
     - Sync now
     - Retry sync
     - View sync status
     - Delete session
     - Edit session
   - Menu labels, icons, spacing, and hierarchy should follow the same design system.

4. **UX/UI Polish**
   - Use calm, confidence-building UI language.
   - Avoid alarming the user unless data is truly at risk.
   - Keep the interface clean, premium, and aligned with the current app design.
   - Use subtle indicators instead of cluttered badges where possible.

5. **Error Handling**
   - Failed sync states should include a clear retry path.
   - Errors should be human-readable.
   - Avoid technical messages like raw exceptions or database errors.

6. **Architecture Expectations**
   - Create reusable sync UI components where possible.
   - Avoid duplicating sync logic across pages.
   - Centralize sync status handling so future features can reuse it.
   - Ensure the solution works well with the existing Flutter architecture.

7. **Quality Bar**
   - Review all pages that interact with cloud-stored drill, round, and session data.
   - Identify inconsistent behavior.
   - Refactor where needed.
   - Add or update tests for sync state handling where practical.

### Desired Outcome

The app should feel trustworthy and professional. Whether a user is viewing a drill, reviewing a round, opening a session list, or using a submenu, the cloud sync experience should feel consistent, predictable, and polished.

Please analyze the current implementation first, then propose and apply the updates carefully.
```

## Prompt Engineering Best Practices

### Be Specific

Vague prompts yield vague results. Specify the format, depth, and scope you need.

### Use Structure

Organize complex requests into clear sections with bullet points or numbered lists.

### Request Evidence

Ask for data sources, examples, or proof to ensure the AI provides grounded responses.

### Define Context

Provide background information about your audience, goals, and constraints.

### Iterate and Refine

Use the AI's responses to refine your prompts for better results in subsequent interactions.

### Set Expectations

Specify the desired output format, length, and level of detail upfront.
