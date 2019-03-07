import { User } from './User.model';
import { Message } from './Message.model'

export class ChatMessage extends Message{
    constructor(from: User, content: string) {
        super(from, content);
    }
}