const express = require("express");
const router = express.Router();
const Form = require("../models/Form"); 

// POST route to handle form submissions
router.post("/", async (req, res) => {
    const { name, age, email, talent } = req.body;

    try {
        // 1. Create a new document in the database
        const formEntry = new Form({ name, age, email, talent });
        
        // 2. Physically save it to MongoDB Atlas
        const savedEntry = await formEntry.save(); 

        console.log("Saved Data: ", savedEntry);
        
        // 3. Send a success message back to your React app
        res.status(201).json({ 
            message: "Form Submitted Successfully", 
            data: savedEntry 
        });
    } catch (error) {
        console.error("Error saving form data:", error);

        // Handle duplicate email error (if you set email to unique)
        if (error.code === 11000) {
            res.status(400).json({ message: "Email already exists!" });
        } else {
            res.status(500).json({ message: "Error saving form data." });
        }
    }
});

module.exports = router;