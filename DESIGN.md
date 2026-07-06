---
name: ROXREADY
description: A precise, gritty Hyrox training coach — dark instrument panel, one yellow readout that matters.
colors:
  yellow: "#ffd60a"
  yellow-dim: "#b89a00"
  bg: "#0e0f11"
  surface: "#17181c"
  surface-raised: "#1e2025"
  line: "#2a2c33"
  ink: "#f2f3f5"
  ink-dim: "#9a9da6"
  ink-faint: "#82858d"
  hair: "#3a3d45"
  ink-on-accent: "#111111"
  green: "#3ddc84"
  red: "#ff5c5c"
  blue: "#5aa8ff"
  orange: "#ff9f43"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-1.5px"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.6px"
rounded:
  sm: "9px"
  md: "12px"
  lg: "14px"
  xl: "16px"
  xxl: "18px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "18px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.lg}"
    padding: "14px 18px"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "14px 18px"
  button-mini:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  chip-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 12px"
  pill-status:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  fab:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.pill}"
    size: "54px"
---

# Design System: ROXREADY

## 1. Overview

**Creative North Star: "The Race Cockpit"**

ROXREADY is a dark instrument panel worn on the wrist of a training day. The surface is near-black; a single high-voltage yellow is the live readout — the one number, the one action, the one thing that matters right now. Everything else recedes into graphite so the yellow never has to compete. This is a **product** system: the design serves the athlete's task (plan, log, review) and gets out of the way. It holds a deliberate tension — *clinical* precision (honest splits, exact loads, fade percentages that don't flatter) that earns the right to a *gritty*, motivating voice.

Density is phone-native and single-column: the whole app is a 520px-max instrument bay, glanceable one-handed, mid-workout, in bright gym light. Components are **precise and minimal** — flat graphite surfaces, hairline borders, one accent. Depth comes from tonal layering (bg → surface → surface-raised), not shadow theatrics. The yellow appears as fills on the primary action and as text on dark for live metrics; it is never a gradient, never decorative.

It explicitly rejects three things. It is **not a cluttered fitness app** (no stacked banners, no ad rails, no five CTAs shouting on one screen — one clear next action per view). It is **not childishly gamified** (no cartoon mascots, no confetti storms, no guilt-trip streak anxiety — accountability stays understated and humane). And it is **not a generic SaaS dashboard** (no cards-everywhere, no blue accent, no neutral BI readout — the data here is opinionated and race-specific).

**Key Characteristics:**
- Near-black graphite base with a single high-voltage yellow accent (`#ffd60a`)
- One system font family across four weights — no display/body pairing
- Tonal layering for depth; shadows reserved for the two floating elements (FAB, toast)
- Big tap targets, high contrast, fast entry — built for the gym floor
- Semantic status color (green/amber/blue) only where meaning demands it

## 2. Colors

A monochrome graphite stack lit by one electric yellow, with a tight semantic status set held in reserve.

### Primary
- **Voltage Yellow** (`#ffd60a`): The one voice. Fills the primary button, the FAB, selected chips/toggles, the app badge; renders as text for the countdown and live metrics on dark. It marks *the single most important thing on the screen* and nothing else. Its rarity is the point.
- **Dim Gold** (`#b89a00`): The muted partner — input focus borders and low-emphasis accent edges where full voltage would shout.

### Neutral
- **Cockpit Black** (`#0e0f11`): The body background. The dark bay everything sits in.
- **Panel Graphite** (`#17181c`): Card / container surface — the first layer up from the background.
- **Raised Graphite** (`#1e2025`): Inputs, secondary buttons, chips, tiles — the second, interactive layer.
- **Hairline** (`#2a2c33`): All borders and dividers. 1px, always.
- **Ink** (`#f2f3f5`): Primary text. Near-white, high contrast.
- **Dim Ink** (`#9a9da6`): Secondary text and labels (≈6.7:1 on Cockpit Black — passes AA).
- **Faint Ink** (`#82858d`): The dimmest *legible* tier — timestamps, captions, inactive nav labels, "see more" links (≈5.2:1 on bg, ≈4.8:1 on card — passes AA). Bumped up from the old `#5c5f68` (which failed AA) so tertiary text stays readable in bright gym light.
- **Hairline Ink** (`#3a3d45`): Non-text decoration only — sparkline dots, divider ticks. Never used for anything a user reads.
- **Ink-on-Accent** (`#111111`): Near-black text placed on yellow fills.

