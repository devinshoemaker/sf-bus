# The Bus Thing

An application to track the live locations of buses in San Francisco.

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Table of Contents

- [Highlights](#highlights)
- [Installation](#installation)
- [Serve](#serve)
- [Build](#build)
- [Lint](#lint)
- [Test](#test)
- [e2e](#e2e)

## Highlights

- [GitHub Projects](https://github.com/devinshoemaker/sf-bus/projects/1) was used for issue tracking
  - Looking at the issues created and the pull requests associated with them will give you an idea of how I worked through my tasks
- Built with Nx using my custom [Ionic React plugin](https://nxtend.dev/docs/ionic-react/getting-started)
  - [Nx Cloud](https://nx.app/) has been enabled for distributed caching
  - Libraries are used to enforce separation of concern
- Files are automatically formatted with a [Prettier](https://prettier.io) pre-commit hook
- PR's are built and tested with GitHub Actions
- [`@react-google-maps/api`](https://react-google-maps-api-docs.netlify.app/) is used to interface with the Google Maps JavaScript library
- [`Recoil`](https://recoiljs.org) is used for state management
  - This offered a cleaner state management experience for the given requirements as opposed to React context at the expense of an added dependency
- Tests were written with [Jest](https://jestjs.io/) and [Cypress](https://cypress.io)

## Installation

```
yarn install
```

Add `NX_GOOGLE_MAPS_API_KEY` to `.env`.

## Serve

```
yarn nx serve
```

## Build

```
yarn nx run-many --target=build --all
```

## Lint

```
yarn nx run-many --target=lint --all
```

## Test

```
yarn nx run-many --target=test --all
```

## e2e

```
yarn nx e2e sf-bus-e2e
```
