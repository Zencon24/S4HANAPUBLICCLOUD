/*global QUnit*/

sap.ui.define([
	"schedule/controller/schedule.controller"
], function (Controller) {
	"use strict";

	QUnit.module("schedule Controller");

	QUnit.test("I should test the schedule controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
