---
name: McNabb Construction LLC
description: Owner-led home remodeler for Driftwood, Dripping Springs and South Austin, TX
colors:
  paper: "#fbfaf8"
  stone: "#f2efeb"
  ink: "#241f22"
  ink-2: "#574d52"
  ink-3: "#736a6f"
  line: "rgb(36 31 34 / 0.1)"
  night: "#241f22"
  brand: "#b0cb6a"
  brand-hover: "#bfd77f"
  brand-deep: "#4f6120"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.25
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    fontVariation: "'wdth' 112"
  quote:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.375
    fontVariation: "'wdth' 105"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
rounded:
  control: "8px"
  photo: "12px"
spacing:
  gutter: "24px"
  gutter-lg: "32px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  page-header:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    padding: "56px 0"
  photo-tile:
    rounded: "{rounded.photo}"
    textColor: "#ffffff"
---

# Design System: McNabb Construction LLC

## Overview

**Creative North Star: "The Finished Room"**

A clean, straight-played remodeler site where the real project photographs and the phone number do the persuading. Surfaces are warm off-white paper and stone bands, ink is an aubergine-charcoal lifted from the logo, and the logo's green is the one accent. The interface stays quiet so a finished local kitchen can carry the page.

Density is relaxed: generous section padding, one idea per band, alternating paper, stone and night bands to pace the story. Headings run wide (Archivo at 112% width) to echo the logo's broad caps; everything else is plain, legible Archivo. Depth comes from tonal bands, hairline rules and photography, not from shadows. The world deliberately refuses dark-navy-and-orange contractor chrome, badge rows and stock imagery.

**Key Characteristics:**
- Warm paper, stone and night bands alternate to pace the page.
- Logo green is the only accent and always carries ink text.
- Wide-set Archivo headings; normal-width Archivo body.
- 8px controls, 12px photos, 1px hairlines at 10% ink.
- Real project photography, full bleed or in 12px frames, carries the persuasion.

## Colors

A warm, low-chroma neutral ramp tinted toward the logo's aubergine-gray, with a single spring-green accent.

### Primary
- **Logo Green** (brand): fills for the primary action (call, send) and text selection. Always carries ink text, never white.
- **Logo Green, Lifted** (brand-hover): hover state of green fills.
- **Moss Ink** (brand-deep): the green's text-safe shade on light grounds: inline links, check marks, focus outlines on light surfaces.

### Neutral
- **Warm Paper** (paper): default page ground and sticky header (at 95% with backdrop blur).
- **Stone** (stone): alternating band ground, page headers, review/form bands.
- **Aubergine Ink** (ink): headings and primary text; also lighter-weight labels.
- **Ink 2** (ink-2): body paragraphs, nav links at rest, captions.
- **Ink 3** (ink-3): tertiary notes, placeholders, "(optional)" hints.
- **Hairline** (line): 1px rules, header/footer borders, list dividers, ghost-button stroke.
- **Night** (night): the hero ground under the photo and the footer band. On night, text is white at 60 to 85% opacity by importance, and the focus ring switches to Logo Green.

### Named Rules
**The Ink-On-Green Rule.** Every green fill carries ink text. Green text on light grounds uses Moss Ink, never the fill green.

**The One Accent Rule.** Logo green is the only hue in the interface. Any other color on screen comes from photography.

## Typography

**Display Font:** Archivo Variable (with ui-sans-serif, system-ui)
**Body Font:** Archivo Variable, same family

**Character:** One family doing two jobs: headings stretched to 112% width with tight tracking read as the logo's wide caps; body at normal width and 1.65 leading reads as a plain-spoken letter from the contractor.

### Hierarchy
- **Display** (600, 2.25rem to 3.75rem by breakpoint, 1.08, -0.02em, 112% width): the home hero H1 only.
- **Headline** (600, 1.875rem to 2.25rem; page H1s 2.25rem to 3rem at 1.1 and -0.02em): section and page titles.
- **Title** (600, 1.25rem): sub-heads within prose, form headings, photo-tile names.
- **Quote** (500, 1.5rem to 1.875rem, snug, 105% width): featured client testimonial. List testimonials sit one step down at regular weight.
- **Body** (400, 1.0625rem, 1.65): prose in Ink 2, held to roughly 38 to 40rem.
- **Label** (500, 0.875rem): form labels, footer legal line. Sentence case, no tracking.

