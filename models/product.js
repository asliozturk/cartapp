var productModel = {
    brand_id: {type: String},
    category_id: {type: String, required: true},
    description: {type: String, required: true},
    external_id: {type: String},
    image_url: {type: String},
    product_id: {type: String, required: true},
    product_page_url: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true}
};

module.exports = productModel;