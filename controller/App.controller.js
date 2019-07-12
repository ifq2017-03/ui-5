sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
         MessageToast.show("ALARM!!!!");
      },
      AlarmButtonPress : function () {
         // show a native JavaScript alert
         MessageBox.alert("ALARM!!!!");
      }
   });    
}); 