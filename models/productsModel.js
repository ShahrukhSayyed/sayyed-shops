const mongoose = require('mongoose')
const time = require('./../libs/timeLib');


const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        productId: {
            type:String,
            unique:true
        },

        mainCategory: {
            type:String,
            default:''
        },

        category: {
            type:String,
            default:''
        },

        brandName: {
            type:String,
            default:''
        },
        
        nameOfProduct: {
            type:String,
            default:''
        },

        highlights : [],

        color : [],

        warranty: {
            type:String,
            default:''
        },
        
        price: {
            type:Number,
            default:0
        },

        discount: {
            type:Number,
            default:0
        },

        paymentOptions : [],

        imagesOfProduct : [],

        productDescription: {
            type:String,
            default:''
        },

        features : [],

        generalSpecifications : [],
        
        specialSpecifications : [],

        isAvailable: {
            type:String,
            default:'Yes'
        },
        
        availableLocations : [],

        quantity: {
            type:Number,
            default:0
        },

        created: {
            type:Date,
            default:time.getLocalTime
        },

        lastModified: {
            type:Date,
            default:time.getLocalTime
        }
        
    }
)

mongoose.model('productsModel', productSchema);