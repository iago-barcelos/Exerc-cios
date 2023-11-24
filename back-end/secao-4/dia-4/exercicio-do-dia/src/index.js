const express = require('express');
const activitiesRouter = require('./routes/activities')


const app = express();
app.use(express.json());
app.use('/', activitiesRouter);


const port = 3002;
app.listen(3002, () => {
  console.log(`server running on port ${ port }`)
});