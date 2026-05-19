# Juan Hume — Portfolio

Personal portfolio site for Juan Hume, full stack developer based in Columbus, Ohio.

**Live site:** [cohortjuan.github.io](https://cohortjuan.github.io)

## About

Built from scratch in HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies. One file, runs anywhere.

The page is a working demonstration of the skills it claims: responsive layout with `clamp()` and modern CSS, a Canvas API game, animated theme transitions using the View Transitions API, and clean component patterns.

## Features

- **Fully responsive** — adapts fluidly from 320px phones to wide desktops using `clamp()` and media queries
- **Dark / Light themes** — animated circular reveal transition between modes, with a parchment aesthetic in light mode and a midnight library aesthetic in dark mode
- **Snake game** — built with the Canvas API. Win at 20+ points and you get "first dibs" at hiring me. Lose and you owe me a job offer. Either outcome opens a prefilled email
- **Animated stat counters** — numbers count up from zero when scrolled into view, using `IntersectionObserver` and `requestAnimationFrame`
- **Progressive disclosure** — "the hardest part" section on each project is collapsed by default for recruiters, expandable for engineers
- **Ambient background** — three slow-drifting gradient orbs (blue, gold, burgundy) distribute color across the page without competing with content

## Tech

- HTML5
- CSS3 (custom properties, `clamp()`, grid, flexbox)
- Vanilla JavaScript (Canvas API, IntersectionObserver, View Transitions API, localStorage)
- Google Fonts: Playfair Display, DM Sans, IBM Plex Mono

No frameworks, no libraries, no build tools.

## Running locally

Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/juanhume/juanhume.github.io.git
cd juanhume.github.io
open index.html
```

That's it. No `npm install`. No build step. It just runs.

## Background

Recent graduate of a 19-week immersive bootcamp — went from zero to shipping two real applications in just under five months. This portfolio site is the third.

Currently learning React Hooks and state management. Actively interviewing for junior developer roles in the Columbus / Ohio area.

## Contact

- **LinkedIn:** [linkedin.com/in/juanhume](https://www.linkedin.com/in/juanhume/)

## License

Feel free to fork this and use it as a starting point for your own portfolio. If you do, a link back is appreciated but not required.
