const getAll = async (req, res, next) => {
    try {
      console.log("in try");
  
      return res.status(201).send("OK");
    } catch (ex) {
      return next(ex);
    }
  };
  
  module.exports = {
    getAll
  };
