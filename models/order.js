var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},//the user who make the order//this will hold an id //ref: 'User' 表示 set the reference to the user model
    cart: {type: Object, required: true},
    //address: {type: String, required: true},
    //name: {type: String, required: true},
    paymentId: {type: String, required: true},//payment在stripe里面找，凡是付了款了，就会有paymentId

    order_sn: {type: String},
    created_at: {type: Date},
    order_status: {type: String},
    shipping_status: {type: String},
    pay_status: {type: String},
    confirm_time: {type: Date},
    pay_time: {type: Date},
    shipping_first_name: {type: String, required: true},
    shipping_last_name: {type: String, required: true},
    shipping_address: {type: String, required: true},
    shipping_address_line_two: {type: String},
    shipping_city: {type: String, required: true},
    shipping_state: {type: String, required: true},
    shipping_zip: {type: String, required: true},
    shipping_tel: {type: String},
    billing_first_name: {type: String, required: true},
    billing_last_name: {type: String, required: true},
    billing_address: {type: String, required: true},
    billing_address_line_two: {type: String},
    billing_city: {type: String, required: true},
    billing_address_line_two: {type: String, required: true},
    billing_state: {type: String, required: true},
    billing_zip: {type: String, required: true},
    billing_tel: {type: String, required: true},
    email: {type: String, required: true},
    credit_card_name: {type: String},
    payment_type: {type: String, required: true},
    card_number: {type: String, required: true},
    card_expiry_month: {type: String, required: true},
    card_expiry_year: {type: String, required: true},
    card_cvc: {type: String, required: true},
    merchandise_total: {type: String, required: true},
    shipping_fee: {type: String},
    order_total: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);