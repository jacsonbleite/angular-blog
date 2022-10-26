import { HtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id!: number
  private slug: string | null = ""


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.slug = value.get("slug")
    )
    this.setValuesToComponent(this.slug)
    console.log(this.id)
  }

  setValuesToComponent(slug: string | null) {
    const result = dataFake.filter(article => article.slug == slug)

    console.log(dataFake[3])

    // console.log(result)
    this.id = result[0].id
    this.contentTitle = result[0].title
    this.contentDescription = result[0].description
    this.photoCover = result[0].photo
    this.slug = result[0].slug
  }

}
