import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesServices: MessagesServices) {}

  @Get()
  listMessages() {
    return this.messagesServices.findAll();
  }

  @Post('/create')
  createMessages(@Body() body: createMessageDto) {
    return this.messagesServices.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesServices.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
