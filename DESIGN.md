---
name: IA Tracker Dashboard
description: A calm, premium signal room for monthly reporting, deadlines, and shared IA team delivery.
colors:
  page-bg: "#F5F7FB"
  surface: "#FFFFFF"
  surface-muted: "#EEF1F7"
  surface-raised: "#E3E8F2"
  text-primary: "#0B1B33"
  text-secondary: "#31415C"
  text-muted: "#64748B"
  text-subtle: "#9AA6B8"
  border: "#D6DEEB"
  border-subtle: "#E8EDF5"
  cobalt: "#2458E6"
  cobalt-soft: "#EAF0FE"
  success: "#0E8A54"
  success-soft: "#E6F6EF"
  attention: "#9A5B00"
  attention-soft: "#FEF4E2"
  risk: "#C22B2B"
  risk-soft: "#FDECEC"
  cadence: "#5B33D6"
  cadence-soft: "#EFEAFC"
  data: "#0A7D6E"
  data-soft: "#E3F5F2"
typography:
  display:
    fontFamily: "Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "20px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "4px 11px"
    height: "28px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "4px 11px"
    height: "28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
---

# Design System: IA Tracker Dashboard

## Overview

**Creative North Star: "The Signal Room"**

The IA Tracker Dashboard is a premium, calm operational workspace for an Insight Analysts team. It turns monthly reporting work into visible signals: what is due, who owns it, what is blocked, and how the team is moving through the cycle.

The system is practical before it is decorative. Confidence comes from clear hierarchy, semantic color, disciplined spacing, and controls that respond decisively. The interface should feel composed during a busy reporting period, with enough character to make repeated use feel considered rather than bureaucratic.

**Key Characteristics:**
- Calm, information-dense desktop workspace
- Semantic signals for progress, risk, attention, cadence, and data
- Refined surfaces with tactile controls
- Spacious stacking and simplified composition on mobile

## Colors

The palette uses a cool, pale operational canvas with cobalt as the primary action signal. Green, amber, red, violet, and teal are reserved for meaningful workflow states rather than decoration.

