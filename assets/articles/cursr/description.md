## Introduction

I've developed Cursr to help optimise workflow in multi-screen setups, idea came to mind due to initial issue I was having when moving mouse between multiple different resolution screen as screens might not align virtually the same way they align in a physical world, leading to mouse getting stuck on screen edges when moving from one screen to another, and sacrificing resolution did not seem like a neat solution. There were already some limited solutions online, neither of which worked the way I wanted and some did not work at all, which is why I decided to create a cross-platform solution myself.

Cursr is built with Electron, Angular and Node.js and use of some native OS libraries for interacting with cursor on the screen. It is still in active development but early release is already available to users on Windows, macOS and list of Linux distributions.

## Technologies

 - TypeScript
 - Node.js
 - Angular
 - Electron

## Features

- Set 1:1 ratio link between any border pair
- Save/load current configuration
- Google analytics for anonymous usage statistics
- Mac, Linux and Windows builds
- Monitor display changes, update configuration on display connect/disconnect
- Global shortcut to disable the app in case it steals cursor control
- Automatic and manual updates
- Option to change keyboard shortcuts

