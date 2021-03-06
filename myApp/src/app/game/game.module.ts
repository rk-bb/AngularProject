import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { NewComponent } from './new/new.component';
import { CaseComponent } from './case/case.component';


@NgModule({
  declarations: [
    GameComponent,
    NewComponent,
    CaseComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