### Tertiary (semantic status)
- **Go Green** (`#3ddc84`): Success, PBs, on-target, "base" phase, done state.
- **Stop Red** (`#ff5c5c`): Errors, destructive actions, off-target/fade.
- **Data Blue** (`#5aa8ff`): Neutral info, "specific" phase.
- **Effort Orange** (`#ff9f43`): Caution, "build" phase, mild slowdown.

### Named Rules
**The One Voice Rule.** Voltage Yellow marks exactly one thing per screen: the primary action or the live metric. Two yellow fills competing in one viewport is forbidden — demote one to secondary graphite. Its scarcity is what makes it read as "the readout."

**The Legible-Floor Rule.** Every text color passes WCAG AA (≥4.5:1) against the surface it sits on — including the dimmest tier, Faint Ink (`#82858d`, ≈5.2:1). No "elegant" light gray that can't be read in bright gym light. Non-text decoration (dots, ticks) uses Hairline Ink (`#3a3d45`), which is the only tone allowed to fail AA because nothing reads it.

## 3. Typography

**Single Font:** The native system UI stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`).

**Character:** One family, four weights (400 / 600 / 700 / 800), doing all the work. No display face, no serif pairing — the system font is fast to load, familiar under sweat and motion, and renders crisply at a glance. Hierarchy is carried by **weight, size, and tight negative tracking on the big numbers**, not by contrasting typefaces. This is deliberate: pairing two similar sans-serifs is exactly the trap avoided here.

### Hierarchy
- **Display** (800, 40px, line-height 1.05, letter-spacing −1.5px): The cockpit readouts — race countdown, big stat values (`.bignum`). Tight tracking makes the number feel engineered, not shouted.
- **Headline** (800, 26px, −0.5px): View titles (`h1`).
- **Title** (700, 19px): Card headers (`h2`).
- **Body** (400, 16px, line-height 1.45): Reading copy and instructions. This is the floor — 16px base, never smaller for anything that must be read at arm's length.
- **Label** (700, ~12px, uppercase, letter-spacing 0.4–0.7px): Section labels, stat captions, field labels (`.statlbl`, `.sectlbl`, `.lbl`). Uppercase micro-labels that frame data without competing with it.

### Named Rules
**The 16px Floor Rule.** Body copy never drops below 16px, and inputs stay at 16px to stop iOS zoom-on-focus. Captions (`.small` 13px, `.tiny` 11.5px) are for metadata only, never for anything the athlete must read to make a decision.

**The Weight-Not-Face Rule.** Emphasis comes from weight (700/800) and the yellow, never from a second font. Adding a display or serif face to "elevate" a screen is prohibited.

## 4. Elevation

**Flat by tonal layering.** Depth is built by stacking graphite values — Cockpit Black → Panel Graphite → Raised Graphite — with 1px Hairline borders separating planes. Surfaces are flat at rest; there are no ambient card shadows. This keeps the panel reading as a single instrument face rather than a pile of floating cards.

Shadows exist for exactly two elements: things that genuinely float above the panel.

### Shadow Vocabulary
- **FAB Glow** (`box-shadow: 0 4px 18px rgba(255,214,10,.35)`): The yellow log button hovers over the nav with a soft yellow bloom — the one place light leaks from the accent.
- **Toast Lift** (`box-shadow: 0 6px 24px rgba(0,0,0,.5)`): Transient confirmations sit clearly above everything with a deep, neutral drop.
- **Overlay Scrim** (`box-shadow: 0 0 0 9999px rgba(0,0,0,.74)` on the tutorial spotlight): A full-screen dark scrim punched by the highlighted element.

The top bar and bottom nav use `backdrop-filter: blur(12px)` over translucent graphite — the only glass in the system, justified because they overlay scrolling content.

### Named Rules
**The Flat-Panel Rule.** Cards and containers cast no shadow. If a surface needs to feel separated, it gets a tonal step and a hairline border, not a drop shadow. Shadows are reserved for elements that literally float (FAB, toast, scrim).

## 5. Components

Precise and minimal to the hand: chunky enough for sweaty one-handed use, but flat, hairline-bordered, and quiet until pressed.

### Buttons
- **Shape:** Softly rounded — 14px (`.btn`), 12px for mini (`.btn.mini`).
- **Primary:** Voltage Yellow fill, Ink-on-Accent (`#111`) text, weight 800, full-width, 14px 18px padding. The single loudest element per screen.
- **Secondary:** Raised Graphite fill, Ink text, 1px Hairline border, weight 600. The default for anything that isn't *the* action.
- **Danger:** Transparent fill, Stop Red text and border. Destructive only.
- **Press feedback:** A JS-driven `.pressing` class scales to 0.93 and brightens on pointer-down (fires reliably on iOS, where `:active` alone does not). *North-star note: the current press flash (`brightness(1.5)` on list rows) runs hotter than the "precise & minimal" intent — future passes should dial press theatrics toward a subtler scale/tone.*

