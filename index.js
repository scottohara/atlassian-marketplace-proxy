var request = require('request'),
    app = require('express')();

app.options('/rest/2/vendors/:vendorid/reporting/sales/transactions', function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "authorization");
	res.send();
});

app.get('/rest/2/vendors/:vendorid/reporting/sales/transactions', function(req, res) {
	"use strict";
    
	var opts = {
		method: req.method,
		baseUrl: "https://marketplace.atlassian.com",
		url: req.originalUrl,
        headers: {
            authorization: req.headers.authorization
        }
	};

	request(opts).pipe(res);
});

app.listen(8001);