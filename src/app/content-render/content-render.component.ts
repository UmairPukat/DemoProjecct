import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../Service/business.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-render',
  templateUrl: './content-render.component.html',
  styleUrls: ['./content-render.component.css']
})
export class ContentRenderComponent implements OnInit {
  input1Value!: string;
  input2Value!: string;

  constructor(private BusinessService: BusinessService,
    private http: HttpClient){}

  ngOnInit(): void {
    this.GetLinkData();
  }

  FilterData(){
    const content = this.input1Value;
    this.input2Value =  this.filterMediaFromContent(content);
  }

  filterMediaFromContent(content: string): string {
    // Find the index of the first multimedia item (gallery or video)
    const startIndex = content.indexOf('<figure class="wp-block-gallery">');
    const endIndex = content.indexOf('</figure>', startIndex) + '</figure>'.length;
  
    // Remove the first multimedia item from the content
    if (startIndex !== -1 && endIndex !== -1) {
      const firstMedia = content.substring(startIndex, endIndex);
      content = content.replace(firstMedia, '');
    }
  
    return content;
  }

  GetLinkData(){
    this.BusinessService.GetTestData().subscribe((res: any) => {
      debugger
      this.input1Value = res.content.rendered;
    })
  }
}


