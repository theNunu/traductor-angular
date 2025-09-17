import { Component, inject } from '@angular/core';
import {
    TranslateService,

} from "@ngx-translate/core";


@Component({
  selector: 'app-traductor',
  imports: [],
  templateUrl: './traductor.html',
  styleUrl: './traductor.css'
})
export class Traductor {
   private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }


    word = "palabra"

}
