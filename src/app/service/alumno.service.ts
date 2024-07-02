import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = 'https://alumnos-api-zaqy.onrender.com/api/alumnos';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  updateAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/${id}`, alumno);
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
