import { Chat } from "../Chat/chat";
import { ChatParticipant } from "../ChatParticipant/chat-participant";

export class Message {
    content : string;
    dateHour : Date;
    disabled : boolean;
    chatParticipant : ChatParticipant;
    chatParticipantId : number;
    chatId : number;
    chat : Chat;
}
