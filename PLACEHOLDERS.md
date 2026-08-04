# Before launch - fill these in

Search each file for the `.placeholder` CSS class / `[BRACKETED TEXT]` to find every spot below.

## Business info
- [x] Phone number - (812) 373-6183
- [ ] Email address - currently `mailto:placeholder@example.com`
- [ ] Hours of operation
- [ ] Base town/city + service radius
- [ ] List of towns/counties covered (index.html service area section)

## Credentials
- [ ] RPAS registration number (shown in the footer on every page)

## Pricing (services.html)
- [ ] Deer/game recovery price
- [ ] Lost pet search price
- [ ] Livestock location price
- [ ] Aerial add-on pricing

## Legal - verify before publishing
- [ ] Confirm drone-assisted game recovery is legal in your province - rules on aircraft use tied to hunting vary and some jurisdictions restrict it even post-kill
- [ ] Confirm night-flight compliance (Advanced RPAS cert + lighting) if you're advertising overnight searches

## Content
- [ ] Hero background - currently a custom SVG illustration (`img/hero-bg.svg`, drone over hills/treeline) used on every page banner. Swap for a real photo by replacing that file, or point the `.hero`/`.page-header` background-image in `css/style.css` at a new file.
- [ ] Service photos - one placeholder per service block in services.html
- [ ] Reviews - homepage has an empty "reviews slot" ready for real testimonials; don't fill with fake ones

## Functionality
- [ ] Contact form has no backend - `js/main.js` just shows a demo message on submit. Wire it to Formspree, Netlify Forms, Web3Forms, or a custom endpoint.
- [ ] File upload field in the form won't actually receive files without a backend.
