/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapprj3/sapui5_project3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
