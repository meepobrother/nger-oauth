import { RefreshTokenModel } from 'oauth2-server';
export class NgerRefreshTokenModel implements RefreshTokenModel {
    getRefreshToken(refreshToken: string, callback?: import("oauth2-server").Callback<import("oauth2-server").RefreshToken> | undefined): Promise<false | "" | 0 | import("oauth2-server").RefreshToken | null | undefined> {
        throw new Error("Method not implemented.");
    }
    revokeToken(token: import("oauth2-server").RefreshToken | import("oauth2-server").Token, callback?: import("oauth2-server").Callback<boolean> | undefined): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getClient(clientId: string, clientSecret: string, callback?: import("oauth2-server").Callback<false | "" | 0 | import("oauth2-server").Client | null | undefined> | undefined): Promise<false | "" | 0 | import("oauth2-server").Client | null | undefined> {
        throw new Error("Method not implemented.");
    }
    saveToken(token: import("oauth2-server").Token, client: import("oauth2-server").Client, user: import("oauth2-server").User, callback?: import("oauth2-server").Callback<import("oauth2-server").Token> | undefined): Promise<false | "" | 0 | import("oauth2-server").Token | null | undefined> {
        throw new Error("Method not implemented.");
    }
    getAccessToken(accessToken: string, callback?: import("oauth2-server").Callback<import("oauth2-server").Token> | undefined): Promise<false | "" | 0 | import("oauth2-server").Token | null | undefined> {
        throw new Error("Method not implemented.");
    }
    verifyScope(token: import("oauth2-server").Token, scope: string | string[], callback?: import("oauth2-server").Callback<boolean> | undefined): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}