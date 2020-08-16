const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname, 'public');
const app = express();
const port = 3000;

app.use(express.static(staticPath));

app.listen(port, err => {
	if (err) {
		console.log('Something went wrong!')
	}

	console.log('Server is running on port: ' + port);
});