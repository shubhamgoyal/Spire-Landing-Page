var express = require('express')
var path = require('path')
var compression = require('compression')
import routes from './modules/routes'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import React from 'react'

function renderPage(appHtml) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
			    <meta charset="UTF-8" />
			    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
			    <script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>
			    <script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"></script>
			    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
			    <meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Milk for you?</title>
			</head>
			<body>
				<div id=app></div>
			</body>
			<script src="/bundle.js"></script>
		</html>
	`
}

var app = express()
app.use(compression())
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', function(req, res) {
	match({
			routes: routes,
			location: req.url
		},
		(err, redirect, props) => {
			if (err) {
				res.send(500).send(err.message)
			} else if (redirect) {
				
			}
			const appHtml = renderToString(<RouterContext {...props} />)
			res.send(renderPage(appHtml))
		}
	)
})
var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
	console.log('Production Express server running at localhost:' + PORT)
})