import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'binding', component: TestComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'http', component: HttpTestComponent },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
