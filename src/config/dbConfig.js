const fs = require('fs');

module.exports = {
	development: {
		username: 'admin',
		password: 'sa@123',
		database: 'amazing-db',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	test: {
		username: 'database_test',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		username: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB_NAME,
		host: process.env.RDS_HOSTNAME,
		port: process.env.RDS_PORT,
		dialect: 'postgres',
		dialectOptions: {
			// ssl: {
			//   ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
			// }
		},
	},
};
