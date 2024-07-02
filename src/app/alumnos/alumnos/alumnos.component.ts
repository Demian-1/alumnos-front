import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../../model/Alumno';
import { TableModule } from 'primeng/table'; // Importa TableModule desde PrimeNG
import { AlumnoService } from '../../service/alumno.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    TableModule,
    ConfirmDialogModule
  ], // Importa TableModule desde PrimeNG
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [ConfirmationService]
})
export class AlumnosComponent implements OnInit {
  titulo: string = 'Lista de Alumnos';
  losAlumnos: Alumno[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAlumnos();
  }

  confirm(nombre: string, id: number) {
    //alert("eliminar");
    this.confirmationService.confirm({
      message: "¿Estás seguro de que deseas eliminar a "+nombre+"?",
      header: 'Confirmación de Eliminar',
      accept: () => {
        this.eliminar(id);
      }
    });
  }

  editar(id: number){
    this.router.navigate(['/alumnosForm', id]);
  }
  eliminar(id: number){
    this.alumnoService.deleteAlumno(id).subscribe(
      () => {
        this.getAlumnos();
        alert("Eliminado");
      }
    )
  }

  getAlumnos() {
    this.alumnoService.getAlumnos().subscribe(
      (data: Alumno[]) => {
        this.losAlumnos = data;
      },
      (error) => {
        console.error('Error al obtener los alumnos:', error);
      }
    );
  }
}
