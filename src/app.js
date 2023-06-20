import http from 'http';
import fs from 'fs';
import qs from 'qs';
import url from 'url';
import router from "./router/router.js";
let count = 0;
const server = http.createServer((req, res) => {
    let handle = router[req.url];
    if (handle === undefined) {
        handle = router['/err']
        handle(req, res)
    } else {
        handle(req, res);
    }
});
server.listen('8080', () => {
    console.log('Đã kết nối')
})