### Chips
- **Style:** Pill (999px), Raised Graphite fill, Ink text, 1px Hairline border, weight 600.
- **State:** Selected chips flip to Voltage Yellow fill with Ink-on-Accent text and a leading `✓`. Used for equipment multi-select and filters.

### Cards / Containers
- **Corner Style:** 16px (`--radius`); the hero steps up to 18px.
- **Background:** Panel Graphite (`#17181c`) with a 1px Hairline border.
- **Shadow Strategy:** None — see The Flat-Panel Rule.
- **Internal Padding:** 16px standard, 12–14px for `.flat` variants.
- **Nested cards are forbidden.** If content needs grouping inside a card, use a tonal step (Raised Graphite) or a hairline divider, never a card-in-a-card.

### Inputs / Fields
- **Style:** Raised Graphite fill, 1px Hairline border, 12px radius, 16px text, `-webkit-appearance:none` so date/select match text fields.
- **Focus:** Border shifts to Dim Gold (`#b89a00`). No glow.
- **Labels:** Uppercase micro-labels (`.lbl`) above each field in Dim Ink.

### Navigation
- **Top bar:** Fixed, translucent graphite with 12px backdrop blur, 1px bottom hairline. Left: yellow RX badge + per-tab title. Right: reserved action slots (upgrade / notifications / community) + settings.
- **Bottom nav:** Fixed, four tabs (Home / Plan / Progress / Race) flanking a central floating yellow FAB (`+`, 54px) that logs a session. Inactive tabs use Faint Ink; the active tab uses Voltage Yellow.

### Signature: The Cockpit Hero
The Home hero is the instrument centerpiece: a graphite gradient panel (`linear-gradient(140deg,#20222a,#161719)`) with a faint yellow radial bloom in the corner, carrying the race countdown in Display type, a phase pill, and a thin yellow progress bar (weeks-to-race). It is the one place the system allows a gradient — on a *surface*, never on text.

### Signature: Stat Tiles
Three equal graphite tiles (streak / this-week / adherence) in a 3-column grid — big value (23px/800) over an uppercase micro-label, value colored green/amber/red by threshold. The honest-numbers principle made visible.

## 6. Do's and Don'ts

### Do:
- **Do** keep Voltage Yellow to one element per screen — the primary action or the live metric (The One Voice Rule).
- **Do** build depth with tonal graphite steps (bg `#0e0f11` → surface `#17181c` → raised `#1e2025`) and 1px `#2a2c33` borders.
- **Do** keep body text ≥16px and ≥4.5:1 contrast; use Dim Ink (`#9a9da6`) or brighter for anything readable.
- **Do** carry meaning in one system font's weights (700/800) and the yellow, not in a second typeface.
- **Do** keep tap targets chunky (≥44px) — this is used mid-workout, one-handed, in bright light.
- **Do** state the honest number, then let the gritty voice motivate ("splits faded 15% — the race starts at wall balls").

### Don't:
- **Don't** ship any text color below 4.5:1 on its surface — the dimmest legible tier is Faint Ink (`#82858d`). Hairline Ink (`#3a3d45`) is for non-text decoration only (The Legible-Floor Rule).
- **Don't** use gradient text or `background-clip:text` — the yellow is a solid fill or solid metric color, never a gradient on glyphs.
- **Don't** nest cards, or default to a card when a tonal step or hairline divider would do. No cards-everywhere SaaS grids.
- **Don't** add ad rails, stacked banners, or competing CTAs — one clear next action per screen (anti: **cluttered fitness apps**).
- **Don't** add cartoon mascots, confetti storms, badge spam, or guilt-trip streak mechanics — accountability stays understated (anti: **childish gamification**).
- **Don't** introduce a blue-accent, hero-metric-template dashboard look — the data is race-specific and opinionated (anti: **generic SaaS dashboard**).
- **Don't** shadow flat surfaces; shadows are only for the FAB, the toast, and the tutorial scrim (The Flat-Panel Rule).
- **Don't** run press states hotter than a subtle scale/tone — the intent is precise & minimal, not theatrical.
