# Before launch - fill these in

Search each file for the `.placeholder` CSS class / `[BRACKETED TEXT]` to find every spot below.

## Business info
- [x] Phone number - (812) 373-6183
- [x] Email address - sightlinedrone@outlook.com
- [x] Hours of operation - 9am - 5pm
- [x] Base town/city + service radius - Cross Plains, IN, 30-mile radius (+$1/mile beyond)
- [x] List of towns/counties covered - dropped; site just leads with base city + radius instead
- [x] Facebook page - https://www.facebook.com/sightlinedronesolutions (linked from the header "Follow Us" button on all three pages)

## Credentials
- [x] Footer credential line - "Holds FAA Part 107" (no separate registration number given)

## Pricing (services.html)
- [x] Deer/game recovery price - $250 per call-out + $100 additional once found
- [x] General Photography pricing - $300 starting at, per project (covers general photography and aerial videography; lost pet search and livestock location services were dropped per client request)

## Legal - verify before publishing
- [x] Game recovery legal note removed from services.html per owner confirmation
- [ ] Confirm night-flight compliance (Advanced RPAS cert + lighting) if you're advertising overnight searches

## Content
- [ ] Hero background - currently a custom SVG illustration (`img/hero-bg.svg`, drone over hills/treeline) used on every page banner. Swap for a real photo by replacing that file, or point the `.hero`/`.page-header` background-image in `css/style.css` at a new file.
- [x] Service photos - `img/thermal-deer.png` (deer/game recovery) and `img/arial-photography-web.jpg` (general photography, a ~600KB resized/compressed copy of the original 20MB `img/arial-photography.png` - the site references the compressed copy, original kept as-is on disk)
- [ ] Reviews - homepage has an empty "reviews slot" ready for real testimonials; don't fill with fake ones

## Functionality
- [x] Contact page no longer uses a form - it outlines what to include and links to a `mailto:` for sightlinedrone@outlook.com instead.
