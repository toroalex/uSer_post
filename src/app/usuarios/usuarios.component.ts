import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Subscriber } from 'rxjs';
import { Usuario } from '../models/usuario';
import { WebApiService } from "../services/web-api.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, private webApiService: WebApiService) { }

  usuarios: Usuario[];

  ngOnInit(): void {

  }

}
