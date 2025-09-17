import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, provideChildTranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient} from "@angular/common/http";

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // provideHttpClient(),
    // provideTranslateService({
    //   loader: provideTranslateHttpLoader({
    //     // prefix: '/assets/i18n/',
    //     // suffix: '.json'
    //     prefix: './i18n/',
    //     suffix: '.json'
    //   }),
    //   fallbackLang: 'en',
    //   lang: 'en'
    // })
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({prefix:'./i18n/', suffix:'.json'}),
      fallbackLang: 'en'
    })
    
  ]
};
