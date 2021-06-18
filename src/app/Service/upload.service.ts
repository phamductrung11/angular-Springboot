import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../Model/image';
@Injectable({
  providedIn: 'root'
})
export class UploadService  {
  public API: string = "http://localhost:8080/files";

  constructor(
    public http: HttpClient
  ) { }
  getImage(): Observable<Image> {
    return this.http.get<Image>(this.API)
  }
  addImage(image: any): Observable<Image> {
    const params = new FormData();
    params.append('file', image.file);
    params.append('productId', image.productId);

    return this.http.post<Image>(this.API, params);
  }
  getList(id: number): Observable<Image> {
    return this.http.get<Image>(this.API + id)
  }
  getBlobThumbnail(id: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<Blob>(
      `${id}`,
      { headers: headers, responseType: 'blob' as 'json' }
    );
  }

}
