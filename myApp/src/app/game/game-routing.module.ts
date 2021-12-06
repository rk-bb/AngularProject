import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { GameComponent } from './game.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '',
   component: GameComponent
    },

  {
    path: 'game/new',
    component: NewComponent,
    data: {
      title: 'New',
    
    }

  },
  {
    path: 'game/case',
    component: CaseComponent,
    data: {
      title: 'Case',
    
    }

  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
