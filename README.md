## HOMEWORK: Practicing Express routes

![bird](./assets/reps.jpg)

It's time to start writing some Express code! We'll write a basic web server that sends out data about some birds.

- Create an Express server in the `server.js` file
- Import the bird data from `db/birds.js` into `server.js`
- Create the following routes:
   
| **URL** | **HTTP Verb** | Action |
|------------|-------------|-------------|
| /birds         | GET       |  responds with all birds in our application
| /birds/:id     | GET       | respond with a single bird

All routes must return `JSON`


### Bonus:
- Create a `GET /` route that responds with HTML listing out the name for each bird.
- Create a `GET /cities/:name` route that responds with the birds in that city, e.g. `/cities/NYC`

## 🚀 Completion looks like:

- Your express app includes a `server.js`, with accurate routes
- Your commit history has more than one commit

