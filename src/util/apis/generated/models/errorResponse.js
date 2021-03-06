/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * @member {object} error
 * 
 * @member {string} [error.code] Possible values include: 'BadRequest',
 * 'Conflict', 'NotAcceptable', 'NotAuthorized', 'NotFound',
 * 'InternalServerError'
 * 
 * @member {string} [error.message]
 * 
 */
function ErrorResponse() {
}

/**
 * Defines the metadata of ErrorResponse
 *
 * @returns {object} metadata of ErrorResponse
 *
 */
ErrorResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ErrorResponse',
    type: {
      name: 'Composite',
      className: 'ErrorResponse',
      modelProperties: {
        error: {
          required: true,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'ErrorDetails'
          }
        }
      }
    }
  };
};

module.exports = ErrorResponse;
