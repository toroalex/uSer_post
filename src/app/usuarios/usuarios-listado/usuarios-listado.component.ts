import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  constructor(private router: Router, private webApiService: WebApiService) { }

  usuarios: Usuario[];

  ngOnInit(): void {
    this.webApiService
    .obtenerUsuarios()
    .subscribe(
      (usuarioDelApi: Usuario[]) => this.usuarios = usuarioDelApi,
      error => console.error(error)
    );
  }

  verPosts(idUsuario: number) {
    this.router.navigate(["/usuarios", idUsuario, 'posts']);
  }
}
