import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Shared/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ContentRenderComponent } from './content-render/content-render.component';
import { SharedDataComponent } from './shared-data/shared-data.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children:[
      { path: '', component: HomeComponent},
      { path: 'Home', component: HomeComponent},
      { path: 'PostPage', component: PostPageComponent},
      { path: 'ContentRender', component: ContentRenderComponent},
      { path: 'shared', component: SharedDataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
