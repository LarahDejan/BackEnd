const express = require('express');
const router = express.Router();    

router.post('/', (req, res) => {
    const { name, age, email, talent } = req.body;

    console.log("Received Data: ", {name, age, email, talent})

    res.status(200).json({ message: 'Form Submitted Successfully' });

});

module.exports = router;