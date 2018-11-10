var hashtable = [];
$(document).ready(function () {

});


function Add() {
    var Section_Id = $('#section option:selected').val();
    var sectionName = $('#section option:selected').text();
    if (!Section_Id) {
        ShowError('Section is required!');
        return;
    }
    debugger;
   
    var isFound = 0;
    for (i = 0; i < hashtable.length; i++) {
        if (hashtable[i].Section_Id == Section_Id) {
            isFound = 1;
            hashtable[i].Section_Id = Section_Id;
           
            ShowSuccess('Section is Already Exit!');
        }
    }
    if (isFound == 0) {
        hashtable.push({ Section_Id: Section_Id, Name: sectionName });
        ShowSuccess('Section added!');
    }

    FillContainerFromArray();
}

function FillContainerFromArray() {
    debugger;
    var html = '';
    $("#container_List").empty();
    if (hashtable.length == 0) {
        html += "<tr><td>No item added</td></tr>";
    }
    for (i = 0; i < hashtable.length; i++) {
        html += '<tr>' +
            '<td>' + hashtable[i].Section_Id + '</td>' +
            '<td>' + hashtable[i].Name + '</td>' +
                      '<td class="text-right">' +
                           
            '&nbsp;&nbsp;<a href="javascript:;" onclick="DeleteActionItem(' + hashtable[i].Section_Id + ')"><i class="glyphicon glyphicon-trash" title="Delete"></i></a>' +
                      '</td>' +
                  '</tr>';
    }
    $("#container_List").append(html);
}


function DeleteActionItem(itemid) {
    for (i = 0; i < hashtable.length; i++) {
        debugger;
        if (hashtable[i].Section_Id == itemid) {
            ShowSuccess('item deleted!');
            hashtable.splice(i, 1);
            break;
        }
    }

    FillContainerFromArray();
  
}

function Save() {
    var classid = $('#Classid option:selected').val();
    if (classid == "") {
        ShowError("Please Enter Class");
        return;
    }
    debugger;
    $.ajax({
        url: "/Cl_Sec/Save",
        type: "Post",

        data: {
            Classid: classid,
            SectionList: hashtable
           },
       
        datatype: "json",
        success: function (data) {
            if (data.msg == "Save") {
                ShowSuccess('Save SuccessFully');
          //$("input[name='gender']:checked").val('Male');
            } 
        },
        error: function (error) {
            ShowError("Error In saving");
        },
    });
}