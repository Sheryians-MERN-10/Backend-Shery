// Import the mongoose library
const mongoose = require('mongoose');

// Import passport-local-mongoose plugin
const plm = require('passport-local-mongoose');

// Define a new schema for the user collection
const user_schema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Book Name is Required!"], // Field is required with a custom error message
    },
    username: {
        type: String,
        required: true // Field is required
    },
    password: String, // Password field as a string
}, { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

// Apply the passport-local-mongoose plugin to the schema
user_schema.plugin(plm);

// Create a model named "social-media" using the user schema
const Demo_Collection = mongoose.model("DemoAuth", user_schema);

// Log a message indicating the schema has been created
console.log("Schema Created");

// Export the user collection model
module.exports = Demo_Collection;
