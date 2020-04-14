const express = require('express');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

require('dotenv').config();

app.get('/', (req, res) => res.send('API Running'));
app.use(express.static(pathToSwaggerUi));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/roles', require('./routes/api/roles'));

const PORT = process.env.PORT || 5000;

// var server = http.createServer(app);

var db = require('./db/models');

// sync() will create all table if they doesn't exist in database
db.sequelize.sync().then(function () {
	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	app.on('error', onError);
	app.on('listening', onListening);
});

function normalizePort(val) {
	/* ... */
}
function onError(error) {
	/* ... */
}
function onListening() {
	/* ... */
}

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
