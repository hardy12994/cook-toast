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

    cook(message: string, type: string) {
        this.message.next(message);
        this.type.next(type);
    }
}
