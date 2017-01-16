import {Component, OnInit, OnDestroy} from '@angular/core';
import {IAlbum, Album} from '../shared/albums/album.model';
import {AlbumService} from '../shared/albums/album.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
    albums$: any;
    editing: any = {};
    newalbum: boolean = false;
    n = new Album('', null);
    albumsList = [];
    albumsCount: number;
    subscriber: any;
    displayMode: string = 'list';

    constructor(public albumService: AlbumService,
                private localStorageService: LocalStorageService) {}

    createAlbum(album: IAlbum): void {
        let r = this.albumService.createAlbum(album);
        r.then(() => {
            this.newalbum = false;
            this.n = new Album('', null);
        });
    }

    setDisplayMode(mode) {
        this.localStorageService.set('displayMode', mode);
        this.editing = {};
        this.displayMode = mode;
    }

    setOwned(album: IAlbum) {
        let changes: IAlbum = {
            name: album.name.trim(),
            year: album.year,
            owned: album.owned,
            uuid: album.uuid
        };
        this.albumService.updateAlbum(album, changes); // returns a promise
    }

    updateAlbum(album: IAlbum): void {
        let changes: IAlbum = {
            name: album.name.trim(),
            year: album.year,
            owned: album.owned,
            uuid: album.uuid
        };
        this.albumService.updateAlbum(album, changes)
            .then(() => {
                this.editing = {};
            }); // returns a promise
    }

    deleteAlbum(album: IAlbum): void {
        let a = confirm('Really delete album ' + album.name + '?');
        if (a) {
            this.albumService.deleteAlbum(album);
        }
    }

    ngOnInit(): void {
        if (this.localStorageService.get('displayMode')) {
            this.displayMode = this.localStorageService.get('displayMode').toString();
        }

        this.albums$ = this.albumService.listAlbums();
        this.subscriber = this.albumService.listAlbums().subscribe((albumsList) => {
            this.albumsCount = albumsList.length;
            this.albumsList = albumsList;
        });
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

}
