import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursetableComponent } from './course-table/course-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/coursetable/angular', pathMatch: 'full' },
  { path: '/coursetable/angular', component: CoursetableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
