const PNG = require("png-js");

export default (req, res) => {
    
  console.log(req.body.file)
  res.status(200).json({ test: "123" });
};
