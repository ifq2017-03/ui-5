/*sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/HTML",
	"sap/m/Link"
	
], 

function (Text, HTML, Link) {
	"use strict";
	new Text({
		text: "Hello Faggot11111",
		}).placeAt("content");
	
	new HTML({
		content: "<br/><br/>",
			}).placeAt("content");
		

	new Link({
			text: "Hello Faggot",
			href: "https://google.com"
		}).placeAt("content");

});*/

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.app"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});