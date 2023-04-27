import { Controller, Module, Get, Post } from '@nestjs/common';

@Controller('/') // decorator
class AppController{

    @Get('/')
    public getRootRoute() {
        return 'hi there!'
    }

    @Get('/bloat')
    public getBloat() {
        return 'This is bloat'
    }

}

export default AppController