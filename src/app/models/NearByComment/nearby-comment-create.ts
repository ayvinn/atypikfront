import { PhotoCreate } from "../Photo/photo-create";

export class NearbyCommentCreate {

    userId : number;
    nearbyId : number;
    reservationId : number;
    photos : PhotoCreate[];
}
