import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Service/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-data',
  templateUrl: './shared-data.component.html',
  styleUrls: ['./shared-data.component.css']
})
export class SharedDataComponent implements OnInit {
  cardData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cardData = params;
      debugger
    });

    debugger
  }

  share(elementRef: string) {  
  }
 
  print(elementRef: string){
  }
}

