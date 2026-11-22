# Wordsearch Project

## Business Requirements

- Build an MVP wordsearch game that runs in Google Chrome
- The app should display a letter grid containing hidden words
- Include a visible word list showing which words remain to be found
- Users should be able to select letters with mouse or touch drag
- A valid selection should highlight the found word and mark it complete in the word list
- Support words in horizontal, vertical, diagonal directions, and reverse
- the title box should only be 1 row
- MVP will include a timer that resets at the start of every game
- do not include the title "chrome ready puzzle"
- make the title: "word search"
- enable a start page that will allows configuring the game's board size
- add the feature where the player can provide the list of words
- the app will calculate the minimum word search board size and provide size options

- Include at least one built-in puzzle on first load so the app is immediately playable
- Keep the feature set simple: no accounts, no backend, no multiplayer
- The priority is a polished, playful, high-quality UI that feels great in the browser

## Technical Details

- Implement as a modern web app that runs locally in Chrome
- Prefer a simple frontend-only architecture
- No persistence required for the MVP
- No user management
- Use popular, lightweight libraries only when they clearly simplify the implementation
- Optimize for fast load time, responsive layout, and smooth pointer interactions
- The app should work well on both desktop and laptop Chrome window sizes

## Gameplay Rules

- The puzzle grid should be clearly readable and easy to interact with
- Selected paths should provide immediate visual feedback
- Only exact matches to target words should count as found
- Found words should remain visibly completed
- found words should be crossed out in the word list
- The puzzle should have a clear completion state when all words are found
- Include a simple restart or new game flow if easy to support
- Starting a new round draws a fresh set of words from the selected list; a puzzle built from custom words keeps those words and only reshuffles the board
- A drag in progress is drawn as a capsule around the whole selection, not a highlight on each letter
- Completing a puzzle covers the board with a splash: a smiley face, the finish time, and buttons to start a new game or change the setup

## Layouts

- The game screen offers six selectable layouts: classic, classic rail, board first, split desk, hunt mode, puzzle book
- A layout picker sits on the setup screen and in the header, so layouts can be switched mid-round
- The selected layout persists between sessions in local storage
- Layouts are driven by a data-layout attribute on the game screen, with classic as the default
- All layouts fit the board and word list in the viewport, with clearance below the bottom row
- Classic Rail uses a divided word strip that wraps as needed
- Split Desk shows Remaining and Solved beside the board, with the same sections below it on narrow screens
- Hunt mode shows one target by default, offers a toggle for the full list, and limits hints to three per round

## Visual Direction

- Aim for a crisp, modern game-like interface rather than a generic form layout
- Prioritize readability of letters, selection states, and completed words
- Use color, spacing, and motion intentionally to make interactions feel satisfying
- Keep the interface uncluttered and focused on the puzzle

## Strategy

1. Write a plan with success criteria for each phase, including setup, gameplay, styling, and testing.
2. Build the puzzle UI and selection logic with the minimum architecture needed.
3. Test thoroughly in Chrome, including pointer interactions, word validation, and completion flow.
4. Only finish when the MVP is playable end-to-end and runs cleanly in the browser.

## Coding Standards

1. Use current, idiomatic frontend patterns and keep dependencies minimal.
2. Keep it simple. Do not add extra modes, backend features, or unnecessary abstractions.
3. Be concise. Keep documentation short and practical. No emojis ever.
