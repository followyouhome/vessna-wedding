# Vessna Wedding

All new website builded as isomorphic app. Using _Keystonejs_ as CMF and _Vue js_ for front-end components.

[![Vue js](https://image.ibb.co/jYMzWw/vuejs.png)](https://vuejs.org/v2/guide/) [![Keystonejs](https://image.ibb.co/cZN6Bw/keystonejs.png)](http://keystonejs.com/docs/) [![Node.js](https://image.ibb.co/g4FhjG/nodejs.png)](https://nodejs.org/en/docs/)

# Deploy

  - Install latest LTS _Node.js_ and _MongoDB_
  - Clone project
  - `npm install`
  - `npm run build`
  - `npm start`
  - Restore database dump with `mongorestore -d Vessna-Wedding Vessna-Wedding`
  - Add project to pm2 with `pm2 start --name Vessna-Wedding npm -- start`

# Development

To run all required processes on local environment run `npm run dev:local`
