let _makeHtml = ({
                     id,
                     name,
                     image_url,
                     description,
                     price,
                     special_price,
                 }) => {
    let $product = $(`<div class="card col-xs-12 col-md-3 m-2 goods" data-product-id="${id}">`);
    $product.append($(`<img  src="${image_url}" alt="${name}" class="card-img-top" onclick="lookInfo(${id})" style="max-height: 200px;object-fit: contain">`));
    $product.append($(`<span class="card-title btn-block" onclick="lookInfo(${id})"  >`).text(name));
    if (special_price != null) {
        $product.append($(`<span class="card-text btn-block text-muted">`).text(price));
        $product.append($(`<span class="card-text btn-block special_price ">`).text(special_price));
    }
    else $product.append($(`<span class="card-text btn-block">`).text(price));

    $product.append($(`<button onclick="addBag(${id})" class="btn btn-primary btn-block color3 m-2" >`).text("Add to cart"));
    return $product;

};

module.exports = _makeHtml;
