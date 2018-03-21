sap.ui.controller("FioriElementsListReport.ext.controller.ListReportExt", {
	onInit: function() {
		var oMySmartFilterBar = this.getView().byId("listReportFilter");
		oMySmartFilterBar.addAggregation("customData",
			new sap.ui.core.CustomData({
				key: "executeStandardVariantOnSelect",
				value: true
			}));
		var liveMode = oMySmartFilterBar.getLiveMode();
		if(!liveMode) {
			oMySmartFilterBar.setLiveMode(true);
		}
	}
});