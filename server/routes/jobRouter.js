const router = require("express-promise-router")();

const jobController = require("../controllers/jobController");
router.route("/jobs").get(jobController.getjobs);


module.exports = router;
