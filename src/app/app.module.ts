import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PalabrasServices } from './components/juegos/palabras.services';   
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { InputEmptyComponent } from './components/input-empty/input-empty.component';
import { ListadoComponent } from './components/listado/listado.component';
import { Juegos2Component } from './components/juegos2/juegos2.component';
import { Juegos3Component } from './components/juegos3/juegos3.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuienSoyComponent,
    HomeComponent,
    ErrorComponent,
    JuegosComponent,
    InputEmptyComponent,
    ListadoComponent,
    Juegos2Component,
    Juegos3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [PalabrasServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
