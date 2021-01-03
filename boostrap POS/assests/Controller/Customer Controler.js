var cuscount = $('#custbbody').last().children().children().first().text();

$('#cusaddbtn').click(function () {
    var cusid = $('#txtCusId').val();
    var cusname = $('#txtCusName').val();
    var cusaddress = $('#txtCusAddress').val();
    var cusnumber = $('#txtCusNumber').val();
    $('#custable').append('<tr><th scope="row">' + ++cuscount + '</th><td>' + cusid + '</td><td>' + cusname + '</td><td>' + cusaddress + '</td><td>' + cusnumber + '</td> </tr>');77
    cusClear();
    loadCusId();
    $('#custbbody tr').last().click(function () {

        var id = $($(this).children().get(1)).text();
        var name = $($(this).children().get(2)).text();
        var address = $($(this).children().get(3)).text();
        var number = $($(this).children().get(4)).text();
        editid = id;
        cusdel_editrow = $(this);

        console.log(id, name, address, number);

        $('#cusid').val(id);
        $('#cusname').val(name);
        $('#cusaddress').val(address);
        $('#cusnumber').val(number);

    });

    $('#cusdel').click(function () {
        $(cusdel_editrow).remove();
        cusdel_editrow = 0;
    });

});


function cusClear() {
    $('#txtCusId').val("");
    $('#txtCusName').val("");
    $('#txtCusAddress').val("");
    $('#txtCusNumber').val("");
};

$('#cusedit').on('click', function () {

    let cusID = $('#txtCusId').val();
    let cusName = $('#txtCusName').val();
    let cusAddress = $('#txtCusAddress').val();
    let cusNumber = $('#txtCusNumber').val();

    $('#custbbody tr').each(function () {
        if (cusID == $($(this).children().get(1)).text()) {
            $($(this).children().get(2)).text(cusName);
            $($(this).children().get(3)).text(cusAddress);
            $($(this).children().get(4)).text(cusNumber);
        }

    });

});


$('#txtCusId').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtCusName').focus();
    }
});

$('#txtCusName').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtCusAddress').focus();
    }

});
$('#txtCusAddress').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtCusNumber').focus();
    }

});
$('#txtCusNumber').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#cusaddbtn').click();
    }

});


