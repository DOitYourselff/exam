let _makeHtml = ({
                     id,
                     name,
                     description,

                 }) => {
        let $category = $(`<div id = "categories" class = "col-md-12 text-white mobile">`);
        $category.append($(`<a class = "mobile" onclick="loadGoodsCatg(${id})" data-toggle = "modal" data-target = "#myInfo${id}" data-category-id = "${id}">`).text(name));
        return $category;
    }
;


module.exports = _makeHtml;
