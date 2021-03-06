import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AuthorizationProvider } from '@services/authorization/authorization.provider';
import { UserScopes } from '@services/authorization/models';
import { ApiUseTags } from '@nestjs/swagger';
const controllerName = 'authorization/scopes';

@Controller(controllerName)
@ApiUseTags(controllerName)
export class AuthorizationController {
    constructor(
        private readonly authorizationProvider: AuthorizationProvider) {
    }
    @Post()
    async addScopes(
        @Body('scopes') scopes: UserScopes[],
        @Query('user') userId: string,
    ) {
        return this.authorizationProvider.addScopes(userId, scopes);
    }
    @Get()
    async getScopes(
        @Query('user') userId: string,
    ) {
        return this.authorizationProvider.getScopes(userId);
    }
    @Delete()
    async removeScopes(
        @Body('scopes') scopes: UserScopes[],
        @Query('user') userId: string,
    ) {
        return this.authorizationProvider.removeScopes(userId, scopes);
    }
}
