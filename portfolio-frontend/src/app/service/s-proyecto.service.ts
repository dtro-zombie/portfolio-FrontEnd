import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  proyectoURL="https://back-portfoliona.herokuapp.com/proyecto/"
  //proyectoURL="http://localhost:8080/proyecto/"
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL+'lista');

  }

  public detail(id:number):Observable<Proyecto>
  {
    return this.httpClient.get<Proyecto>(this.proyectoURL+`detail/${id}`);
  }

public save(hard: Proyecto): Observable<any>
{
  return this.httpClient.post<any>(this.proyectoURL+`create`,hard);
}
public update(id: number, hard:Proyecto):Observable<any>{ 
  
  return this.httpClient.put<any>(this.proyectoURL+`update/${id}`,hard);
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.proyectoURL+`delete/${id}`);
}
 
}
