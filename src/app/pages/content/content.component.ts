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
  private id: number = 0
  private slug: string | null= ""


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.slug = value.get("slug")
    )
    this.setValuesToComponent(this.slug)
  }

  setValuesToComponent(slug: string | null) {
    const result = dataFake.filter(article => article.slug == slug)[0]
    
    this.id = result.id
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
    this.slug = result.slug
    
  }

}
