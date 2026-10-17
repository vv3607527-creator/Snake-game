'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('snake.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, 'snake.html contains an inline game script');
assert.match(html, /<canvas[^>]+id="gameCanvas"/i, 'game canvas is present');
assert.match(html, /id="restartBtn"/, 'restart control is present');
assert.match(html, /id="playAgainBtn"/, 'game-over restart control is present');
assert.match(script, /const GRID_SIZE = 20/, 'game uses a 20x20 grid');
assert.match(script, /setInterval\(update, 120\)/, 'game loop has a fixed interval');
assert.match(script, /occupiedBody = willEat \? snake : snake\.slice\(0, -1\)/, 'tail movement does not cause a false collision');
assert.match(script, /!e\.changedTouches\[0\]/, 'touchend handles missing touch data');
assert.match(script, /ArrowUp|ArrowDown|ArrowLeft|ArrowRight/, 'keyboard controls are implemented');
assert.match(script, /touchstart|touchend/, 'touch controls are implemented');

// Parse JavaScript without executing browser-only code.
new vm.Script(script, {filename: 'snake.html:inline-script'});
console.log('snake-game smoke tests: PASS');
