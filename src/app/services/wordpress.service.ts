import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = 'https://netwerkislamexperten.be/wp-json/wp/v2/';
  totalPosts = null;
  pages: any;

  constructor(private http: HttpClient) { }

  getPosts(page = 1) {
    let options = {
      observe: "response" as "body",
      params: {
        per_page: '5',
        page: '' + page
      }
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        return data;
      })
    );
  };

  getPostContent(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map(post => {
        return post;
      })
    );
  };

  getPage(id) {
    return this.http.get(`${this.url}pages/${id}?_embed`).pipe(
      map(post => {
        return post;
      })
    );
  }

}
