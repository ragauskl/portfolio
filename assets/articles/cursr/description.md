## Introduction

Cursr is a cross-platform utility application for optimizing mouse movements by creating custom links/portals between borders in a multiple display setup, but can also be useful to some with a single display setup. It was initially created to solve issue of mouse getting stuck on edges between 2 screens with different resolution as screens might not align virtually the same way they align in a physical world, leading to mouse getting stuck on screen edges unexpectedly when moving from one screen to another. There were other existing solutions, but they were not working as expected and/or did not provide good user experience.

Currently Cursr is being continuously developed to further improve and add ways of using mouse in more efficient ways, next major feature being Virtual KVM allowing to use one mouse and keyboard across multiple devices as well as share files and more.

Cursr is built with Electron, Angular and Node.js and use of native OS libraries for interacting with cursor on the screen and retrieving display information. It is still under active development.

For latest information please see <ins>[Cursr Github Repository](https://github.com/bitgapp/Cursr)</ins> or <ins>[Official Webpage](https://cursr.app)</ins>.

## Technologies

 - TypeScript
 - Node.js
 - Angular
 - Electron
 - C++
 - Objective-C

## Features

* Create links between borders to allow mouse to move between them to:
  * Move mouse proportionally between different resolution screens
  * Move mouse faster between displays that are further apart by creating a link between their borders, instead of moving mouse across all screens in between
* Split border into smaller segments allowing you to move from one border to 2 or more displays
* Save setups for different display layouts and let Cursr auto-select best matching setup when application starts or layout changes
* Customize the UI by
  * Changing colors of linked borders and border segments
* User authentication system
* Application licensing system
* Modify keyboard shortcuts
* Automatic and manual update system
* Analytics for anonymous usage statistics

