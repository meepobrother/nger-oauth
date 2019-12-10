import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { join } from "path";
import { NgerOauthClientGraphql } from "./resolver";
@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: [join(__dirname, 'notadd.graphql')]
        })
    ],
    providers: [
        NgerOauthClientGraphql
    ]
})
export class NgerOauth2ClientModule {

}