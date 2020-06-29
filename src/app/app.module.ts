import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostsModule } from './posts/posts.module';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BotonPanicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    PostsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
