# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, design leads and hiring managers at agencies and in-house teams in the Netherlands, screening junior UX/UI designers. They skim many portfolios, usually on a laptop between other tasks, often arriving from a link in a CV, LinkedIn message or application, and decide in under a minute whether to open a case and invite her for an interview. Confirmed by Isa on 2026-11-12.

## Product Purpose

Personal portfolio of Isa Bettonvil, UX/UI designer from 's-Hertogenbosch, freshly graduated (MSc Communication and Information Sciences, New Media Design, Tilburg University, July 2026). Success: a hiring reader understands within seconds that she designs *and* researches, opens at least one case, and emails or calls her.

## Positioning

A junior designer whose design is backed by real research: a systematic review on user-centered design in patient portals (bachelor) and an experimental study with a narrative inoculation game against AI-generated disinformation videos (master). Plus hands-on making: she runs her own business (HookedOnMusic, crochet patterns) and did social content and a webshop redesign for Lapswans.

## Operating Context

Read in a browser, mostly desktop, often opened from a link. Reader time is short; cases must be skimmable, with depth (demo video, screens, flyer) available on demand in the existing project overlay. Contact via email or phone.

## Capabilities and Constraints

- Existing site: React + Vite + Tailwind + framer-motion, deployed on Vercel at isabettonvil.nl. Stays on this stack.
- Language: Dutch only. The master thesis title stays in English.
- Structure (revised 2026-11-12): separate pages again, as in the first version: Home (/), Projecten (/werk), Onderzoek (/onderzoek), Over mij (/over-mij), Contact (/contact). Home is only the title and explanation with the work (three alternating project rows linking to /werk/:slug) directly below, with the layout and measurements of naomicreates.co.za (103px header, 740px hero, 500px rows, 560x360 images, 400px text blocks). Each project has its own case page; text beyond the existing project descriptions is clearly marked placeholder for her to replace. Over mij has Opleidingen only; Werkervaring and Talen were removed at her request.
- Dropped as duplicate: project cards on the homepage, the separate Contact page next to the footer (one contact block).
- Skills (decided 2026-11-12): no standalone Skills block anywhere; each project lists its own 4 skills instead.
- Copy may be tightened; facts stay exact (projects, dates, thesis content, work history). No invented outcomes, metrics, clients or testimonials.
- Media lives in `public/` (screens, three demo videos up to 17 MB, thesis covers with student number redacted, Lapswans flyer).

## Brand Commitments

- Name: Isa Bettonvil. Title: "UX/UI Designer" (no "junior", no "Visual Communicator", at her request).
- Self-described voice: "een flinke dosis kleur, nieuwsgierigheid en doe-het-zelf mentaliteit". Warm, direct, informal Dutch.
- Binding requests from Isa: no needless eyebrow (small uppercase) labels; all colour pairings WCAG AA compliant; everything cleanly aligned.
- Colour (revised 2026-11-12, final): Isa supplied her own palette image (cream, olive, butter, dusty pink, plum; blue explicitly excluded, brown removed). It is the binding palette; see DESIGN.md. Text on it must pass WCAG AA.
- Binding later requests: no image captions or figure numbering; the home headline's marker follows the mouse over the phrase itself on laptops and scroll on touch screens; the "Bekijk projecten" button scrolls to the work.

## Evidence on Hand

Three projects (Stichting de Langspeelplaat website, BASE toeslagen-quiz app, Lapswans webshop + flyer + socials) with screenshots and demo videos; two theses with cover pages and Dutch summaries; work history; education; four skills per project; two portrait photos. Absent and not to be fabricated: quantitative results (conversion uplift, test numbers), client quotes, CV PDF, LinkedIn URL, Dribbble/Behance.

## Product Principles

1. Show the work first; the visitor is here to judge her craft.
2. Prove research, don't claim it: method and findings are visible.
3. One click to contact from anywhere on the page.
4. Honest junior: specific about what she did, never inflated.
5. Fewer things, better aligned: every block earns its place.

## Accessibility & Inclusion

WCAG 2.2 AA minimum for all text and UI colour pairings; keyboard navigable (including the section menu and the project overlay); reduced motion respected; alt text for media; videos never autoplay with sound.
