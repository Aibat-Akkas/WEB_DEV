import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album, Image } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<any> {
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(Album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${Album.id}`, Album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getImages(id: number): Observable<Image[]> {
    return this.client.get<Image[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}