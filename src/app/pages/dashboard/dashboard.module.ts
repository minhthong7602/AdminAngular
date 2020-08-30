import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashBoardComponent
  }
];
@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    declarations: [ DashBoardComponent ]
})
export class DashBoardModule {}
