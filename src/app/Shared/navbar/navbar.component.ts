import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarVisible = false;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }

  toggleSidebar(){
    const mobileNavItems = document.querySelector('.mobile_nav_items');

    if (mobileNavItems) {
      if (this.sidebarVisible) {
        mobileNavItems.classList.remove('active');
      } else {
        mobileNavItems.classList.add('active');
      }
      this.sidebarVisible = !this.sidebarVisible;
    }
  }

}
