var itemcount = $('#itemtbbody').last().children().children().first().text();
var itemdel_editrow = "";


$('#itemaddbtn').click(function () {

    $('#itemtbbody tr').off('click');

    var itemid = $('#txtitemid').val();
    var itemname = $('#txtitemname').val();
    var itemqty = $('#txtitemqty').val();
    var itemprice = $('#txtitemprice').val();

    $('#itemtable').append('<tr><th scope="row">' + ++itemcount + '</th><td>' + itemid + '</td><td>' + itemname + '</td><td>' + itemqty + '</td><td>' + itemprice + '</td> </tr>');

    let row = {"id": itemid, "name": itemname, "qty": itemqty, "price": itemprice};

    ItemArray.push(row);

    itemClear();

    loadItemid();

    $('#itemtbbody tr').click(function () {
        itemdel_editrow = $(this);
        var setitemid = $($(this).children().get(1)).text();
        var setitemname = $($(this).children().get(2)).text();
        var setitemqty = $($(this).children().get(3)).text();
        var setitemprice = $($(this).children().get(4)).text();


        console.log(setitemid, setitemname, setitemqty, setitemprice);

    });
});

function itemClear() {
    $('#txtitemid').val("");
    $('#txtitemname').val("");
    $('#txtitemqty').val("");
    $('#txtitemprice').val("");
}


$('#itemedit').on('click', function () {

    let ItemID = $('#txtitemid').val();
    let ItemName = $('#txtitemname').val();
    let ItemQty = $('#txtitemqty').val();
    let ItemPrice = $('#txtitemprice').val();

    $('#itemtbbody tr').each(function () {
        if (ItemID == $($(this).children().get(1)).text()) {
            $($(this).children().get(2)).text(ItemName);
            $($(this).children().get(3)).text(ItemQty);
            $($(this).children().get(4)).text(ItemPrice);
        }

    });

});
$('#itemdel').on("click", function () {

    $(itemdel_editrow).remove();

});


$('#txtitemid').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtitemname').focus();
    }
});

$('#txtitemname').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtitemqty').focus();
    }

});
$('#txtitemqty').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#txtitemprice').focus();
    }

});
$('#txtitemprice').on("keypress", function (e) {
    if (e.key == "Enter") {
        $('#itemaddbtn').click();
    }

});

