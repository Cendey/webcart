/**
 * <p>Project: MIT Liberal Project</p>
 * <p>Description: plain</p>
 * <p>Copyright: Copyright (c) 2016</p>
 * <p>Company: MIT Liberal Co., Ltd.</p>
 *
 * @author <cendey@126.com>
 * @since 12/26/2016
 * @version 1.0
 */
const httpModule = require('./../modules/http-module.js');
const http = require("http");
const port = 8180;
const host = "127.0.0.1";

http.createServer(httpModule.handleRequest).listen(port, host);

console.log(`Started Node.js http server at ${host}:${port}`);