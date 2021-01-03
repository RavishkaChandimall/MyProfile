var eka=document.getElementById('eka');
var deka=document.getElementById('customertab');
var thuna=document.getElementById('deka');
var hathra=document.getElementById('thuna');


var dt=document.getElementById('n1');
var ct=document.getElementById('n2');
var it=document.getElementById('n3');
var ot=document.getElementById('n4');

var main=document.getElementById('main');
var customer=document.getElementById('Customer');
var item=document.getElementById('item');
var order=document.getElementById('order');

dt.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action active";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item active";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='block';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='none';
});

ct.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action active";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item";
    ct.className="nav-item active";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='block';
    thuna.style.display='none';
    hathra.style.display='none';
});

it.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action active";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item active";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='block';
    hathra.style.display='none';
});

ot.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action active";

    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item active";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='block';
});
main.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action active";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item active";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='block';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='none';
});

customer.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action active";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item";
    ct.className="nav-item active";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='block';
    thuna.style.display='none';
    hathra.style.display='none';
});

item.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action active";
    order.className="list-group-item list-group-item-action";

    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item active";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='block';
    hathra.style.display='none';
});

order.addEventListener('click',function(){
    main.className="list-group-item list-group-item-action";
    customer.className="list-group-item list-group-item-action";
    item.className="list-group-item list-group-item-action";
    order.className="list-group-item list-group-item-action active";

    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item active";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='block';
});


