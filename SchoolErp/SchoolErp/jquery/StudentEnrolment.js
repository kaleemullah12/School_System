
$(document).ready(function () {
    debugger;
    clearform();
    GetList();
   
});


function clearform() {
   
    $("#E_Roll").val('');
    $('#E_Roll').trigger('change');
    $("#E_Class").val('');
    $('#E_Class').trigger('change');
    $("#E_Staff").html('');
    $('#E_Startdate').val('');
    $('#E_Enddate').val('');


}

function Student_Enrolment() {
    debugger;
    //preventDefault();

    
    var rl = $('#E_Roll option:selected').val();
    var cl = $('#E_Class option:selected').val();
    var sec = $('#E_Section option:selected').val();
    var st = $('#E_Staff option:selected').val();
    var date1 = $('#E_Startdate').val();
    var date2 = $('#E_Enddate').val();

    if (rl == "") {
        ShowError("Please Enter  Roll Number");
        return;
    }
    if (cl == "") {
        ShowError("Please Enter Class");
        return;
    }
    if (sec == "") {
        ShowError("Please Enter Section");
        return;
    }
    if (st == "") {
        ShowError("Please Enter Incharge Name");
        return;
    }
    if (date1 == "") {
        ShowError("Please Enter StartDate ");
        return;
    }

    if (date2 == "") {
        ShowError("Please Enter Enddate");
        return;
    }
   

    $.ajax({
        url: "/Students/Student_Enrolment",
        type: "Post",

        data: {
            Stud_Id: rl,
            Class_Id: cl,
            Section_Id: sec,
            Staff_Id: st,
            Session_Start: date1,
            Session_End: date2,
            

        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        datatype: "json",
        success: function (data) {
            if (data.msg == "save") {
                ShowSuccess('Save SuccessFully');
                clearform();
            }
        },
        error: function (error) {
            ShowError('Error in saving');
        },

    });
}
function GetSection() {
    $("#E_Section").html('');
   
    var classId = $('#E_Class').val();
    $.ajax({
        url: "/Students/GetSection/" + classId,
        type: "GET",
        dataType: "json",
        success: function (data) {
            debugger;
            $('#E_Section').append($("<option>Select.......</option>"));
            //$.each(data, function (index, value) {
            for (var i = 0; i < data.length; i++){

                $("#E_Section").append($("<option />").val(data[i].Sec_Id).text(data[i].Name));
            //});
            }
        },
        
    });
}
function GetStaff() {
    $("#E_Staff").html('');
    var Sectionid = $('#E_Section').val();
    $.ajax({
        url: "/Students/GetStaff/" + Sectionid,
        type: "GET",
        dataType: "json",
        success: function (data) {
            debugger;
            $('#E_Staff').append($("<option>Select.......</option>"));
            //$.each(data, function (index, value) {
            for (var i = 0; i < data.length; i++) {
              
                $("#E_Staff").append($("<option />").val(data[i].Staff_Id).text(data[i].Name));
                //});
            }
        },
        
    });
}
function GetList() {
    //debugger;
    $('#tbllist').html('');
    $.ajax({
        type: 'GET',
        dataType: 'html',
        //dataType: 'application/json',
        url: '/Students/StudentEnrolmentList',
        success: function (result) {
            debugger;
            var result = JSON.parse(result);
            for (var i = 0; i < result.length; i++) {
                AddOption = '<tr id=' + + '><td>' + result[i].StudentName + '</td> <td>' + result[i].ClassName + '</td> <td>' + result[i].SectionName + '</td> <td>' + result[i].StaffName + '</td> <td>' + result[i].Session_Start + '</td> <td>' + result[i].Session_End + '</td><td style="text-align:center">' + '<button id="loading" class="btn btn-sm" style="font-size:15px;color:red;hover:green" onclick=' + ' Delete' + '(' + result[i].Stud_Id + ')><span class="glyphicon glyphicon-trash"></span></button> | <button id="Edit" class="btn btn-sm" style="font-size:20px;color:Aqua;" onclick=' + 'GetId' + '(' + result[i].Stud_Id + ')>' + " " + '<span class="glyphicon glyphicon-edit"></span> </button></td> </tr>'
                $('#tbllist').append(AddOption);
            }



        },
        error: function (error) {
        }
    });
}
