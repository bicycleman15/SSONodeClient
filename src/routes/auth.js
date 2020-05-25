const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/checklogin', auth, (req,res) => {
    return res.status(200).json({
        success : true,
        data : {}
    })
})

export default router;