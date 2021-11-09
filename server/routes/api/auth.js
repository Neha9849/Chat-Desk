const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
//get req
router.get('/',auth,(req,res)=>{
 res.send('auth')
})
module.exports = router;