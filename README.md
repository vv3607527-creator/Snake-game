# Snake Game

A self-contained browser Snake game implemented in `snake.html`.

## Run locally

Open `snake.html` in a modern browser. Use arrow keys or WASD, swipe on a touch
screen, or press **Space** to restart after game over.

## Test

The project has an offline smoke suite with no network access or production
side effects:

```sh
npm test
```

The test validates the document controls, keyboard/touch input hooks, game-loop
configuration, collision handling, and JavaScript syntax.
