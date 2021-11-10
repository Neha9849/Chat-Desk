const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("./../../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
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
//login route (post req)
router.post(
  "/",
  async (req, res) => {
    const { email, password } = req.body;
      //email exists or not
      const user = await User.findOne({email:email})
      console.log(user)
      //if email exists than password match or not
      if(user==null){
        res.status(400).json({msg:"invalid credentials"})
      }
      const passMatch = await bcrypt.compare(password,user.password)
      if(!passMatch){
        res.status(400).json({msg:"invalid password"})
      }
      //jwt
      const payload={
          user:{
              id:user.id
          }
      }
      jwt.sign(payload,
        config.get('jwtSecret'),
        {expiresIn:36000},
        (err,token)=>{
            if(err){
                throw err
            }
            res.json({token})
            console.log(token)

        }
        )
  }
);
module.exports = router;
