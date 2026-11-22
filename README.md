# Word Search

A browser word search game. No build step, no backend, no dependencies —
open `index.html` and it runs.

Play it at https://rkburnside.github.io/wordsearch/

## Playing

Drag across the grid to select a word. A capsule is drawn around the
selection as you drag, and stays on the board once a word is found.
Tap a word in the list for a hint: one of its letters lights up on the
board, and tapping the same word again steps through the rest.

The board and full word list fit on one screen during play. Use
**Full screen** in the header for more room when your browser supports it.
Between 25% and 50% of multi-letter words are placed diagonally when the
puzzle has at least two of them.

Finishing a puzzle covers the board with a splash showing your time,
with buttons to start a new round or change the setup.

## Setup screen

- **Word list** — a built-in list (Random, Harry Potter, Aviation,
  Finance, Bookkeeping, Grilling, and two scripture lists), or type your
  own words, one per line, up to 30.
- **Word count** and **board size** — sizes are offered only where the
  chosen words actually fit, up to 13 x 13.
- **Layout** — six arrangements of the same puzzle, switchable mid-round
  from the header. See `AGENTS.md`.

Starting a new round draws fresh words from the selected list. A puzzle
built from your own words keeps them and reshuffles the board.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup for the setup screen and game screen |
| `app.js` | Grid generation, selection, hints, layouts, word pools |
| `styles.css` | Themes, layouts, board and overlay styling |
| `*-words.txt` | Plain-text copies of the built-in word lists |
| `AGENTS.md` | Project requirements and conventions |

## Deploying

Pushing to `main` publishes the repository root to GitHub Pages via
`.github/workflows/static.yml`. Bump the `?v=` value on the asset links
in `index.html` when shipping changes so browsers do not serve a stale
copy.