### Named Rules
**The Wide Heading Rule.** h1 to h3 and heading-like tile names render at 112% width and balanced wrap; body copy never stretches.

**The Sentence Case Rule.** Labels, buttons and nav are sentence case at normal tracking. There are no uppercase eyebrows.

## Layout

A single centered container (76rem max, 24px gutters, 32px from 1024px up) holds everything except the full-bleed hero photo and full-width color bands. Sections breathe at 80px vertical padding, 112px from 768px up (inner pages use 64px / 96px). Content splits into two columns at 1024px (text plus a sticky 12px-framed photo at top 112px, or form beside contact details); below that, everything stacks in a single column. Prose columns cap near 38 to 40rem. Service tiles run three across from 768px. Mobile gets a fixed bottom-right green call button; the header collapses its six links into a menu toggle under 1024px.

## Elevation & Depth

Flat by default. Depth is tonal: paper, stone and night bands, 1px hairlines, scrims over photography, and the header's 95% paper with a light backdrop blur. The one structural shadow lifts the floating mobile call button off scrolling content.

### Shadow Vocabulary
- **Floating action** (`box-shadow: 0 8px 24px -8px rgb(36 31 34 / 0.45)`): the fixed mobile call button only.

### Named Rules
**The Band-Not-Shadow Rule.** Separate content with a change of ground or a hairline, never a card shadow.

**The Scrim Rule.** Text over photography sits on a night-tinted gradient (rgb 24 20 22 at 82 to 86% fading to near-clear), left-to-right in the hero and bottom-up on tiles.

## Shapes

Two radii and nothing else: 8px for anything you press or type into (buttons, fields, nav hit areas), 12px for photographs and photo tiles. Lines are 1px hairlines at 10% ink (18% on fields). Icons are Lucide outline at 18 to 20px with a 1.75 stroke; brand glyphs missing from Lucide are drawn inline to the same stroke.

## Components

### Buttons
Plain, confident, sized for a thumb.
- **Shape:** 8px radius, 48px tall (44px in the header), 20px side padding, 500 weight at 1rem, optional 18px leading icon.
- **Primary:** Logo Green fill, ink text. Used for calling and sending.
- **Hover / Focus:** fill lifts to the hover green over 160ms; press scales to 0.98; focus is a 2px Moss Ink outline at 3px offset (Logo Green on dark).
- **Ghost:** transparent with a hairline stroke and ink text; stroke darkens to 30% ink on hover.
- **Ghost on dark:** 35% white stroke, white text; hover goes full white stroke over an 8% white wash.

### Cards / Containers
- **Photo tile:** a 4:5 project photo, 12px radius, bottom-up night scrim, white wide title with an arrow that nudges 4px right on hover. No border, no shadow.
- **Page header:** stone band with a bottom hairline, wide H1 and one Ink 2 lead line.

### Inputs / Fields
- **Style:** white fill, 1px stroke at 18% ink, 8px radius, 12px by 14px padding; label above in 0.875rem 500 Ink 2 (85% white on dark).
- **Hover / Focus:** stroke goes to 35% ink on hover; on focus the stroke disappears under a 2px Moss Ink outline.

### Navigation
- **Header:** sticky, 80px tall, paper at 95% with blur and a bottom hairline; logo left, six 0.9375rem links in Ink 2 (ink and 500 when active), green phone button right.
- **Mobile:** an 8px ghost menu toggle opens a full-width list of 1.125rem links under a hairline.
- **Footer:** night band; contact rows and links at 70 to 80% white, full white on hover.

### Hairline List
Service offerings render as a two-column list of 500-weight items separated by hairlines top and bottom, the closing item in Ink 3.

## Do's and Don'ts

### Do:
- **Do** put ink text on every Logo Green fill, and use Moss Ink for green text on light grounds.
- **Do** pace pages with paper, stone and night bands and 1px hairlines.
- **Do** frame photos at 12px and controls at 8px.
- **Do** set h1 to h3 at 112% width with -0.02em tracking on the largest sizes.
- **Do** lead with real project photography under a night scrim when text overlays it.

### Don't:
- **Don't** introduce a second accent hue, or dark-navy-and-orange contractor chrome.
- **Don't** put white text on Logo Green.
- **Don't** add badge rows, stock imagery or uppercase eyebrows above headings.
- **Don't** separate content with card shadows; the only shadow belongs to the floating mobile call button.
