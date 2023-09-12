const Config = require("../configuration/config");
require("dotenv").config();
const jobModel = require("../models/jobModel");
module.exports = {
  getjobs: async (req, res) => {
    try {
      let page;
      let limit = 20;
      let offset;

      if (req.query.page && req.query.page > 0) {
        page = req.query.page;
        offset = (page - 1) * limit;
      } else {
        offset = 0;
      }
      const data = await jobModel.getjobList(limit, offset);
      console.log("data length>>>>>> ", data.length);
      if (data.length > 0) {
        res.status(200).json({
          status: "success",
          message: "Products retrieved successfully.",
          data: data,
        });
      } else {
        res.status(404).json({
          status: "success",
          message: "No products found in the list.",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "An error occurred while processing your request.",
        error: err.message,
      });
    }
  },
  getJobByLocation: async (req, res) => {
    try {
      console.log("hiii");
      let page;
      let limit = 20;
      let offset;
      let name = req.params.name;
      if (req.query.page && req.query.page > 0) {
        page = req.query.page;
        offset = (page - 1) * limit;
      } else {
        offset = 0;
      }
      const data = await jobModel.getJobListByLocation(name, limit, offset);
      //   console.log("data", data);
      if (data.length > 0) {
        res.status(200).json({
          status: "success",
          message: "Products retrieved successfully.",
          data: data,
        });
      } else {
        res.status(404).json({
          status: "success",
          message: "No products found in the list.",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "An error occurred while processing your request.",
        error: err.message,
      });
    }
  },
};
