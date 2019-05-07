function loadGoodsCatg(id) {
    $.getJSON("https://nit.tron.net.ua/api/product/list/category/" + id, function (data) {
        var els = document.getElementsByClassName("goods");
        if (id == 1) {
            for (var i = 0; i < els.length; i++) {
                els[i].style.display = "block";
            }
        } else {
            for (var i = 0; i < els.length; i++) {
                els[i].style.display = "none";
            }
            for (i = 0; i < data.length; i++) {
                els[data[i]['id'] - 1].style.display = "block"
            }
        }
    });
}

function del(){
    $('#info').remove();
}

function lookInfo(id) {
    id--;
    $.getJSON("https://nit.tron.net.ua/api/product/list/", function (data) {
        if (data[id]['special_price'] != null) {
            $price = "<span class=\"card-text btn-block special_price \">" + data[id]['special_price'] +
                "</span> <span class=\"card-text btn-block text-muted\">" + data[id]['price'] + "</span>";
        }
        else $price = "<span class=\"card-text btn-block\">" + data[id]['price'] + "</span>";

        $('#content').addClass('modal-open');
        $('body').append("<div id=\'info\'><div class = \"modal fade show\" style=\"display: block; overflow: scroll; aria-hidden=\"true\"\" id = \"myInfo" + id + "\">\n" +
            "        <div class = \"modal-dialog modal-dialog-centered\">\n" +
            "::before"+
            "          <div class = \"modal-content\">\n" +
            "\n" +
            "            <div class = \"modal-header color1\">\n" +
            "              <h4 class = \"modal-title text-white\">" + data[id]['name'] + "</h4>\n" +
            "              <button type = \"button\" class = \"close text-white\" onclick='del()' data-dismiss = \"modal\">&times;</button>\n" +
            "            </div>\n" +
            "\n" +
            "            <div class = \"modal-body card\">\n" +
            "  <img class=\"card-img-top\" style=\"max-height: 300px;object-fit: contain\" src=\"" + data[id]['image_url'] + "\" >\n" +
            "<div class=\"card-body\">\n" +
            $price +
            "    <p class=\"card-text\">" + data[id]['description'] + "</p>\n" +

            "  </div>" +
            "            </div>\n" +
            "\n" +
            "            <div class = \"modal-footer color1\">\n" +
            "              <button onclick=\"addBag("+data[id]['id']+")\" class = \"btn btn-secondary color3\">Add to cart</button>\n" +
            "            </div>\n" +
            "          </div>\n" +
            "        </div>\n" +
            "      </div><div class=\"modal-backdrop fade show\"></div></div>");

    });
}

