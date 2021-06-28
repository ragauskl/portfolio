## Description <!-- omit in toc -->
RouteFox is a mobile travel recommendation system done as a last year dissertation project for Computing BSc. The primary target of the system is to generate route suggestions between 2+ points of interest (POI), based on the user preferences such as:

 - Visit length
 - Arrival/Departure time
 - Priority and importance of each location
 - Preferred transport type

Secondary target of the application is to provide user with real-time tracking and updates of the route as well as warn user if the planned route is no longer valid, for example if user wanders of from the path and will not be able to get back on track in time for a bus.

## Contents <!-- omit in toc -->
- [Technologies](#technologies)
- [Features](#features)
    - [User System](#user-system)
    - [Map System](#map-system)
    - [Route Configuration](#route-configuration)
    - [Route Suggestions](#route-suggestions)
    - [Saved Route Tracking](#saved-route-tracking)

## Technologies

 - Client Side
	 - Ionic 3
	 - Angular 5
	 - Google Maps API
	 - Google Directions API
	 - Google Places API
 - Server Side
	 - Node.js
	 - Express
	 - JSON Web Token
 - Database
	 - MongoDB

## Features

#### User System
- Authentication/Login
- Password reset
- Personal details modification

#### Map System
- GPS tracking
- Location search by address/name

#### Route Configuration
- Modification of points of interest in a route
- Point of interest preference configuration
  - Add/Remove POI to route
  - Locate POI on map
  - Set 'Earliest' arrival time - for example if user has a booking at set location
  - Set 'Latest' arrival time - for example if place closes at certain time
  - Set visit length
  - Set as 'Mandatory' visit - if not selected, POI can be excluded from the route in order to ensure other POIs which are set as Mandatory get visited in suggested route
- Create name for the route
- Set preferred date for the travel
- Set start and/or end time limit for the route which includes travel and visit time
- Choose a preferred transport type from
  - Walking
  - Public transport
  - Driving

#### Route Suggestions

- Generate a list of suggestions, based on [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem), exploring multiple options and selecting ones that best match user set preferences
- Display suggestions with
  - Short summary of route configurations
  - Small map to preview each suggestion without having to navigate to other page
  - Option to view details of a route:
  	- Start/End time of the journey
  	- Duration
  	- Amount of stops/POIs
  	- Information of directions in chronological order
  		- Places/POIs contain
  			- Name
  			- Start/Arrival time
  			- Departure time
  		- Directions contain
  			- Type of transport
  			- Travel time
  			- Start/End bus/train stop where applicable
  			- Distance/Stop count based on type of transport
- Save/Remove route from saved list

#### Saved Route Tracking

- Show time remaining till the start of the journey
- Display warning to user when live GPS location is too far away from selected route
- Show a chronological progress bar where user can see currently active part of the route with information on what directions to take next
- Dismiss current route
