import { ChatParticipant } from "../ChatParticipant/chat-participant";
import { Message } from "../message";
export class Chat {
     id: number;
     chatParticipants: ChatParticipant[];
     messages: Message[];
}
