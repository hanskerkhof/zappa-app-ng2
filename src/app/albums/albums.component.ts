import { Component, OnDestroy, OnInit } from '@angular/core';

import { Album, IAlbum } from '../shared/albums/album.model';
import { AlbumService } from '../shared/albums/album.service';
import { SpotifyService } from '../shared/spotify.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums$: any;
  editing: any = {};
  newalbum: boolean = false;
  n = new Album('', null, '');
  albumsList = [];
  albumsCount: number;
  subscriber: any;
  displayMode: string = 'list';
  salbum: any = {};
  sralbum: any = {};

  constructor(public albumService: AlbumService,
              public SpotifyService: SpotifyService,
              private localStorageService: LocalStorageService) {
  }

  createAlbum(album: IAlbum): void {
    let r = this.albumService.createAlbum(album);
    r.then(() => {
      this.newalbum = false;
      this.n = new Album('', null, '');
    });
  }

  setDisplayMode(mode: string): void {
    this.localStorageService.set('displayMode', mode);
    this.editing = {};
    this.displayMode = mode;
  }

  setOwned(album: IAlbum): void {
    let changes: IAlbum = {
      name: album.name.trim(),
      year: album.year,
      owned: album.owned,
      spotifyAlbumId: album.spotifyAlbumId,
      uuid: album.uuid
    };
    this.albumService.updateAlbum(album, changes);
  }

  updateAlbum(album: IAlbum): void {
    let changes: IAlbum = {
      name: album.name.trim(),
      year: album.year,
      owned: album.owned,
//            3PZXB9NBWf11eDS72JCGaY
      spotifyAlbumId: album.spotifyAlbumId,
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

  searchSpotifyAlbum(albumName: string): void {
    this.SpotifyService.searchAlbum(albumName)
      .subscribe(
        sralbum => this.sralbum = sralbum, // Bind to view
        err => {
          // Log errors if any
        });
  }

  getSpotifyAlbum(albumId: string): void {
    this.SpotifyService.getAlbum(albumId)
      .subscribe(
        salbum => this.salbum = salbum, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
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

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
