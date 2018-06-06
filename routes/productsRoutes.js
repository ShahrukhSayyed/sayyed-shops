const express = require('express')
const productsController = require('./../controllers/productsController')
const auth = require('./../middlewares/auth')

const appConfig = require('./../config/appConfig')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/products';

    app.get(baseUrl + '/all', auth.isAuthenticated,productsController.getAllProducts)

    	/**
	 * @api {get} /api/v1/products/all Get all products in the store
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Products Found",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */


    app.get(baseUrl + '/all/available', auth.isAuthenticated,productsController.getAllAvailableProducts)


    	/**
	 * @api {get} /api/v1/products/all/available Get all available products in the store
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Products Found",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */


    app.get(baseUrl + '/view/discount/:discount', auth.isAuthenticated, productsController.getByDiscount)
    

    	/**
	 * @api {get} /api/v1/products/view/discount/:discount Get all products with given discount
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {Number} discount discount passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */


    app.get(baseUrl + '/view/priceRange/:minimum/:maximum', auth.isAuthenticated, productsController.getByPriceRange)

    	/**
	 * @api {get} /api/v1/products/view/priceRange/:minimum/:maximum Get all products in the store with given price range
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {Number} minimum minimum value passed as the URL parameter
     * @apiParam {Number} maximum maximum value passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */



    app.get(baseUrl + '/view/location/:location', auth.isAuthenticated, productsController.viewByLocation)
    
    	/**
	 * @api {get} /api/v1/products/view/location/:location Get all products in the store with given available location
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} location location name passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/view/:productId', auth.isAuthenticated, productsController.viewByProductId)

    	/**
	 * @api {get} /api/v1/products/view/:productId Get product details by ProductId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} productId productId passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "No Product Found",
	    "status": 404,
	    "data": null
	   }
	 */
    
    app.get(baseUrl + '/view/mainCategory/:mainCategory', auth.isAuthenticated, productsController.viewByMainCategory)
    
    	/**
	 * @api {get} /api/v1/products/view/mainCategory/:mainCategory Get all products by given products main category(example-Electronics)
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} mainCategory Main Category passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found with given category",
	    "status": 404,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/view/category/:category', auth.isAuthenticated, productsController.viewByCategory)

        	/**
	 * @api {get} /api/v1/products/view/category/:category Get all products by given products category(example-Mobile)
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} category Category passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found with given category",
	    "status": 404,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/view/:nameOfProduct', auth.isAuthenticated, productsController.viewByNameOfProduct)

    /**
	 * @api {get} /api/v1/products/view/:nameOfProduct Get product details by given name of product(example-Apple iPhone 8 Plus)
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} nameOfProduct Name of product passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found with given name",
	    "status": 404,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/view/:brandName', auth.isAuthenticated, productsController.viewByBrandOfProduct)

    /**
	 * @api {get} /api/v1/products/view/:brandName Get product details by given brand name of product(example-Apple)
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} brandName Name of brand passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found with given name",
	    "status": 404,
	    "data": null
	   }
	 */
    
    app.put(baseUrl + '/:productId/edit', auth.isAuthenticated, productsController.editProduct)

    /**
	 * @api {put} /api/v1/products/:productId/edit Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} productId Product Id passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Edited Successfully.",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found",
	    "status": 404,
	    "data": null
	   }
	 */

    app.post(baseUrl + '/:productId/delete', auth.isAuthenticated, productsController.deleteProduct)

    /**
	 * @api {post} /api/v1/products/:productId/delete Delete product by productId from the store
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} productId Product Id passed as the URL parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Deleted Successfully.",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product Not Found with given name",
	    "status": 404,
	    "data": null
	   }
	 */
    
    app.post(baseUrl + '/add', auth.isAuthenticated, productsController.addProduct)

    /**
	 * @api {post} /api/v1/products/add add product to the store
	 * @apiVersion 0.0.1
	 * @apiGroup add
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} mainCategory Main Category of the product passed as a body parameter(Required)
	 * @apiParam {String} category category of the product passed as a body parameter(Required)
	 * @apiParam {String} brandName brand Name of the product passed as a body parameter(Required)
	 * @apiParam {String} nameOfProduct Name of Product passed as a body parameter(Required)
	 * @apiParam {String} isAvailable Yes or No passed as a body parameter(Required)
	 * @apiParam {Number} quantity quantity of the product passed as a body parameter(Required)
	 * @apiParam {Array} highlights highlights of the product passed as a body parameter(Optional)
	 * @apiParam {Array} color colors of the product passed as a body parameter(Optional)
	 * @apiParam {Number} price price of the product passed as a body parameter(Optional)
	 * @apiParam {Number} discount discount on the Product passed as a body parameter(Optional)
	 * @apiParam {Array} paymentOptions Payment Options passed as a body parameter(Optional)
	 * @apiParam {Array} imagesOfProduct image url's Of Product passed as a body parameter(Optional)
	 * @apiParam {String} productDescription Description of the product passed as a body parameter(Optional)
     * @apiParam {Array} features features of the product passed as a body parameter(Optional)
     * @apiParam {Array} generalSpecifications general Specifications of the product passed as a body parameter(Optional)
     * @apiParam {Array} specialSpecifications special Specifications of the product passed as a body parameter(Optional)
     * @apiParam {Array} availableLocations Locations where product is available passed as a body parameter(Optional)
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Added successfully",
            "status": 200,
            "data": [
                {
                    "mainCategory": "String",
                    "category": "String",
                    "brandName": "String",
                    "nameOfProduct": "String",
                    "highlights": object(type = array),
                    "color": object(type = array),
                    "warranty": "String",
                    "price": number,
                    "discount": number,
                    "paymentOptions": object(type = array),
                    "imagesOfProduct": object(type = array),
                    "productDescription": "String",
                    "features": object(type = array),
                    "generalSpecifications": object(type = array),
                    "specialSpecifications": object(type = array),
                    "isAvailable": "String",
                    "availableLocations": object(type = array),
                    "quantity": number,
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
        }
        {
	    "error": true,
	    "message": "required parameters are missing",
	    "status": 403,
	    "data": null
	    }
	 */
    

}

/** Run this command : apidoc -i routes/ -o apidoc/ */
module.exports = {
    setRouter : setRouter
}