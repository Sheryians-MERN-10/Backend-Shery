// Import the mongoose library
const mongoose = require('mongoose');

// Import passport-local-mongoose plugin
const plm = require('passport-local-mongoose');

// Define a new schema for the user collection
const user_schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true // Field is required
    },
    password: String, // Password field as a string
}, { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

// Apply the passport-local-mongoose plugin to the schema
// Configured to use 'email' as the field for login instead of the default 'username'
// user_schema.plugin(plm); 
user_schema.plugin(plm, { usernameField: 'email' });    // ⭐⭐⭐

// Create a model named "social-media" using the user schema
const User = mongoose.model("User", user_schema);

// Log a message indicating the schema has been created
console.log("Schema Created");

// Export the user collection model
module.exports = User;
