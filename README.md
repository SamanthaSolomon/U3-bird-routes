## HOMEWORK: Practicing Express routes

It's time to start writing some Express code! We'll write a basic web server that sends out data about some birds.

- Create an Express server in the `server.js` file
- Create and use a `.env` file and set the port to `4000`
- Import the bird data from `db/birds.js` into `server.js`
- Create the following routes:
   
| **URL** | **HTTP Verb** | Action |
|------------|-------------|-------------|
| /birds         | GET       | responds with all birds in our application
| /birds/:id     | GET       | responds with a single bird at that index
| /birds/:type     | GET       | responds with a single bird of that type
| /birds?city=nyc         | GET       | responds with all birds from that city
| /birds?type=pigeon         | GET       | responds with all birds of that type

All routes must return `JSON`


### Bonus:
- Create a `GET /` route that responds with actual HTML that lists out the name for each bird.

## 🚀 Completion looks like:

- Your express app includes a `server.js`, with accurate routes
- All the routes are configured and working
- Your commit history has more than one commit

