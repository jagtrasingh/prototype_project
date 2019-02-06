sap.ui.define([
	"open/sap/MasterDetail/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("open.sap.MasterDetail.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);