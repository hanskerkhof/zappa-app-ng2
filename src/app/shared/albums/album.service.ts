import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {IAlbum, Album, AlbumData} from './album.model';
import {UUID} from 'angular2-uuid';

@Injectable()
export class AlbumService {
    private albums$: FirebaseListObservable<IAlbum[]>;
    public items: any;

    constructor(af: AngularFire) {
        const path = '/zappa-discography';

        this.albums$ = af.database.list(path,
            {
                query: {
                    orderByChild: 'year'
                }
            });
        this.items = af.database.list('/zappa-discography');
    }

    fromBackup() {
        let a = confirm('Really restore all albums?\nCurrent albums will be removed.');
        if (a) {
            this.albums$.remove(null);
            for (let key in AlbumData.ALBUM_DATA) {
                if (AlbumData.ALBUM_DATA[key]) {
                    this.albums$.push(AlbumData.ALBUM_DATA[key]);
                }
            }
        }
    }

    public listAlbums() {
        return this.albums$;
    }

    public createAlbum(album: IAlbum): firebase.Promise<any> {
        return this.albums$.push(new Album(album.name, album.year));
    }

    public updateAlbum(album: IAlbum, changes: IAlbum): firebase.Promise<any> {
        return this.albums$.update(album.$key, changes);
    }

    public deleteAlbum(album: IAlbum): firebase.Promise<any> {
        return this.albums$.remove(album.$key);
    }

    public removeAll(album: IAlbum): firebase.Promise<any> {
        let a = confirm('Really delete all albums?\nYou can restore them from the backup any time.');
        if (a) {
            return this.albums$.remove(null);
        }
    }
}
