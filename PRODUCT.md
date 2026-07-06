# Product

## Register

product

## Users

Hyrox athletes and the friends the owner shares the app with — a spread from **first-timers** (8–12 weeks out, gym-fit but new to the format) through **improvers** chasing a PB to the occasional **competitive** age-grouper. Several come from functional-fitness studio classes (e.g. F45) and fold those into their training. They use ROXREADY in three contexts: **planning** (at home, deciding what this week looks like), **logging** (on the gym floor mid- or post-workout — sweaty hands, one-handed, in a hurry), and **reviewing** (checking whether they're actually getting faster). The job to be done: *train consistently and show up to race day prepared, without hiring a coach.*

## Product Purpose

A Hyrox-specific training app that generates a periodized plan to race day, adapts it to what the athlete actually does, makes logging effortless, and surfaces the metrics that genuinely predict a faster race (split consistency, aerobic trend, station capacity under fatigue). It exists because the category leaders ship static plans and generic logging; the opening is **accountability + honest progress + speed of entry**. Success = the athlete trains week one and keeps going (retention), their split-variance drops, and they hit their goal time. It is offline-first and private by default (all data on-device); a backend for accounts, sync, and community is the planned next stage.

## Brand Personality

**Precise coach.** Two forces held in tension: *clinical* (the numbers are exact and honest — it will tell you your splits faded 15% and where the time leaked) and *gritty* (the voice pushes — "the hay is in the barn", "the race starts at wall balls", "go get it 👊"). Data earns the right to motivate. Tone is direct, confident, and knowledgeable — a strong training partner who has done the reading, not a hype-man and not a spreadsheet. Encouragement is real but never inflated; a missed week gets an honest, non-shaming reset, not a guilt trip or a confetti cannon.

## Anti-references

- **Cluttered fitness apps** (MyFitnessPal-style overload): stacked banners, ads, competing CTAs, buried features, five things shouting on one screen. ROXREADY shows one clear next action per screen.
- **Childish / loud gamification** (Duolingo-style): cartoon mascots, confetti storms, badge spam, streak-anxiety guilt mechanics. Streaks and wins exist but stay understated and humane.
- **Generic SaaS dashboard**: cards-everywhere, blue accent, hero-metric template, chart-grid soullessness. Data here is opinionated and race-specific, not a neutral BI readout.

## Design Principles

- **Honest numbers over vanity metrics.** Lead with what predicts a faster Hyrox (split-variance, aerobic trend, fade under fatigue), even when it's less flattering than a feel-good stat. Never dress up a plateau.
- **One strong loop, minimal friction.** Onboarding → plan → log → track → accountability, done well before adding breadth. Logging a session is seconds, not minutes. Resist feature creep; the 2026 edge is progress-per-minute, not more screens.
- **The coach explains itself.** Every generated session says why it helps; every plan adaptation is stated in plain language. Trust comes from transparency, not black-box authority.
- **Gentle accountability, never guilt.** The streak counts weeks, forgives rest days and one miss a month, and greets a lapse with "start the next one" — not shame. Motivation without manipulation.
- **Built for the gym floor.** Assume the athlete is mid-workout: sweaty, one-handed, glancing at a phone in bright light. Big tap targets, high contrast, fast entry, nothing fiddly.

## Accessibility & Inclusion

- **WCAG AA contrast** is a hard requirement — body text ≥4.5:1, large/bold text ≥3:1 — enforced carefully on the dark theme + yellow accent (yellow text on dark passes; dark text on yellow fills, never light-gray-on-dark body copy).
- **Large tap targets** (≥44px) throughout — the app is used mid-workout with sweaty hands, one-handed.
- **Readable outdoors / in bright gym light** — generous base text size, strong contrast, no thin light-gray copy for "elegance".
- **Reduced-motion**: provide a `prefers-reduced-motion` alternative for the tutorial spotlight and view transitions (crossfade/instant), even though it wasn't the top-priority ask.
