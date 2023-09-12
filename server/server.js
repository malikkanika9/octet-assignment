const express = require('express')
const cors = require('cors')
const jobRoute = require("./routes/jobRouter")
const rateLimit = require('express-rate-limit');
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1",jobRoute);

module.exports=app