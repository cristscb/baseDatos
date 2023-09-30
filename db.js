const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/miBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

module.exports = mongoose;
