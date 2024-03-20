const mongoose = require('mongoose');

// Definimos el esquema de la colección "commerces"
const CommerceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        CIF: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            unique: true
        },
        address: {
            type: String,
        },
        id: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// "commerces" será el nombre de la colección en la base de datos
module.exports = mongoose.model('commerces', CommerceSchema);
