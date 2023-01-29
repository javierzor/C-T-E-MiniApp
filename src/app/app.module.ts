import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common'
import {DecimalPipe} from '@angular/common';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { NgxQRCodeModule } from 'ngx-qrKcode2';
// import { AppRoutingModule } from './app-routing.module';
// import { IonicRatingModule } from 'ionic4-rating';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ImagePicker } from '@ionic-native/image-picker/ngx';

// import { RouteReuseStrategy } from '@angular/router';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { JsonService } from './json.service';
// import { TabUserPage } from './tab-user/tab-user.page';
// import { AppComponent } from './app.component';
// import { LaravelPassportModule } from 'laravel-passport';
// import { GoogleMaps } from '@ionic-native/google-maps';
// import { HttpClientModule } from '@angular/common/http';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { File } from '@ionic-native/file/ngx';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { SharedModule } from './app.shared.module';
// import {ProgressBarModule} from "angular-progress-bar"
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { environment } from '../environments/environment';
// import { HttpModule } from '@angular/http';
// import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [AppComponent],

  
  entryComponents: [],
  imports: [HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule,
    CommonModule,

    ReactiveFormsModule,
    
    BrowserModule,
    IonicModule.forRoot(), AppRoutingModule, 
  ],
  providers: [
    DecimalPipe,
    DatePipe,

    JsonService,

    FormBuilder,
    HttpClient,
    // aqui se instalaran todos los provedores
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }

  ],
    

    
  bootstrap: [AppComponent],
  
})
export class AppModule {}
