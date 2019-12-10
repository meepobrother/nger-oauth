import OAuth2Server from 'oauth2-server';
import { NgerModel } from './models/model';
import express = require('express');
import bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const oauth = new OAuth2Server({
    model: new NgerModel() as any
});
app.post('/oauth/token', async (req: any, res: any, next: any) => {
    const token = await oauth.token(new OAuth2Server.Request(req), new OAuth2Server.Response(res));
    console.log({
        token
    })
    res.send(token)
});
app.listen(9000)
