import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendTelegramComponent } from './send-telegram/send-telegram.component';

const routes: Routes = [
  { path: '', component: SendTelegramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
