const express = require('express');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

require('dotenv').config();

// Init Middleware
app.use(express.json());

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

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
