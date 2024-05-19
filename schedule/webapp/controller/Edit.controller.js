sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("schedule.controller.Edit", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("editView").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            
            // Bind the view to the selected item's data
            var oView = this.getView();
            var oModel = oView.getModel();
            var sPath = `/A_SchAgrmtSchLine(SchedulingAgreement='${oArgs.SchedulingAgreement}',SchedulingAgreementItem='${oArgs.SchedulingAgreementItem}',ScheduleLine='${oArgs.ScheduleLine}')`;
            
            oModel.read(sPath, {
                success: function (oData) {
                    oView.setModel(new sap.ui.model.json.JSONModel(oData), "editData");
                },
                error: function () {
                    MessageBox.error("Failed to load data for editing.");
                }
            });
        },

        onSavePress: function() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var oData = oView.getModel("editData").getData();
            var sPath = oView.getBindingContext().getPath();
            
            // Add logic to update the data using the OData model
            oModel.update(sPath, oData, {
                success: function() {
                    MessageBox.success("Data updated successfully!");
                },
                error: function() {
                    MessageBox.error("Failed to update data.");
                }
            });
        }
    });
});
