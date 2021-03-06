
import { NgModule } from '@angular/core';
import { KitchenService } from './services/toast.service';
import { CooktoastDirective } from './directives/toast.directive';

@NgModule({
    exports: [CooktoastDirective],
    declarations: [CooktoastDirective],
    providers: [KitchenService]
})

export class CookToastModule { }