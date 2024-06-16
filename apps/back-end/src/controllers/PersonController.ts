import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/person')
export class PersonController{

    //TODO: change the return type
    @Get("retrive-all")
    retriveAllData(): string{
        return "Hmm nema nishto bace."
    }

    @Post("send-form")
    reciveSubmittedFormData(){
        return "uha stana";
    }

}