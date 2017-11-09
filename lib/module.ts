
import { NgModule, } from '@angular/core';
import { Kitchen } from './services/toast.service';
import { CooktoastDirective } from './directives/toast.directive';

@NgModule({
    imports: [],
    exports: [CooktoastDirective],
    declarations: [CooktoastDirective],
    providers: [Kitchen]
})
export class BaseModule { }