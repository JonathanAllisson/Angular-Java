import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FinalizedComponent } from './components/finalized/finalized.component';
import { ReadAllComponent } from './components/read-all/read-all.component';

const routes: Routes = [  
  {
    path: '',
    component: ReadAllComponent,
  },
  {
    path: 'finalized',
    component: FinalizedComponent
  },
  {
    path: 'add',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
