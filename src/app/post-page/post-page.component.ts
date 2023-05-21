import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  @ViewChild('Card1imageRef') card1ImageRef!: ElementRef;
  @ViewChild('Card1titleRef') Card1titleRef!: ElementRef;
  @ViewChild('Card1descriptionRef') Card1descriptionRef!: ElementRef;
  @ViewChild('Card2imageRef') card2ImageRef!: ElementRef;
  @ViewChild('Card2titleRef') Card2titleRef!: ElementRef;
  @ViewChild('Card2descriptionRef') Card2descriptionRef!: ElementRef;
  @ViewChild('Card3imageRef') card3ImageRef!: ElementRef;
  @ViewChild('Card3titleRef') Card3titleRef!: ElementRef;
  @ViewChild('Card3descriptionRef') Card3descriptionRef!: ElementRef;
  @ViewChild('Card4imageRef') card4ImageRef!: ElementRef;
  @ViewChild('Card4titleRef') Card4titleRef!: ElementRef;
  @ViewChild('Card4descriptionRef') Card4descriptionRef!: ElementRef;

  ImageUrl: string = "";
  Title: string = "";
  Description: string = "";
  constructor(private router: Router, private shareService: SharedService) {}

  ngOnInit() {}
  
  share(ElementRef: string) {
    const paramsData = this.CardData(ElementRef);
    debugger
    this.router.navigate(['/shared'], { queryParams: paramsData });
  }


  print(elementRef: string){
    const cardElement = document.querySelector(elementRef);
    if (cardElement) {
      const printContents = cardElement.outerHTML;
      const originalContents = document.body.innerHTML;

      // Hide any unnecessary elements
      document.body.innerHTML = printContents;

      // Print the card
      window.print();

      // Restore the original contents
      document.body.innerHTML = originalContents;
      location.reload();
    }
  }

  CardData(ElementRef: string){
    debugger
    if(ElementRef === "card1"){
      const ImageCode: HTMLImageElement | null = this.card1ImageRef.nativeElement;
      const TitleCode: HTMLImageElement | null = this.Card1titleRef.nativeElement;
      const DescriptionCode: HTMLImageElement | null = this.Card1descriptionRef.nativeElement;

      this.ImageUrl = ImageCode ? ImageCode.src : "";
      this.Title = TitleCode ? TitleCode.innerHTML : "";
      this.Description = DescriptionCode ? DescriptionCode.innerHTML : "";
    }
    else if(ElementRef === "card2"){
      const ImageCode: HTMLImageElement | null = this.card2ImageRef.nativeElement;
      const TitleCode: HTMLImageElement | null = this.Card2titleRef.nativeElement;
      const DescriptionCode: HTMLImageElement | null = this.Card2descriptionRef.nativeElement;

      this.ImageUrl = ImageCode ? ImageCode.src : "";
      this.Title = TitleCode ? TitleCode.innerHTML : "";
      this.Description = DescriptionCode ? DescriptionCode.innerHTML : "";
    }
    else if(ElementRef === "card3"){
      const ImageCode: HTMLImageElement | null = this.card3ImageRef.nativeElement;
      const TitleCode: HTMLImageElement | null = this.Card3titleRef.nativeElement;
      const DescriptionCode: HTMLImageElement | null = this.Card3descriptionRef.nativeElement;

      this.ImageUrl = ImageCode ? ImageCode.src : "";
      this.Title = TitleCode ? TitleCode.innerHTML : "";
      this.Description = DescriptionCode ? DescriptionCode.innerHTML : "";
    }
    else{
      const ImageCode: HTMLImageElement | null = this.card4ImageRef.nativeElement;
      const TitleCode: HTMLImageElement | null = this.Card4titleRef.nativeElement;
      const DescriptionCode: HTMLImageElement | null = this.Card4descriptionRef.nativeElement;

      this.ImageUrl = ImageCode ? ImageCode.src : "";
      this.Title = TitleCode ? TitleCode.innerHTML : "";
      this.Description = DescriptionCode ? DescriptionCode.innerHTML : "";
    }

    const key =  {
      CardImageUrl: this.ImageUrl,
      CardTitle: this.Title,
      CardDescription: this.Description
    }

    return key;
  }

}
