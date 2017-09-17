sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"FormatterInlineExpFormatterInlineExp/model/formatter"
	
], function(Controller,Formatter) {
	"use strict";

	return Controller.extend("FormatterInlineExpFormatterInlineExp.controller.View1", {
		Formatter:Formatter
	});
});