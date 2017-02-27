// https://api.spotify.com/v1/albums/3PZXB9NBWf11eDS72JCGaY

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

// import {AngularFire, FirebaseListObservable} from 'angularfire2';
// import {IAlbum, Album, AlbumData} from './album.model';
import {Observable} from 'rxjs';

@Injectable()
export class SpotifyService {
    public items: any;
//    const albums$: FirebaseListObservable<IAlbum[]>;

    constructor(private http: Http) {
        // const url = 'https://api.spotify.com/v1';

        // this.albums$ = af.database.list(path,
        //     {
        //         query: {
        //             orderByChild: 'year'
        //         }
        //     });
        // this.items = af.database.list('/zappa-discography');
    }

    public searchAlbum(name): Observable<Comment[]> {
        return this.http.get('https://api.spotify.com/v1/search/?q=' + name + '&type=album')
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public
    getAlbum(id): Observable < Comment[] > {
        return this.http.get('https://api.spotify.com/v1/albums/' + id)
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
