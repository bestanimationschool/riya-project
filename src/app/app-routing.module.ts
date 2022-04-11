import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutComponent } from './MyComponent/about/about.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { GalleryComponent } from './MyComponent/gallery/gallery.component';
import { HomeComponent } from './MyComponent/home/home.component';

import { ServicesComponent } from './MyComponent/services/services.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  
   {path:"home",component:HomeComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 