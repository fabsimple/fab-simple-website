Act as a Principal Full-Stack Developer, Lead UI/UX Designer, and B2B Industrial Copywriter. 

You should approach this task as a combination of:

Senior SaaS Website Designer
Senior UX/UI Designer
Senior Product/UX Writer
B2B SaaS Content Strategist
Senior Frontend Developer
Product Marketing Strategist
Fabrication-industry domain analyst

Do not treat this as simply a copywriting task. You need to understand the actual FabSimple product from its source code and then intelligently adapt the existing website.

We are finalizing the production marketing website for "Fabsimple," a fabrication company. We currently have an initial template/draft codebase open, and we have the core product codebase located at `/Users/bagewadipuneet/fab-simple`.

Your goal is to inspect both codebases, extract the business domain, core capabilities, features, and target audience from the product app, and rewrite/restructure the marketing site template content so it accurately reflects Fabsimple's actual business.

---

### Step 1: Codebase Analysis & Context Extraction
1. **Analyze Current Marketing Template:**
   - Inspect the component tree, page structure, existing copy placeholders, design system (typography, color tokens, layout hierarchy), and asset slots.
   - Identify which sections are generic/lorem-ipsum and need industry-specific customization.

2. **Analyze `/Users/bagewadipuneet/fab-simple`:**
   - Examine schemas, API endpoints, user workflows, feature modules, service configurations, and copywriting/labels inside the application.
   - Extract concrete facts: What specific fabrication capabilities exist? (e.g., CNC machining, sheet metal, laser cutting, 3D printing, finishes, tolerances, quote engines, lead times, materials supported).
   - Identify the value propositions: What customer pain points does the software/service solve (e.g., instant quoting, automated DFM feedback, order tracking, batch production)?

---

### Step 2: Content Strategy & Design Alignment
- **Positioning:** Frame Fabsimple clearly for engineers, procurement managers, and hardware teams.
- **Tone:** Professional, precise, modern, and engineering-centric (clear specs, low fluff).
- **Architecture:** Align sections logically:
  - **Hero:** Punchy value proposition + clear Primary/Secondary CTA.
  - **Core Capabilities / Services:** Grounded in features actually found in `fab-simple`.
  - **Technology / Workflow:** How the platform works (e.g., Upload CAD -> DFM Analysis -> Production -> Delivery).
  - **Materials & Tolerances:** Real technical data/parameters discovered in the codebase.
  - **Social Proof / Trust Badges:** Quality certifications (ISO), capacity indicators, or customer segments.

---

### Step 3: Execution & Output Requirements
Before modifying or generating code, provide:
1. **Context Summary:** A brief breakdown of what Fabsimple actually does based on the `/Users/bagewadipuneet/fab-simple` code (capabilities, key features, target customer).
2. **Site Map & Content Mapping:** A mapping table linking template sections to their new purpose and content direction.
3. **Targeted Code Changes:** 
   - Provide the clean, production-ready updated components/pages.
   - Ensure semantic HTML, accessibility (ARIA, alt tags), responsive layouts, and typed props (if TypeScript).
   - Keep styling consistent with the template's existing CSS/Tailwind framework.

If any proprietary details (e.g., pricing formulas, uncommitted partner logos, or missing material specs) require confirmation before coding, list those specific questions first. Otherwise, proceed directly with Step 1 and the proposed implementation.