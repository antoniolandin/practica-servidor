const mongoose = require('mongoose');

const dbConnect = () => {

    // Obtenemos la URI de la base de datos desde las variables de entorno
    const db_uri = process.env.DB_URI;

    // Evitar warnings de mongoose
    mongoose.set('strictQuery', false);
    
    // Intentamos conectar a la base de datos
    try {
        mongoose.connect(db_uri)
    }
    catch (error) {
        console.err(`Error al conectar a la base de datos: ${error}`);
    }
    
    // Eventos de conexión
    mongoose.connection.on("connected", () => { console.log("Conectado a la base de datos") });
}

module.exports = dbConnect;

