

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    Bases: {
        type: Boolean,
        default: true
    },

    Eveil: {
        type: Boolean,
        default: false
    },

    Maitrise: {
        type: Boolean,
        default: false
    }
    
})


const send = new mongoose.model('UsersFans', UserSchema);

module.exports = send;