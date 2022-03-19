import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ApplyOgmentModule } from '@augment/apply-ogment';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => ApplyOgmentModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
