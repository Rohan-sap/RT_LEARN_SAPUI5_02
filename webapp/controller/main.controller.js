sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sap.prj3.sapui5project3.controller.main", {
            onInit: function () {
                let oModel = new JSONModel("../model/data.json");
                this.getView().setModel(oModel,"portfolio")
            }
        });
    });
