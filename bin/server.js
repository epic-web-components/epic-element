#! /usr/bin/env node

// require the module as normal
var browserSync = require("browser-sync");

browserSync({
	server: {
    	baseDir: "dist",
    	routes: {
        	"/bower_components": "bower_components"
    	},
    },
    files: "dist/*"
});