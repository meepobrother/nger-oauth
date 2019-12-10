import oauth2 from 'oauth2-server'
export class NgerModel {
    async getAccessToken(accessToken: string, callback?: oauth2.Callback<oauth2.Token> | undefined): Promise<false | "" | 0 | oauth2.Token | null | undefined> {
        console.log({
            accessToken
        })
        return {} as any;
    }
    async getClient(clientId: string, clientSecret: string, callback?: oauth2.Callback<false | "" | 0 | oauth2.Client | null | undefined> | undefined): Promise<false | "" | 0 | oauth2.Client | null | undefined> {
        return {
            id: clientId,
            accessTokenLifetime: 60 * 60 * 60,
            refreshTokenLifetime: 60 * 60 * 60
        } as any;
    }
    async getRefreshToken(refreshToken: string, callback?: oauth2.Callback<oauth2.RefreshToken> | undefined): Promise<false | "" | 0 | oauth2.RefreshToken | null | undefined> {
        console.log({
            refreshToken
        })
        return {} as any;
    }
    async getUser(username: string, password: string, callback?: oauth2.Callback<false | "" | 0 | oauth2.User | null | undefined> | undefined): Promise<false | "" | 0 | oauth2.User | null | undefined> {
        console.log({
            username,
            password
        })
        return {} as any;
    }
    async saveToken(token: oauth2.Token, client: oauth2.Client, user: oauth2.User, callback?: oauth2.Callback<oauth2.Token> | undefined): Promise<false | "" | 0 | oauth2.Token | null | undefined> {
        console.log({
            token,
            client,
            user
        })
        return {} as any;
    }
}