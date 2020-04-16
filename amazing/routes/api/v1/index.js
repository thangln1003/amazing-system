app.use('/auth', require('./routes/api/v1/auth'));
app.use('/users', require('./routes/api/v1/users'));
app.use('/roles', require('./routes/api/v1/roles'));