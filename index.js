'use strict';

const http = require('http');

const server = http.createServer((req, res) =>
{
    res.writeHead(302, 
    {
        'Location': 'https://www.nnn.ed.nico/pages/programming/'
    });
    res.end();
});
const port = 30000;
server.listen(port, () =>
{
    console.log(`ポート${port}番でサーバーを起動しました`);
});