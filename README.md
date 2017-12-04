# Cartography

This project is basically an attempt at automating creating svg files of a state's counties.  
Mike Bostock wrote [an article](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c)
on how to do this from the command line and I'm attempting to create a nodejs tool which can
also do this.  Basically you provide the state and this app should output an SVG file.

## Getting the project and setting up your environment
You must have [nodejs](https://nodejs.org/) installed.
And you need TypeScript installed: `npm i -g typescript`

## Building and running

1. Clone this project: `git clone https://github.com/evanlarsen/cartography`
2. Go into the project directory: `cd cartography`
3. Install dependencies `npm install`
4. Build & Run `npm start`

## Running the Tests

Run `npm test` to run the unit tests