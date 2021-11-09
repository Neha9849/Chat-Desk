const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
//post req (to register)
router.post('/',[
    body('name').isLength({min:3}).withMessage('name must have atleast 3 chars'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('password must contain 8 or more characters')
]
,(req,res)=>{
    //validation
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    console.log(req.body)
    //res
    res.send('users')
})
module.exports = router;