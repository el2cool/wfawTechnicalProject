import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishCreateComponent } from './fish-create/fish-create.component';
import { FishEditComponent } from './fish-edit/fish-edit.component';
import { FishListComponent } from './fish-list/fish-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-fish' },
  { path: 'create-fish', component: FishCreateComponent },
  { path: 'fish-list', component: FishListComponent },
  { path: 'fish-edit/:id', component: FishEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
