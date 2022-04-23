import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { AgmCoreModule } from '@agm/core';
import { EmbedVideo } from 'ngx-embed-video'; 
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
const config: InputFileConfig = {
  fileAccept: '*'
};
import {MatTabsModule} from '@angular/material/tabs';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
export function HttpLoaderFactory(httpClient: HttpClient) { 
  return new TranslateHttpLoader(httpClient, environment.url +'/assets/i18n/', '.json');
}

import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { AppInterceptor } from './theme/utils/app-interceptor';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';
import { Toolbar2Component } from './theme/components/toolbar2/toolbar2.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { CurrencyComponent } from './theme/components/currency/currency.component';
import { LangComponent } from './theme/components/lang/lang.component';
import { SocialIconsComponent } from './theme/components/social-icons/social-icons.component';
import { ContactsComponent } from './theme/components/contacts/contacts.component'; 
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { FooterComponent } from './theme/components/footer/footer.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { DropzoneDirective } from './directives/dropzone.directive';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CreditCardDirectivesModule } from 'angular-cc-library';



export function tokenGetter() {
  return  localStorage.getItem("jwt");  
}

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotFoundComponent,
    UserMenuComponent,
    CurrencyComponent,
    LangComponent,
    SocialIconsComponent,
    ContactsComponent, 
    Toolbar1Component,
    Toolbar2Component,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    FooterComponent,
    LockScreenComponent,
    DropzoneDirective,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    BrowserAnimationsModule, 
    FormsModule, 
    MatTabsModule,
    CreditCardDirectivesModule,
    AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
    AngularFirestoreModule,                                 // imports firebase/firestore, only needed for database features
    AngularFireStorageModule,                               // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,

    NgxDropzoneModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I',
      libraries: ["places"]
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    EmbedVideo.forRoot(),
    NgProgressModule,
    NgProgressHttpModule, 
    InputFileModule.forRoot(config),
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter,
        allowedDomains: ["localhost:8080","localhost:5001","atypikhouse.azurewebsites.net"],
        disallowedRoutes : []
      }
    }),
  ],
  providers: [
    AppSettings,
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
   

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