### Primary
- **Cobalt Blue** (#2458E6): Primary actions, active filters, focus, and current navigation.

### Secondary
- **Fresh Green** (#0E8A54): Completed work, successful sync, and positive delivery states.
- **Amber Attention** (#9A5B00): Public holidays, deadline pressure, and attention states.
- **Clear Red** (#C22B2B): Blocked and overdue work that needs intervention.

### Tertiary
- **Violet Cadence** (#5B33D6): Quarterly and biannual reporting rhythms.
- **Teal Data** (#0A7D6E): Data submission and supporting data workflows.

The implementation also contains darker-theme ramps and category-specific tint
variants for these same semantic roles. They are intentional theme companions,
not new product meanings: violet remains cadence, teal remains data, amber
remains attention, and red remains risk.

### Neutral
- **Deep Ink** (#0B1B33): Primary text and dark workspace surfaces.
- **Slate Text** (#31415C): Secondary text and control labels.
- **Muted Slate** (#64748B): Supporting metadata and quiet labels.
- **Pale Slate** (#9AA6B8): Tertiary text and low-priority hints.
- **Page Cloud** (#F5F7FB): Page canvas.
- **Surface White** (#FFFFFF): Cards, inputs, and raised controls.
- **Surface Mist** (#EEF1F7): Muted sections and completed states.
- **Line Blue** (#D6DEEB): Strong borders and dividers.
- **Line Mist** (#E8EDF5): Subtle borders and separators.

**The Signal Rarity Rule.** Saturated colors indicate something actionable. Keep the page neutral and use semantic accents only where the state or action needs attention.

## Typography

**Display Font:** Segoe UI (with system-ui and platform sans fallbacks)
**Body Font:** Segoe UI (with system-ui and platform sans fallbacks)
**Label/Mono Font:** Consolas for dates, counts, and measurement-like values.

**Character:** The type system is compact and legible, with weight and spacing doing most of the hierarchy work. Labels are uppercase and restrained; numbers are precise and scan-friendly.

### Hierarchy
- **Display** (700, `clamp(2rem, 3vw, 3rem)`, 1.05): Landing statement and primary orientation.
- **Title** (700, 21px, 1.3): Current reporting-cycle heading.
- **Body** (400, 14px, 1.55): Dashboard content and supporting explanation.
- **Label** (700, 10px, 0.08em, uppercase): Status labels, metadata, and section markers.

Compact supporting sizes from 9px through 22px are used for badges, table
content, controls, and metric numerals where scanability requires them. These
are role-specific steps within the operational dashboard rather than display
styles.

**The Measurement Rule.** Use the monospace face for dates, counts, and working-day values only; prose remains in the primary sans voice.

## Layout

The desktop workspace is centered at a maximum width of 1110px with horizontal padding of 1.2rem. The landing hero uses a two-column composition: explanatory copy and a dark workspace pulse panel. The operational dashboard follows with the reporting-cycle header, month controls, view tabs, metrics, filters, and the selected work surface.

The default rhythm uses compact 7-10px gaps inside dense groups, approximately 1rem separation between related sections, and larger breathing room between distinct work areas. At 900px, grids reduce their column count. At 760px, controls stack, tables become stacked cards, and calendar/workload layouts collapse. At 520px, cards and metrics become single or two-column mobile compositions.

Mobile preserves task clarity over desktop density: tables become labeled cards, controls remain reachable, and content gets additional vertical breathing room rather than forcing tiny horizontal layouts.

## Elevation & Depth

This system uses layered tonal surfaces with restrained neutral shadows. White cards sit above the pale page canvas, while muted backgrounds group completed or secondary content. Shadows use black alpha rather than colored glow; elevation should clarify interaction and grouping, not act as decoration.

### Shadow Vocabulary
- **Resting surface** (`0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)`): Cards and compact controls at rest.
- **Raised surface** (`0 8px 24px rgba(0,0,0,.09), 0 2px 6px rgba(0,0,0,.05)`): Hovered cards, menus, and focused overlays.

## Shapes

The shape language is compact and approachable: 6px radii for controls and inputs, 10px for cards, 14px for larger framed surfaces, and 20px for the landing hero composition. Pills are reserved for compact status, filter, and identity chips. Borders are thin and cool-toned; category identity should not rely on thick side stripes.

## Components

### Buttons
- **Shape:** Compact 6px radius (`6px`) with a stable 28px height.
- **Primary:** Cobalt background, white text, `4px 11px` padding.
- **Hover / Focus:** Slight opacity or surface change on hover; visible cobalt focus ring with offset.
- **Secondary / Ghost:** White or transparent surface with slate text and a subtle border.

### Chips
- **Style:** Small pill shape with semantic soft background and matching semantic text.
- **State:** Active filter chips use cobalt soft; status chips use green, amber, red, violet, or teal according to workflow meaning.

### Cards / Containers
- **Corner Style:** 10px card radius with thin subtle border and resting neutral shadow.
- **Content:** Tight internal padding for scanability; larger framed sections use 14px radius.
- **States:** Completed content moves to a muted surface; overdue and blocked content use semantic tint and text rather than heavy decoration.

### Inputs and Selects
- **Shape:** 6px radius, thin border, white or page surface.
- **Behavior:** Compact sizing for desktop; full-width and stacked where mobile layout requires it.
- **Focus:** Visible 2px cobalt outline with offset.

### Header
- **Structure:** Sticky, translucent light surface with brand at left and compact utilities at right.
- **Behavior:** Theme toggle, sync status, clock, and dashboard action remain distinct but visually quiet.

## Do's and Don'ts

### Do
- Use cobalt for the primary action and active navigation.
- Keep status colors semantic and consistent across calendar, cards, tables, and filters.
- Use neutral shadows with an offset and soft blur.
- Preserve visible focus states and responsive labeled cards.
- Give mobile layouts more vertical space when desktop density becomes cramped.

### Don't
- Don't use saturated accents as decoration or fill every surface with color.
- Don't use colored glow shadows or thick category side stripes.
- Don't use monospace for ordinary prose.
- Don't make cards compete equally with the active work surface.
- Don't introduce a new color, radius, or button treatment without a clear semantic reason.
