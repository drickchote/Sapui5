sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ], function(Controller, MessageToast, JSONModel2){
        "use strict";
        return Controller.extend("opensap.myapp.controller.App", {

            onInit: function(){
                let array = [{nome:'ComboTest1',id:1},{nome:'ComboTest2',id:2},{nome:'ComboTest3',id:3}];
                let array2 = [{texto:'OlaMundo', propriedadeNova:'hello my friend'}];
                this.getView().setModel(new JSONModel2(array),'Combobox');
                this.getView().setModel(new JSONModel2(array2), 'Bind');
                this.getView().setModel(new JSONModel2)()
            },

            onShowHello : function(){
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                console.log(oBundle);
                var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // show message
                MessageToast.show(sMsg);
            },

            pressTeste : function(oEvent){
                let botao = oEvent.getSource();
                let model = this.getView().getModel('Bind');
                let refr = model.getProperty(botao.getBindingContext('Bind').getPath());
                //model.setProperty(botao.getBindingContext('Bind').getPath()+'/texto','ola amigo!!!');
                refr.texto = 'ola meu amigo';
                model.refresh();
                
            }
        });
});