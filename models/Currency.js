const mongoose = require('mongoose');  

const CurrencySchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    max_supply: { 
        type: Number,
        required: true
    },
    currency_symbol: { 
        type: String,
        required: true
    },
    slug: { 
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('currency', CurrencySchema);