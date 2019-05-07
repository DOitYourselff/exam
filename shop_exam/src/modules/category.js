let _makeProduct = require('./product-html');


jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/product/list/category/' + id0,
    method: 'get',
    dataType: 'json',
    success: function (json) {


        json.forEach(product => $('.product-grid').append(_makeProduct(product)));
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});

module.exports = _makeHtml;
