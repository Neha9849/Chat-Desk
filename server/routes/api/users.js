const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
//post req (to register)
router.post(
  "/",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("name must have atleast 3 chars"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must contain 8 or more characters"),
  ],
  async (req, res) => {
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
   
      //if user exists
      const user =  await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: "user alrdy exists" }] });
      }
      //get gravator
      const avatar = gravatar.url("nehadeekonda9849@gmail.com", {
        s: "400",
        r: "pg",
        d: "wavatar",
      });
      console.log(avatar);
      let userDb = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt password
      const salt = await bcrypt.genSalt(10);
      userDb.password = await bcrypt.hash(password, salt);
      console.log(userDb);
      await userDb.save(function(err,doc){
          if(err){
              console.log(err)
          }
          console.log('saved')
      });
      res.send("user registered");
  }
);
module.exports = router;
