sap.ui.define([
    'jquery.sap.global',
    'sap/m/Button',
    'sap/m/Dialog',
    'sap/m/List',
    'sap/m/Text',
    'sap/m/StandardListItem',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
],function(jQuery, Button, Dialog, List,Text, StandardListItem, Controller, JSONModel){
    var texto = new Text();
    texto.setText("ola marcos");
   
    return Controller.extend("treinando.controller.App", {
        pressDialog: null,
		fixedSizeDialog: null,
		resizableDialog: null,
		draggableDialog: null,
		escapePreventDialog: null,
        confirmEscapePreventDialog: null,
        
		onDialogPress: function () {
            // let array = [{nome:'Marcos', id:1, idade:21, curso:'Sistemas de Informação'}];
            // this.getView().setModel(new JSONModel(array), 'tabela');
			if (!this.pressDialog) {
                let frag = sap.ui.xmlfragment("treinando.view.Teste", this);

                this.pressDialog = new Dialog({
					title: 'Available Products',
                    content: frag,
                    // content: new List({
					// 	items: [
                    //         new StandardListItem({
                    //             title: 'cacete'
                    //         }),
                    //         new StandardListItem({
                    //             title: 'Teste2'
                    //         }),
                    //     ]
					// }),
					beginButton: new Button({
						text: 'Close',
						press: function () {
							this.pressDialog.close();
						}.bind(this)
					})
				});

				//to get access to the global model
				this.getView().addDependent(this.pressDialog);
			 }

			this.pressDialog.open();
		}

    });
});