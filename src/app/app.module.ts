import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Shared/layout/layout.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {NgxPrintModule} from 'ngx-print';
import { ContentRenderComponent } from './content-render/content-render.component';
import {MatInputModule} from '@angular/material/input';
import { SharedDataComponent } from './shared-data/shared-data.component';
import { SharedService } from './Service/shared.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    PostPageComponent,
    ContentRenderComponent,
    SharedDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    NgxPrintModule,
    MatInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatDialogModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
