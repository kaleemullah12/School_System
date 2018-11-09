var hashtable = [];
$(document).ready(function () {

});


function Add() {
    var section = $('#section option:selected').val();
    var sectionName = $('#section option:selected').text();
    if (!section) {
        ShowError('Section is required!');
        return;
    }
    debugger;
   
    var isFound = 0;
    for (i = 0; i < hashtable.length; i++) {
        if (hashtable[i].section == section) {
            isFound = 1;
            hashtable[i].section = section;
           
            ShowSuccess('Section is updated!');
        }
    }
    if (isFound == 0) {
        hashtable.push({ section: section, Name: sectionName });
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
                      '<td>' + hashtable[i].Name + '</td>' +
                      '<td class="text-right">' +
                           '<a href="javascript:;"><i class="glyphicon glyphicon-pencil" title="Edit" onclick="EditActionItem(' + hashtable[i].section + ')"></i></a>' +
                           '&nbsp;&nbsp;<a href="javascript:;" onclick="DeleteActionItem(' + hashtable[i].section + ')"><i class="glyphicon glyphicon-trash" title="Delete"></i></a>' +
                      '</td>' +
                  '</tr>';
    }
    $("#container_List").append(html);
}
function EditActionItem(section) {
    debugger;
    $('#section').val(section);
    //$('#section').trigger('change');
    
}


function DeleteActionItem(itemid) {
    for (i = 0; i < hashtable.length; i++) {
        debugger;
        if (hashtable[i].section == itemid) {
            ShowSuccess('item deleted!');
            hashtable.splice(i, 1);
            break;
        }
    }

    FillContainerFromArray();
  
}

