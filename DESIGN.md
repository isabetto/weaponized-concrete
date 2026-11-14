# Design

The portfolio is a printed research poster: cream paper, plum ink, one committed plum field, and a dusty-pink highlighter used to mark key words. It exists to show that Isa designs and researches.

## Colour
Palette supplied by Isa (her own reference image, blue removed): cream, olive, butter, dusty pink, plum. Brown was removed at her request.
- paper `#f9f1de` (ground), ink/plum `#54152a` (text and the committed field: hero, footer, contact, next-project band), muted `#6a2a3d` (secondary text, a lighter plum), olive `#9e8e43` (BASE plate), butter `#ece398` (Langspeelplaat plate), marker `#e3a3a4` (the highlighter: active nav link, `.mark` and `.mark-static` words, placeholder tag; also the Lapswans and About plates).
- Strategy: Committed. Plum owns the large fields; pink is never a background block outside plates and highlights.
- Text on plum is paper; text on paper is plum or brown. All pairings pass WCAG AA (lowest measured 6.6:1).

## Typography
- Display and UI: Bricolage Grotesque, 700 for headlines at -0.03em tracking (up to 88px), 600 for UI.
- Reading text: Source Serif 4, 19px at 1.6 line height, measure 62ch.
- No captions or figure numbers under images.

## Components
- Wrap: 1200px, 24/40px gutters, 12-column grid with 32px gaps.
- Figure plate: flat tone (butter, olive, pink) with four crop marks inset 12px; lifts 4px on hover with a soft offset shadow.
- Placeholder: dashed 2px frame, diagonal hatch, pink "Placeholder" tag. Marks content the owner still has to supply.
- Buttons: square, 15px display 600; primary ink, ghost outlined, marker for use on plum.
- Section rule: 2px ink line above poster section headings (Context, Aanpak, Resultaat).
- Nav: hairline bottom border; active link marked with the highlighter.

## Portrait
Isa's own photo from the first version of the site (`public/isa-photo.png`, background removed with macOS Vision, processed locally) in a butter circle, clipped by the circle at the bottom (`src/components/IsaPortrait.jsx`). Right of the hero text on screens 1280px and wider only. The earlier drawn head was dropped at her request.

## Motion
One authored moment: the highlighter on the home headline. It starts a quarter of the way along "onderzoekende blik." and has two inputs, latest one wins. Moving the mouse over the phrase sets how far the marker has travelled (pointer at the first letter is 0, at the last letter is everything). Scrolling also moves it, for people who only scroll and for touch screens: down moves it right, up moves it back, over the first 220px of scroll on wide screens and 140px on narrow ones. The edge is eased every frame and slides through the letters rather than jumping. Everything else is a hover state. Reduced motion shows the position directly without easing.

## Structure
Home follows the layout and measurements of naomicreates.co.za at 1440px: 103px header (brand left, menu centred), 740px hero under it with an 88px title, a 36px lead and a round arrow button, then three 500px project rows inside a 1120px container (560x360 image plate and a 400px text block, alternating sides). Each row has a type pill, 28px title, 16px summary and a "Bekijk case" link. Other routes: /werk (index), /werk/:slug (case: Context, Aanpak, Resultaat with placeholders), /onderzoek, /over-mij, /contact.
