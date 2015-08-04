/**
 * Created by iszandro on 8/4/15.
 */

var request = require('superagent');
const HOST_API_V1 = "http://localhost:4000/api/v1";

var WebApiUtils = {
    post: function (path, bodyParams, completed, failed) {
        request.post(HOST_API_V1 + path, bodyParams)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (error, res) {
                if (res)
                    if (res.error) {
                        failed(res, error);
                    } else {
                        completed(res.body);
                    }
            });
    },

    get: function (path, completed, failed) {
        request.get(HOST_API_V1 + path)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (error, res) {
                if (res) {
                    if (res.error) {
                        failed(res, error);
                    } else {
                        completed(res.body);
                    }
                } else {
                    failed(undefined, undefined);
                }
            });
    }
};

module.exports = WebApiUtils;
