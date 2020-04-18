const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json());
// app.use(express.static(pathToSwaggerUi));

// Extended: https://swagger.io/specification/#infoObject
const swaggerDefinition = require('./swaggerDef');
const swaggerOptions = {
	swaggerDefinition,
	apis: ['./routes/**/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define Routes
// app.get('/', (req, res) => res.redirect('/api-docs'));
app.use('/api/v1/auth', require('./routes/api/v1/auth'));
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/api/v1/roles', require('./routes/api/v1/roles'));

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(expres.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.htmls'));
	});
}

const db = require('./db/models');
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

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
	const addr = server.address();
	const bind =
		typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
