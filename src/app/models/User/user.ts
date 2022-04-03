import { Accommodation } from '../Accommodation/accommodation';
import { Adress } from '../adress';
import { ChatParticipant } from '../ChatParticipant/chat-participant';
import { Message } from '../Messages/message';
import { NearbyComment } from '../NearByComment/nearby-comment';
import { Photo } from '../Photo/photo';
import { Reservation } from '../Reservation/reservation';
import { UnavailableSlot } from '../UnavailableSlot/unavailable-slot';
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
   unavailableSlots : UnavailableSlot[];
   NearbyComments : NearbyComment[];

}
