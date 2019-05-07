function addBag(id) {
    var i = localStorage.getItem(+id);
    if (i > 0) {
        localStorage.setItem(+id, +i + 1);
    }
    else {
        localStorage.setItem(+id, '1');
    }
    checkBag()
}

function remBag(id) {
    var i = localStorage.getItem(+id);
    if (i > 1) {
        localStorage.setItem(+id, +i - 1);
    }
    else {
        localStorage.removeItem(+id);
    }
    checkBag()
}

$('document').ready(function () {
    checkBag();
    sentOrder()
});

function checkBag() {
    $.getJSON("https://nit.tron.net.ua/api/product/list/", function (data) {
        if (localStorage.length > 0) {
            $("#bagBody").html("");
            for (var i = 0; i < localStorage.length; ++i) {
                $("#bagBody").append("<p class=\"mr-2\">" + data[localStorage.key(i) - 1]["name"] + ' x ' + localStorage.getItem(localStorage.key(i)) + "</p>");
                $("#bagBody").append("<button onclick =\"addBag(" + data[localStorage.key(i) - 1]['id'] + ")\" class = \"btn  color3\">+</button>\n" + " </div>\n");
                $("#bagBody").append("<button onclick =\"remBag(" + data[localStorage.key(i) - 1]['id'] + ")\" class = \"btn  color3\">-</button>\n" + " </div>\n");
            }
        }
        else {
            $("#bagBody").html("Bag is empty");
        }
    });
}

var check = true;

function makeOrder() {
    if (localStorage.length > 0) {
        $("#bagBody").html("");
        $("#bagBody").append(" <form><div class=\"form-group\">\n" +
            "    <label >Email address</label>\n" +
            "    <input type=\"email\" class=\"form-control\" id=\"InputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n" +
            "    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label >Phone</label>\n" +
            "    <input type=\"tel\" class=\"form-control\" id=\"InputPhone\" placeholder=\"Phone\">\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label >Name</label>\n" +
            "    <input type=\"text\" class=\"form-control\" id=\"InputName\" placeholder=\"Name\">\n    " +
            " \n  </div></form><button class=\"btn btn-primary color3 mkOrd\">Submit</button>"
            +
            " <small id=\"emailHelp\" class=\"form-text text-muted\">By pressing this key you confirm your order.</small> ");

        $("#btnOrder").hide();
    }
};

function sentOrder() {
    $(document).on('click', '.mkOrd', function () {
            var order = {};
            order['name'] = $('#InputName').val();
            order['phone'] = $('#InputPhone').val();
            order['email'] = $('#InputEmail').val();
            order['token'] = 'LsJZEfLEopb55DekKNPD';
            for (var i = 0; i < localStorage.length; ++i) {
                order["products[" + localStorage.key(i) + "]"] = localStorage.getItem(localStorage.key(i))
            }
            $.ajax({
                type: 'POST',
                url: "https://nit.tron.net.ua/api/order/add",
                data: order,
                dataType: "text",
                success: function (resultData) {
                    console.table(order);
                    localStorage.clear();
                    location.reload();
                    alert("Success")


                },

            })
            ;

        }
    )
}
