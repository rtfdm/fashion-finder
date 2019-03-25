<h1 align="center">Fashion Finder</h1>

<p align="center"><a href="https://fashion-finder-prod.firebaseapp.com/">Visit Fashion Tinder</a></p>

[![Maintainability](https://api.codeclimate.com/v1/badges/b766c7ba67ddad5b94a2/maintainability)](https://codeclimate.com/github/rtfdm/fashion-finder/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b766c7ba67ddad5b94a2/test_coverage)](https://codeclimate.com/github/rtfdm/fashion-finder/test_coverage) [![Build Status](https://travis-ci.com/rtfdm/fashion-finder.svg?branch=dev)](https://travis-ci.com/rtfdm/fashion-finder)

## Getting Started

Clone repository: ` git clone git@github.com:rtfdm/fashion-finder.git`.
Install dependencies: `npm install`

### Development

#### Serving

[Parcel](https://parceljs.org/) is being used as a bundler.

Use `npm run start` to start the development server. Then visit `localhost:1234` to view the development website.

Hot reloading is enabled.

#### Testing

[Jest](https://parceljs.org/) and [React Testing Library](https://github.com/kentcdodds/react-testing-library) are being using for testing.

Use `npm run test` to run the test suits.

#### Building

User `npm run build` to build the application. This outputs a `./dist` folder, which isn't version controlled. However, the build script is required for Continuous Integration and Continuous Deployment (using [Travis](https://travis-ci.org/)).

#### Deployment

`master` is automatically deployed to [Firebase Hosting](https://firebase.google.com/docs/hosting/) using Travis CI. To manually deploy a branch, you will need `firebase-tools`:

```
npm install -g firebase-tools
```

Once installed, login and deploy:
```
firebase login #enter details
firebase deploy #deploys checkedout branch
```
