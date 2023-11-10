const BaseResponse = require('./base.response');

class SingleResponse extends BaseResponse {
  /**
   * Creates an API Message Response.
   * @param {object} data - Data Object.
   * @param {string} message - Response message.
   */
  constructor(data = {}, message = '') {
    super(data, message);
  }
}

module.exports = SingleResponse;
