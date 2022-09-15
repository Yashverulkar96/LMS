import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './MyComponent/book-list/book-list.component';


const routes: Routes = [
  {path:'',redirectTo:'Book',pathMatch:'full'},
  {path:'Book',component:BookListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
