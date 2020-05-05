const express = require('express');
const http = require('http');
const helmet = require('helmet');
const passport = require('passport');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const logger = require('./config/winston');
require('./services/passport');
require('dotenv').config();
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

// Init Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(pathToSwaggerUi));

app.use(passport.initialize());
app.use(passport.session());

// Extended: https://swagger.io/specification/#infoObject
const swaggerDefinition = require('./swaggerDef');
const swaggerOptions = {
	swaggerDefinition,
	apis: ['./routes/**/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define Routes
app.use('/auth', require('./routes/api/v1/auth'));
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/api/v1/roles', require('./routes/api/v1/roles'));

if (process.env.NODE_ENV === 'development') {
	app.get('/', (req, res) => res.redirect('/api-docs'));
}

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const db = require('./db/models');
// sync() will create all table if they doesn't exist in database
db.sequelize.sync().then(function () {
	server.listen(port, () => logger.info(`Server started on port ${port}`));
	server.on('error', onError);
	server.on('listening', onListening);
});

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			logger.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			logger.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	const addr = server.address();
	const bind =
		typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	logger.info('Listening on ' + bind);
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
