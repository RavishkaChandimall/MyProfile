$('#txtOrderID').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtOrderDate').focus();
    }

});
$('#txtOrderDate').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#selectCusID').focus();
    }

});
$('#selectCusID').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtorderCustomerID').focus();
    }

});
$('#txtorderCustomerID').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#selectItemCode').focus();
    }

});
$('#selectItemCode').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtorderCustomerID').focus();
    }

});
$('#txtorderCustomerID').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#selectItemCode').focus();
    }

});
$('#selectItemCode').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#btnAddToTable').click();
    }

});
$('#txtCash').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtDiscount').focus();
    }

});
$('#txtDiscount').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#btnSubmitOrder').click();
        alert("Order Success");


    }

});
function loadCusId() {

    for (var i = 0; i < CustomerArray.length; i++) {
        var r = CustomerArray[i].id;

        $('#selectCusID').append(`<option>${r}</option>`);
    };


}
$('#selectCusID').on('change', function () {
    var id = $(this).val();
    for (var i = 0; i < CustomerArray.length; i++) {
        if (id == CustomerArray[i].id) {
            $('#txtorderCustomerID').val(CustomerArray[i].id);
            $('#txtorderCustomerName').val(CustomerArray[i].name);
            $('#txtorderCustomerAddress').val(CustomerArray[i].address);
            $('#txtorderCustomerNumber').val(CustomerArray[i].number);
        }
    }
});

function loadItemid() {

    for (var i = 0; i < ItemArray.length; i++) {
        var it = ItemArray[i].id;

        $('#selectItemCode').append(`<option>${it}</option>`);
    }
}
$('#selectItemCode').on('change', function () {
    var id = $(this).val();
    for (var i = 0; i < ItemArray.length; i++) {
        if (id == ItemArray[i].id) {
            $('#txtOrderItemId').val(ItemArray[i].id);
            $('#txtItemDescription').val(ItemArray[i].name);
            $('#txtOrderItemPrice').val(ItemArray[i].qty);
            $('#txtQTYOnHand').val(ItemArray[i].price);
        };
    };
});
