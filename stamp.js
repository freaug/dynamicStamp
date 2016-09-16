/*/////////////////////
Eddie Farr
ed.mc.farr@gmail.com
*//////////////////////

//Builds the dialog box
var dialog = {
        projectValue: "",
        byValue: "",
        dateValue: "",
        radioValue: "",
        // called when OK pressed
        commit:function (dialog) {  
                var results = dialog.store();
                this.byValue = results["txt1"];
                this.projectValue = results["txt2"];
                this.dateValue = results["txt3"];
                this.radioValue = this.getRadioVal(results);
        }, 
        //determine value for stamp radio nutton
        getRadioVal:function(results) {
            for(var i = 1; i <=5; ++i) {
                if(results["chr"+i]) {
                    switch (i) {
                        case 1:
                            var radioVal = "one";
                            break;
                        case 2:
                            var radioVal = "two";
                            break;
                        case 3:
                            var radioVal = "three";
                            break;
                        case 4:
                            var radioVal = "four";
                            break;
                        case 5:
                            var radioVal = "five";
                            break;
                    }
                }
            };
            return radioVal;
        },
        //actual gui elements, can change style here
        description:
        {       
                name: "Construction Stamp Information",  
                elements:
                [       
                        {       
                                type: "view", 
                                align_children: "align_left",
                                elements:
                                [ 
                                    {
                                        type: "view",
                                        align_children: "align_top",
                                        elements:
                                        [    
                                            {       
                                                    name: "Project Name: ",
                                                    type: "static_text",
                                            },      
                                            {       
                                                    item_id: "txt1", 
                                                    type: "edit_text",
                                                    width: 300,
                                            },
                                        ]
                                    },
                                    {
                                        type: "gap",
                                        height: 10
                                    },
                                    {
                                        type: "static_text",
                                        name: "Options: ",
                                        alignment: "align_left",
                                    },
                                    {
                                        type: "cluster",
                                        align_children: "align_top",
                                        elements:
                                        [
                                            {
                                                type: "view",
                                                elements:
                                                [
                                                    {
                                                        type: "radio",
                                                        item_id: "chr1",
                                                        group_id: "Group2",
                                                        name: "Approved",
                                                    },
                                                    {
                                                        type: "radio",
                                                        item_id: "chr2",
                                                        group_id : "Group2",
                                                        name: "Rejected"
                                                    },
                                                    {
                                                        type: "radio",
                                                        item_id: "chr3",
                                                        group_id: "Group2",
                                                        name: "Submit Specified Item"
                                                    }
                                                ]
                                            },
                                            {
                                                type: "view",
                                                elements:
                                                [
                                                    {
                                                        type: "radio",
                                                        item_id: "chr4",
                                                        group_id: "Group2",
                                                        name: "Approved As Corrected"
                                                    },
                                                    {
                                                        type: "radio",
                                                        item_id: "chr5",
                                                        group_id: "Group2",
                                                        name: "Revise And Resubmit",
                                                        value: "On",
                                                    }
                                                ]
                                            }       
                                        ]
                                    },
                                    {
                                        type: "gap",
                                        height: 10
                                    },
                                    {
                                        type: "view",
                                        align_children: "align_top",
                                        elements:
                                        [
                                            {       
                                                name: "Proposed By: ",
                                                type: "static_text"
                                            },      
                                            {       
                                                item_id: "txt2", 
                                                type: "edit_text",
                                                width: 150
                                            },
                                            {
                                                name: "Proposal Date: ",
                                                type: "static_text"
                                            },
                                            {
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 150
                                            }
                                        ]
                                    },
                                    {
                                        type: "gap",
                                        height: 10
                                    },    
                                    {       
                                            type: "ok_cancel",
                                            ok_name: "Ok",
                                            cancel_name: "Cancel"
                                    },      
                                ]       
                        },      
                ]       
        }       
}; 

//assign the selections to the stamp
if(event.source.forReal && (event.source.stampName == "#stamp1"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.byValue;
    event.value = cMsg;
    event.source.source.info.exhibit = cMsg;

    cMsg = dialog.projectValue;
    this.getField("By").value = cMsg;

    cMsg = dialog.dateValue;
    this.getField("Date").value = cMsg;

    if(dialog.radioValue == "one")
    {
        this.getField("Group2").checkThisBox(0,true);        
    }
    else if(dialog.radioValue == "two")
    {
        this.getField("Group2").checkThisBox(1,true);
    }
    else if(dialog.radioValue == "three")
    {
        this.getField("Group2").checkThisBox(2,true);
    }
    else if(dialog.radioValue == "four")
    {
        this.getField("Group2").checkThisBox(3,true);
    }
    else if(dialog.radioValue == "five")
    {
        this.getField("Group2").checkThisBox(4,true);
    }
  }
}

