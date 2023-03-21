import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesServices: MessagesServices;
  constructor() {
    this.messagesServices = new MessagesServices();
  }

  @Get()
  listMessages() {
    return this.messagesServices.findAll();
  }

  @Post()
  createMessages(@Body() body: createMessageDto) {
    return this.messagesServices.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return this.messagesServices.findOne(id);
  }
}
