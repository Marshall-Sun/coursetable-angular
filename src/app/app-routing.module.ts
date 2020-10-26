import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursetableComponent } from './course-table/course-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'coursetable', pathMatch: 'full' },
  { path: 'coursetable', component: CoursetableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
