import { Resolver, Query, Args } from "@nestjs/graphql";
interface AccesToken {
    access_token: string;
    expires_in: string;
    refresh_token: string;
    openid: string;
    scope: string;
}
@Resolver()
export class NgerOauthClientGraphql {
    /**
     * 生成访问的url
     */
    @Query()
    authorizeUrl(
        @Args('redirectUri') redirectUri: string,
        @Args(`scope`) scope: string,
        @Args(`state`) state?: string
    ): string {
        return ``
    }

    /**
     * 获取accessToken
     * @param code 
     */
    @Query()
    async accessToken(@Args(`code`) code: string): Promise<AccesToken> {
        return {} as any;
    }

    /**
     * refresh token
     * @param refreshToken 
     */
    @Query()
    async refreshToken(@Args(`refreshToken`) refreshToken: string): Promise<AccesToken> {
        return {} as any;
    }

    /**
     * 检查access token是否可用
     * @param accessToken 
     * @param openid 
     */
    @Query()
    async checkAccessToken(
        @Args(`accessToken`) accessToken: string,
        @Args(`openid`) openid: string
    ): Promise<boolean> {
        return true;
    }
}