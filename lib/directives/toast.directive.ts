import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { KitchenService } from "../services/toast.service";
import { BehaviorSubject, } from "rxjs/Rx";
import { retry } from "rxjs/operator/retry";

@Directive({
    selector: '[cook-toast]'
})
export class CooktoastDirective {

    type: string;
    color: string;
    this: this;

    constructor(
        public viewContainerRef: ViewContainerRef,
        public templateRef: TemplateRef<any>,
        public toastService: KitchenService
    ) {
        // this.toastService.positions = this.toastPosition;
        console.log('cooking your toast just a min.');
    }


    @Input('cook-toast') set cook_toast(seconds: number) {
        this.cookIt(seconds);
    }

    @Input('cook-toastRight') set setPostionRight(bool: boolean) {
        if (bool) {
            this.toastService.positions['right'] = true;
        }
    }


    @Input('cook-toastBottom') set setPositionBottom(bool: boolean) {
        if (bool) {
            this.toastService.positions['bottom'] = true;
        }
    }


    @Input('cook-toastTop') set setPositionTop(bool: boolean) {
        if (bool) {
            this.toastService.positions['top'] = true;
        }
    }



    @Input('cook-toastLeft') set setPositionLeft(bool: boolean) {
        if (bool) {
            this.toastService.positions['left'] = true;
        }
    }


    subscribeToastBehaviour(sec: number) {

        this.toastService.message
            .subscribe((newMessage) => {
                if (!newMessage) {
                    return;
                }
                this.toastService.type
                    .subscribe(newType => {
                        this.color = this.getColor(newType);
                        this.setDecoration(newMessage);
                        this.makeInvisible(sec);
                    });
            })
    }

    getColor(type: string): string {
        switch (type) {
            case 'i': //info
                return '#0099ff'; // blue

            case 'w': // warning
                return '#ff9900'; // yellow-orange

            case 's': // success
                return '#00cc7a'; // green

            case 'f': // failure
                return '#cc0000'; // red

            default: //info
                return '#0099ff';
        }
    }


    setDecoration(newMessage: string) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);

        document.getElementById("toast").innerHTML = newMessage;
        document.getElementById("toast").style["backgroundColor"] = this.color;
        document.getElementById("toast").style['color'] = "#e6e6e6";
        document.getElementById("toast").style['borderRadius'] = '5px';
        document.getElementById("toast").style['fontFamily'] = 'verdana';
        document.getElementById("toast").style['padding'] = '10px 10px';
        document.getElementById("toast").style['position'] = 'fixed';
        document.getElementById("toast").style['zIndex'] = '1';

        if (this.toastService.positions["bottom"]) {
            document.getElementById("toast").style['bottom'] = '0px';
            document.getElementById("toast").style.marginBottom = '30px';
        }


        if (this.toastService.positions["top"]) {
            document.getElementById("toast").style['top'] = '0px';
            document.getElementById("toast").style.marginTop = '30px';
        }


        if (this.toastService.positions["right"]) {
            document.getElementById("toast").style['right'] = '0px';
            document.getElementById("toast").style.marginRight = '15px';
        }

        if (this.toastService.positions["left"]) {
            document.getElementById("toast").style['left'] = '0px';
            document.getElementById("toast").style.marginLeft = '15px';
        }
    }

    makeInvisible(seconds: number) {
        var containerRef = this.viewContainerRef;
        var that = this;
        setTimeout(function () {
            containerRef.clear();
        }, seconds * 1000);
    }

    cookIt(seconds: number) {
        if (!seconds) {
            return;
        }
        let that = this;
        let interval = setInterval(function () {

            let trueCount = 0;
            for (const index in that.toastService.positions) {
                if (that.toastService.positions[index]) {
                    trueCount++;
                }
            }

            if (trueCount === 2) {
                that.subscribeToastBehaviour(seconds);
                for (const index in that.toastService.positions) {
                    that.toastService.positions[index] = false;
                }
                clear();
            }
        }, 0);
        let clear = function () {
            clearInterval(interval);
        }
    }

}