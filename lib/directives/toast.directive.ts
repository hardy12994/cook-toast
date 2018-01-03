import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { KitchenService } from "../services/toast.service";
import { BehaviorSubject, } from "rxjs/Rx";
import { retry } from "rxjs/operator/retry";
// import { $ } from "../modules/jquerry";
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

    @Input('cook-toastSlide') set slideToast(bool: boolean) {
        if (bool) {
            this.toastService.slide = true;
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
        var toast = document.getElementById("toast");

        // var script = document.createElement('script');
        // script.src = '../modules/jquerry.js';

        // $.

        toast.innerHTML = newMessage;
        toast.style["backgroundColor"] = this.color;
        toast.style['color'] = "#e6e6e6";
        toast.style['borderRadius'] = '5px';
        toast.style['fontFamily'] = 'verdana';
        toast.style['padding'] = '10px 10px';
        toast.style['position'] = 'fixed';
        toast.style['zIndex'] = '1';

        if (this.toastService.positions["bottom"]) {
            toast.style['bottom'] = '0px';
            toast.style.marginBottom = '30px';
        }


        if (this.toastService.positions["top"]) {
            toast.style['top'] = '0px';
            toast.style.marginTop = '30px';
        }


        if (this.toastService.positions["right"]) {
            toast.style['right'] = '0px';
            toast.style.marginRight = '15px';
        }

        if (this.toastService.positions["left"]) {
            toast.style['left'] = '0px';
            toast.style.marginLeft = '15px';
        }
    }


    getDistanceinPX(distaceFromVerticalEdge: any) {
        return {
            distance: Number(distaceFromVerticalEdge.replace(/[^0-9]+/ig, "")),
            distanceType: distaceFromVerticalEdge.replace(/[0-9]+/ig, "")
        }
    }


    motionToVertical(containerRef: any) {

        var that = this;
        var direction;
        var distaceFromVerticalEdge = document.getElementById("toast").style.marginRight ||
            document.getElementById("toast").style.marginLeft;


        var startFrom = this.getDistanceinPX(distaceFromVerticalEdge);
        var pathToMove = startFrom.distance + document.getElementById("toast").offsetWidth;
        var id = setInterval(frame, 0);
        function frame() {
            if (pathToMove === 0) {
                clearInterval(id);
                containerRef.clear();
            } else {
                
                if (!document.getElementById("toast")) {
                    return;
                }

                pathToMove--;
                startFrom.distance--;
                if (that.toastService.positions["right"]) {
                    document.getElementById("toast").style.marginRight = startFrom.distance + startFrom.distanceType;
                } else {
                    document.getElementById("toast").style.marginLeft = startFrom.distance + startFrom.distanceType;
                }
            }
        }

    }

    makeInvisible(seconds: number) {
        var containerRef = this.viewContainerRef;
        var that = this;
        setTimeout(function () {
            if (that.toastService.slide) {
                that.motionToVertical(containerRef);
            } else {
                containerRef.clear();
            }
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
                clear();
            }

        }, 0);
        let clear = function () {
            clearInterval(interval);
        }
    }

}