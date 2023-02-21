import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('api')
export class ApiController {
    private data = {};

    @Post('store')
    storeData(@Body() body: any) {
        this.data[body.playerName] = {
            resources: body.resources,
            humans: body.humans,
            research: body.research,
        };
        console.log("data stored", body);
        return { message: 'Data stored successfully!' };
    }

    @Get('/retrieve/:playerName')
    retrieveData(@Param('playerName') playerName) {
        return this.data[playerName];
    }

    @Get('/playerslist')
    listPlayers() {
        return Object.keys(this.data);
    }
}
