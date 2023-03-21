import { messagesRepository } from './messages.repository';

export class MessagesServices {
  messagesRepo: messagesRepository;

  constructor() {
    this.messagesRepo = new messagesRepository();
  }
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
