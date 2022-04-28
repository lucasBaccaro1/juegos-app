import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { Juegos2Component } from './components/juegos2/juegos2.component';
import { Juegos3Component } from './components/juegos3/juegos3.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, children: [{ path: 'quiensoy', component: QuienSoyComponent }, { path: 'listado', component: ListadoComponent },{ path: 'juegos', component: JuegosComponent },{ path: 'juegos2', component: Juegos2Component },{ path: 'juegos3', component: Juegos3Component }] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
