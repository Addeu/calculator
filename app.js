const express = require('express');
const path = require('path');
const appRouter = require('./routes/router.js');
const staticPath = path.join(__dirname, 'public');
const app = express();
const port = 3000;

app.use(express.static(staticPath));
app.use(express.json());
app.use('/api', appRouter);

app.listen(port, err => {
	if (err) {
		console.log('Something went wrong!')
	}

	console.log('Server is running on port: ' + port);
});