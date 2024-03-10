const express = require('express');

const router = express.Router();

router.get('/add', (req, res)=>{
    res.send('post nd response');
})

router.get('/delete', (req, res)=>{
    res.send('Deleted');
})
router.get('/getAll', (req, res)=>{
    res.send('getAll');
})
router.get('/update', (req, res)=>{
    res.send('Updated');
})

module.exports = router;