
const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')

const productsModel = mongoose.model('productsModel')

let getAllProducts = (req, res) => {
    productsModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Products Controller: getAllProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('No Product Found', 'Products Controller: getAllProducts')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Products Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end getAllProducts


let getAllAvailableProducts = (req, res) => {

    productsModel.find({ 'isAvailable': 'Yes' })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Products Controller: getAllAvailableProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('No Product Found', 'Products Controller: getAllAvailableProducts')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Products Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end getAllAvailableProducts

let getByDiscount = (req, res) => {

    if (check.isEmpty(req.params.discount)) {

        console.log('Discount should be passed')
        let apiResponse = response.generate(true, 'Discount is missing', 403, null)
        res.send(apiResponse)
    } else {
        productsModel.find({ 'discount': { $gte : req.params.discount} }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:getByDiscount", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end getByDiscount

let getByPriceRange = (req, res) => {

    if (check.isEmpty(req.params.minimum) && check.isEmpty(req.params.maximum)) {

        console.log('Minimum & Maximum Values should be passed')
        let apiResponse = response.generate(true, 'Minimum & Maximum Values are missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.find({ 'price': { $gte: req.params.minimum, $lte: req.params.maximum } } , (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Products found successfully", "productsController:getByPriceRange", 5)
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end getByPriceRange

let viewByLocation = (req, res) => {

    if (check.isEmpty(req.params.location)) {

        console.log('Location name should be passed')
        let apiResponse = response.generate(true, 'Location name is missing', 403, null)
        res.send(apiResponse)
    } else {
        productsModel.find({ 'availableLocations': {$regex : `${req.params.location}`, $options:'i'} }, (err, result) => {
            
            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByLocation", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end viewByLocation

let viewByProductId = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('ProductId should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByProductId", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


let viewByMainCategory = (req, res) => {

    if (check.isEmpty(req.params.mainCategory)) {

        console.log('Main Category should be passed')
        let apiResponse = response.generate(true, 'Main Category is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.find({ 'mainCategory': {$regex : `${req.params.mainCategory}`, $options:'i'} }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found with given category', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByMainCategory", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let viewByCategory = (req, res) => {

    if (check.isEmpty(req.params.category)) {

        console.log('Category should be passed')
        let apiResponse = response.generate(true, 'Category is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.find({ 'category': {$regex : `${req.params.category}`, $options:'i'} }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found with given category', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByCategory", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


let viewByNameOfProduct = (req, res) => {

    if (check.isEmpty(req.params.nameOfProduct)) {

        console.log('Name of Product should be passed')
        let apiResponse = response.generate(true, 'Name of Product is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.find({ 'nameOfProduct': {$regex : `${req.params.nameOfProduct}`, $options:'i'} }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found with given name', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByNameOfProduct", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let viewByBrandOfProduct = (req, res) => {

    if (check.isEmpty(req.params.brandName)) {

        console.log('Brand Name should be passed')
        let apiResponse = response.generate(true, 'Brand Name is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.find({ 'brandName': {$regex : `${req.params.brandName}`, $options:'i'} }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found with given Brand name', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productsController:viewByBrandOfProduct", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let editProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        //let lastModified = time.getLocalTime()
        console.log(options);
        productsModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        productsModel.remove({ 'productId': req.params.productId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Deletion Success')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


let addProduct = (req, res) => {
    let addProductFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            console.log(check.isEmpty(req.body.mainCategory) || check.isEmpty(req.body.category) || check.isEmpty(req.body.brandName) || check.isEmpty(req.body.nameOfProduct) || check.isEmpty(req.body.isAvailable) || check.isEmpty(req.body.quantity))

            if (check.isEmpty(req.body.mainCategory) || check.isEmpty(req.body.category) || check.isEmpty(req.body.brandName) || check.isEmpty(req.body.nameOfProduct) || check.isEmpty(req.body.isAvailable) || check.isEmpty(req.body.quantity)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = time.getLocalTime()
                let productId = shortid.generate()

                let newProduct = new productsModel({

                    productId: productId,
                    mainCategory: req.body.mainCategory,
                    category: req.body.category,
                    brandName: req.body.brandName,
                    nameOfProduct: req.body.nameOfProduct,
                    warranty: req.body.warranty,
                    price: req.body.price,
                    discount: req.body.discount,
                    productDescription: req.body.productDescription,
                    isAvailable: req.body.isAvailable,
                    quantity: req.body.quantity,
                    created: today,
                    lastModified: today
                }) // end newProduct model

                let highlights = (req.body.highlights != undefined && req.body.highlights != null && req.body.highlights != '') ? req.body.highlights.split(',') : []
                let color = (req.body.color != undefined && req.body.color != null && req.body.color != '') ? req.body.color.split(',') : []
                let paymentOptions = (req.body.paymentOptions != undefined && req.body.paymentOptions != null && req.body.paymentOptions != '') ? req.body.paymentOptions.split(',') : []
                let imagesOfProduct = (req.body.imagesOfProduct != undefined && req.body.imagesOfProduct != null && req.body.imagesOfProduct != '') ? req.body.imagesOfProduct.split(',') : []
                let features = (req.body.features != undefined && req.body.features != null && req.body.features != '') ? req.body.features.split(',') : []
                let generalSpecifications = (req.body.generalSpecifications != undefined && req.body.generalSpecifications != null && req.body.generalSpecifications != '') ? req.body.generalSpecifications.split(',') : []
                let specialSpecifications = (req.body.specialSpecifications != undefined && req.body.specialSpecifications != null && req.body.specialSpecifications != '') ? req.body.specialSpecifications.split(',') : []
                let availableLocations = (req.body.availableLocations != undefined && req.body.availableLocations != null && req.body.availableLocations != '') ? req.body.availableLocations.split(',') : []

                newProduct.highlights = highlights
                newProduct.color = color
                newProduct.paymentOptions = paymentOptions
                newProduct.imagesOfProduct = imagesOfProduct
                newProduct.features = features
                newProduct.generalSpecifications = generalSpecifications
                newProduct.specialSpecifications = specialSpecifications
                newProduct.availableLocations = availableLocations

                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Adding Product')
                        resolve(result)
                    }
                }) // end newProduct save
            }
        }) // end newProduct promise
    } // end add Product function

    // making promise call.
    addProductFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product Added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}




module.exports = {

    getAllProducts: getAllProducts,
    getAllAvailableProducts:getAllAvailableProducts,
    getByDiscount:getByDiscount,
    getByPriceRange:getByPriceRange,
    viewByBrandOfProduct:viewByBrandOfProduct,
    viewByLocation:viewByLocation,
    viewByNameOfProduct:viewByNameOfProduct,
    viewByProductId: viewByProductId,
    viewByMainCategory: viewByMainCategory,
    viewByCategory: viewByCategory,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    addProduct: addProduct
}// end exports