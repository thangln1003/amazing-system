const host = `${process.env.DOMAIN_NAME}`;

module.exports = {
	swagger: '2.0',
	info: {
		description: 'Amazing API Information',
		version: '1.0.0',
		title: 'Amazing API',
		contact: {
			name: 'Amazing Developer',
		},
		servers: ['http://localhost:5000'],
	},
	host,
	basePath: '/api/v1',
	schemes: ['http', 'https'],
	security: [
		{
			implicit: ['read', 'write'],
		},
	],
	securityDefinitions: {
		implicit: {
			type: 'oauth2',
			authorizationUrl: 'http://example.com/oauth/auth',
			flow: 'implicit',
			scopes: {
				write: 'allows modifying resources',
				read: 'allows reading resources',
			},
		},
	},
};
