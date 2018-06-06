define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/cart/:userId/addProduct",
    "title": "add product to the user's cart",
    "version": "0.0.1",
    "group": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Added to the cart\",\n           \"status\": 200,\n           \"data\": {\n               \"quantity\": Number,\n               \"_id\": \"String\",\n               \"userId\": \"String\",\n               \"productId\": \"String\",\n               \"created\": \"date\",\n               \"lastModified\": \"date\",\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"required parameters are missing\",\n\t    \"status\": 403,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "add",
    "name": "PostApiV1CartUseridAddproduct"
  },
  {
    "type": "post",
    "url": "/api/v1/products/add",
    "title": "add product to the store",
    "version": "0.0.1",
    "group": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainCategory",
            "description": "<p>Main Category of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>brand Name of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameOfProduct",
            "description": "<p>Name of Product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isAvailable",
            "description": "<p>Yes or No passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "highlights",
            "description": "<p>highlights of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "color",
            "description": "<p>colors of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>discount on the Product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "paymentOptions",
            "description": "<p>Payment Options passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imagesOfProduct",
            "description": "<p>image url's Of Product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>Description of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "features",
            "description": "<p>features of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "generalSpecifications",
            "description": "<p>general Specifications of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "specialSpecifications",
            "description": "<p>special Specifications of the product passed as a body parameter(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "availableLocations",
            "description": "<p>Locations where product is available passed as a body parameter(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Added successfully\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n        }\n        {\n\t    \"error\": true,\n\t    \"message\": \"required parameters are missing\",\n\t    \"status\": 403,\n\t    \"data\": null\n\t    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "add",
    "name": "PostApiV1ProductsAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:userId/:productId/delete",
    "title": "delete product from user's cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1CartUseridProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productId/delete",
    "title": "Delete product by productId from the store",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Product Id passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully.\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found with given name\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/:userId/:productId/edit",
    "title": "edit the quantity of product from user's cart",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of product passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Edited Successfully.\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1CartUseridProductidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Product Id passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Edited Successfully.\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:userId/viewcart",
    "title": "View the all items from user's cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Displaying Cart\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"_id\": \"String\",\n                   \"quantity\": Number,\n                   \"userId\": \"String\",\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\",\n                   \"__v\": 0\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1CartUseridViewcart"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products in the store",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Products Found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all/available",
    "title": "Get all available products in the store",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Products Found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAllAvailable"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:brandName",
    "title": "Get product details by given brand name of product(example-Apple)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Name of brand passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found with given name\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewBrandname"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/category/:category",
    "title": "Get all products by given products category(example-Mobile)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found with given category\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/discount/:discount",
    "title": "Get all products with given discount",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>discount passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewDiscountDiscount"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/location/:location",
    "title": "Get all products in the store with given available location",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location name passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewLocationLocation"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/mainCategory/:mainCategory",
    "title": "Get all products by given products main category(example-Electronics)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainCategory",
            "description": "<p>Main Category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found with given category\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewMaincategoryMaincategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:nameOfProduct",
    "title": "Get product details by given name of product(example-Apple iPhone 8 Plus)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameOfProduct",
            "description": "<p>Name of product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product Not Found with given name\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewNameofproduct"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/priceRange/:minimum/:maximum",
    "title": "Get all products in the store with given price range",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minimum",
            "description": "<p>minimum value passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maximum",
            "description": "<p>maximum value passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewPricerangeMinimumMaximum"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:productId",
    "title": "Get product details by ProductId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"mainCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"brandName\": \"String\",\n                   \"nameOfProduct\": \"String\",\n                   \"highlights\": object(type = array),\n                   \"color\": object(type = array),\n                   \"warranty\": \"String\",\n                   \"price\": number,\n                   \"discount\": number,\n                   \"paymentOptions\": object(type = array),\n                   \"imagesOfProduct\": object(type = array),\n                   \"productDescription\": \"String\",\n                   \"features\": object(type = array),\n                   \"generalSpecifications\": object(type = array),\n                   \"specialSpecifications\": object(type = array),\n                   \"isAvailable\": \"String\",\n                   \"availableLocations\": object(type = array),\n                   \"quantity\": number,\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"No Product Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProductid"
  }
] });
