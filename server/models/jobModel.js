const db = require("../configuration/dbConn");

module.exports = {
  getjobList: async (limit, offset) => {
    try {
      const data = await db.any(
        `SELECT * 
      FROM jobs
    `
      );

      return data;
    } catch (err) {
      // throw new Error(common.getErrorText(err));
      console.log(err)
    }
  },
  getJobListByLocation: async (name, limit, offset) => {
    return new Promise(async function (resolve, reject) {
      console.log("location", name);
      try {
        console.log("location", name);
        let data = await db.any(
          `SELECT name
           FROM jobs
           WHERE LOWER(name) LIKE LOWER('%${name}%')
           OFFSET ${offset} LIMIT ${limit}`
        );
        if (data.length > 0) {
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    });
  },
};
