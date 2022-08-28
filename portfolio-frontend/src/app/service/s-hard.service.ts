import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hard } from '../model/hard';

@Injectable({
  providedIn: 'root'
})
export class SHardService {
  hardURL="http://localhost:8080/hard/"
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Hard[]>{
    return this.httpClient.get<Hard[]>(this.hardURL+'lista');

  }

  public detail(id:number):Observable<Hard>
  {
    return this.httpClient.get<Hard>(this.hardURL+`detail/${id}`);
  }

public save(hard: Hard): Observable<any>
{
  return this.httpClient.post<any>(this.hardURL+`create`,hard);
}
public update(id: number, hard:Hard):Observable<any>{ 
  
  return this.httpClient.put<any>(this.hardURL+`update/${id}`,hard);
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.hardURL+`delete/${id}`);
}

}
