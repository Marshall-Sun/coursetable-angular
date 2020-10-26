import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursetableComponent } from './course-table/course-table.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  { path: 'coursetable', component: NavigationComponent },
  { path: 'coursetable/angular', component: CoursetableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
