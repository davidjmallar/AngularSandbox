import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { BindingsComponent } from './bindings/bindings.component';

const routes: Routes = [
  { path: 'binding', component: BindingsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'http', component: HttpTestComponent },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
