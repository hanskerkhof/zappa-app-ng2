import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {enableProdMode, NgModule} from '@angular/core';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumService} from './shared/albums/album.service';
import {SpotifyService} from './shared/spotify.service';
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {AutoFocusDirective} from './shared/directives/autofocus.directive';
import {environment} from '../environments/environment';
import {LazyLoadImageModule} from 'ng2-lazyload-image';
import {LocalStorageModule} from 'angular-2-local-storage';

if (environment.production === true) {
    console.log('Running in production mode.');
    enableProdMode();
}

@NgModule({
    declarations: [
        AutoFocusDirective,
        AppComponent,
        AlbumsComponent
    ],
    imports: [
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyB5os4j7dvtwSBZp4LAj30WsXmtZzDJ0Ts',
            authDomain: 'zappa-ed979.firebaseapp.com',
            databaseURL: 'https://zappa-ed979.firebaseio.com',
            storageBucket: 'zappa-ed979.appspot.com'
        }),
        BrowserModule,
        FormsModule,
        HttpModule,
        LazyLoadImageModule,
        LocalStorageModule.withConfig({
            prefix: 'zappa-app',
            storageType: 'localStorage'
        }),
        RouterModule.forRoot(AppRoutes, {useHash: true}) // forRoot is a static class method with provided configuration
    ],
    providers: [
        AlbumService,
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
