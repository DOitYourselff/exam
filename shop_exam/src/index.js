import './scss/main.scss';
import $ from 'jquery';
import 'bootstrap';

window.jQuery = $;
window.$ = $;

let _makeProduct = require('./modules/product-html');
let $data;

jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/product/list',
    method: 'get',
    dataType: 'json',
    success: function (json) {


        json.forEach(product => $('.product-grid').append(_makeProduct(product)));
        $data = json;
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});

let _makeMenu = require('./modules/menu');


jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/category/list',
    method: 'get',
    dataType: 'json',
    success: function (json) {


        json.forEach(category => $('#categories').append(_makeMenu(category)));
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});

