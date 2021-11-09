const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("./../../models/User");
//get req
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err);
  }
  //res.send('auth')
});
module.exports = router;
