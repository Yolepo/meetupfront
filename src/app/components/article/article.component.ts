import {Component, OnInit} from '@angular/core';
import {ArticleEntityApi} from '../../swagger/api/ArticleEntityApi';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any;

  constructor(private articleEntityApi: ArticleEntityApi) {
  }

  ngOnInit() {
    this.articleEntityApi.getCollectionResourceUsingGETWithHttpInfo().subscribe(r => {
      console.log(r);
      this.articles = r.json()._embedded.articles;
      console.log(this.articles);
    });
  }

}
