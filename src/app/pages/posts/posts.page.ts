import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts = [];
  page = 1;
  count = null;

  constructor(private wp: WordpressService, private router: Router) { }

  async ngOnInit() {
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
    });
  }

  openPost(postId){
    //[routerLink]="['/', 'posts', post.id]
    this.router.navigate(['/posts/' + postId]);
  }

  async loadMore(event){
    this.page++;

    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];

      event.target.complete();

      if(this.page == this.wp.pages){
        event.target.disabled = true;
      }
    });
  }

}
