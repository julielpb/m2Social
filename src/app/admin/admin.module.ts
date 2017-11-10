import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminRootComponent,
    children: [
      { path: 'redirect', component: AdminEditComponent},
      { path: '', component: AdminEditComponent},
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminRootComponent, AdminEditComponent]
})
export class AdminModule { }
