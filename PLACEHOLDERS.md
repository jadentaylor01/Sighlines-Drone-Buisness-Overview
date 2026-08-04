# Before launch - fill these in

Search each file for the `.placeholder` CSS class / `[BRACKETED TEXT]` to find every spot below.

## Business info
- [x] Phone number - (812) 373-6183
- [x] Email address - sightlinedrone@outlook.com
- [x] Hours of operation - 7am - 10pm
- [x] Base town/city + service radius - Cross Plains, IN, 30-mile radius (+$1/mile beyond)
- [x] List of towns/counties covered - dropped; site just leads with base city + radius instead

## Credentials
- [x] Footer credential line - "Holds FAA Part 107" (no separate registration number given)

## Pricing (services.html)
- [x] Deer/game recovery price - $250 per call-out + $100 bonus if found
- [x] Lost pet search price - $150 per search + $100 bonus if found
- [x] Livestock location price - $150 per flight + $100 bonus if found
- [x] Aerial add-on pricing - $300 starting at, per project (covers mapping, inspection, and real estate)

## Legal - verify before publishing
- [x] Game recovery legal note removed from services.html per owner confirmation
- [ ] Confirm night-flight compliance (Advanced RPAS cert + lighting) if you're advertising overnight searches

## Content
- [ ] Hero background - currently a custom SVG illustration (`img/hero-bg.svg`, drone over hills/treeline) used on every page banner. Swap for a real photo by replacing that file, or point the `.hero`/`.page-header` background-image in `css/style.css` at a new file.
- [ ] Service photos - one placeholder per service block in services.html
- [ ] Reviews - homepage has an empty "reviews slot" ready for real testimonials; don't fill with fake ones

## Functionality
- [ ] Contact form has no backend - `js/main.js` just shows a demo message on submit. Wire it to Formspree, Netlify Forms, Web3Forms, or a custom endpoint.
- [ ] File upload field in the form won't actually receive files without a backend.
