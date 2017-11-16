import { Injectable } from "@angular/core";
import { BehaviorSubject, } from "rxjs/Rx";


@Injectable()
export class KitchenService {

    message: BehaviorSubject<any>;
    type: BehaviorSubject<any>;
    positions: any = {
        left: false,
        right: false,
        top: false,
        bottom: false
    };

    constructor() {
        this.message = new BehaviorSubject("");
        this.type = new BehaviorSubject("");
    }

    cook(message: string, type: string, position: any = null) {
        if (position) {
            for (const index in this.positions) {
                if (position[index]) {
                    this.positions[index] = position[index];
                } else {
                    this.positions[index] = false;
                }
            }
        }
        this.message.next(message);
        this.type.next(type);
    }
}
