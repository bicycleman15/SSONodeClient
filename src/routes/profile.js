const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/getuser', auth, (req,res) => {
    return res.status(200).json({
        success : true,
        data : {
            user : req.user
        }
    })
})

export default router;