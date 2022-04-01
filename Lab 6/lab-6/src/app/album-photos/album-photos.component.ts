import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, Image } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  loaded!: boolean;
  images!: Image[];
  albumId!: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.albumId = id;
      this.loaded = false;
      this.albumsService.getImages(id).subscribe((image) => {
        this.images = image;
        this.loaded = true;
      })
    })
  }

  goBack() {
    this.location.back();
  }

}
