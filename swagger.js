const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Products = require('./models/products.model');

exports.options = {
  "definitions": {
    User: m2s(User),
    Products: m2s(Products)
  },
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "description": "Products Project Application API",
    "title":"Products CRUD API"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "tags": [
    {
      "name": "Users",
      "description": "API for users"
    },
    {
      "name": "Users and Products",
      "description": "API for users and their products"
    }
  ],
  "schemes": ["http"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths": {
    "/api/user/findAll": {
      "get": {
        "tags": ["Users"],
        "summary": "Gets all users from system",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref" : "#/definitions/User"
            }
          }
        }
      }
    },
    "/api/user/findOne/{username}": {
      "get": {
        "tags": ["Users"],
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "required": "true",
            "description": "Username of user",
            "type":"string"
          }
        ],
        "summary": "Gets a user from system",
        "responses": {
          "200": {
            "description": "User find",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/api/user/create": {
      "post": {
        "tags": ["Users"],
        "description": "Create new user in the application",
        "parameters": [{
          "name": "Parameters for user",
          "in": "body",
          "description": "Users parameters that will create",
          "schema": {
            // "$ref": "#/definitions/User"
            "type": "object",
            "properties": {
              "username": { "type": "string" },
              "password": { "type": "string" },
              "name": { "type": "string" },
              "surname": { "type": "string" },
              "email": { "type": "string" },
              "address": {
                "type": "object",
                "properties": {
                  "area": { "type": "string" },
                  "road": { "type": "string" }
                }
              },
              "phone": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string" },
                    "number": { "type": "string" }
                  }
                }
              }
            },
            "required": ["username", "email"]
          }
          
        }],
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "New user is created",
            // "schema": {
            //   "$ref": "#/definitions/User"
            // }
          }
        }
      }
    },
    "/api/user/update": {
      "patch": {
        "tags": ["Users"],
        "description": "Update user in system",
        "parameters":[{
          "name": "update user in system",
          "in": "body",
          "description": "User that will be updated",
          "schema": {
            // "$ref": "#/definitions/User"
            "type": "object",
            "properties": {
              "username": { "type": "string" },
              "name": { "type": "string" },
              "surname": { "type": "string" },
              "email": { "type": "string" },
              "address": {
                "type": "object",
                "properties": {
                  "area": { "type": "string" },
                  "road": { "type": "string" }
                }
              },
              "phone": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string" },
                    "number": { "type": "string" }
                  }
                }
              }
            },
            "required": ["username", "email"]
          }
        }],
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "Updated user",
          }
        }
      }
    },
    "/api/user/delete?{username}": {
      "delete": {
        "tags": ["Users"],
        "description": "Delete user from system",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "Username that will be deleted"
          }
        ],
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "Delete user",
          }
        }
      }
    },
    'api/userproducts/findone/{username}': {
      "get": {
        "tags": ["Users and Products"],
        "description": "Delete user from system",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "Find user's products",
            "type":"string"
          }
        ],
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "Users and Products"
          }
        }
      }
    }
  }
}