import { OAuth2Server, Request, Response } from 'oauth2-server';
import { NgerRefreshTokenModel } from './models/refreshTokenModel'
const oauth2Server = new OAuth2Server({
    model: new NgerRefreshTokenModel()
});
const req = new Request();
const res = new Response();
const authenticate = oauth2Server.authenticate(req, res)
const authorize = oauth2Server.authorize(req, res)
const token = oauth2Server.token(req, res)

console.log({
    authenticate,
    authorize,
    token
});