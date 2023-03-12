import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ContactviewComponent } from './contactview/contactview.component';
import { ContactaddComponent } from './contactadd/contactadd.component';

const routes: Routes = [
  {path:'viewcomponent',component:ContactviewComponent},
  {path:'addcomponent',component:ContactaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
