import fs from "fs";

let router = {
    '/home': (req, res) => {
        fs.readFile('view/index.html', 'utf-8', (err, htmlString) => {
            res.write(htmlString);
            res.end();
        })
    },
    '/list': (req, res) => {
        fs.readFile('view/listProduct.html', 'utf-8', (err, htmlString) => {
            res.write(htmlString);
            res.end();
        })
    },
    '/add': (req, res) => {
        fs.readFile('view/addProduct.html', 'utf-8', (err, htmlString) => {
            res.write(htmlString);
            res.end();
        })
    },
    '/err': (req, res) => {
        fs.readFile('view/error.html', 'utf-8', (err, htmlString) => {
            res.write(htmlString);
            res.end();
        })
    },
}
export default router;
