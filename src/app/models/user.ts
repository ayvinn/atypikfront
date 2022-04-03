import { Accommodation } from './Accommodation/accommodation';
import { Adress } from './adress';
import { ChatParticipant } from './ChatParticipant/chat-participant';
import { Message } from './message';
import { NearbyComment } from './nearby-comment';
import { Photo } from './photo';
import { Reservation } from './reservation';
import { UnavailableSlot } from './unavailable-slot';
export class User {
   id : number;
   email : string;
   passwordHash : string;
   passwordSalt : string;
   lastName : string;
   firstName : string;
   dateRegistration : string;
   certified : boolean;
   profilePicture : string;
   role : number;
   address : Adress;
   accommodations : Accommodation[];
   photos : Photo[];
   reservations : Reservation[];
   chatParticipants : ChatParticipant[];
   messages : Message[];
   UnavailableSlots : UnavailableSlot[];
   NearbyComments : NearbyComment[];

}
