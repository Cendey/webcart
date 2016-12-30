/**
 * <p>Project: MIT Liberal Project</p>
 * <p>Description: http-module</p>
 * <p>Copyright: Copyright (c) 2016</p>
 * <p>Company: MIT Liberal Co., Ltd.</p>
 *
 * @author <cendey@126.com>
 * @since 12/26/2016
 * @version 1.0
 */

function handleGetRequest(request, response) {
    let method = request.method;

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.end(`${method} actions was requested`);
}

function handlePostRequest(request, response) {
    let method = request.method;

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(`${method} action was requested`);
}

function handlePutRequest(request, response) {
    let method = request.method;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(`${method} action was requested`);
}

function handleHeadRequest(request, response) {
    let method = request.method;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(`${method} action was requested`);
}

function handleDeleteRequest(request, response) {
    let method = request.method;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(`${method} action was requested`);
}

function handleBadRequest(request, response) {
    let method = request.method;

    response.writeHead(400, {
        'Content-Type': 'text/plain'
    });
    response.end(`Bad request for ${method}`);
}

exports.handleRequest = function (request, response) {
    switch (request.method) {
        case 'GET':
            handleGetRequest(request, response);
            break;
        case 'POST':
            handlePostRequest(request, response);
            break;
        case 'PUT':
            handlePutRequest(request, response);
            break;
        case 'DELETE':
            handleDeleteRequest(request, response);
            break;
        case 'HEAD':
            handleHeadRequest(request, response);
            break;
        default:
            handleBadRequest(request, response);
            break;
    }
    console.log('Request processing by http-module ended');
};