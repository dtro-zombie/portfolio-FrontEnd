import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../model/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SBannerService {

  
  bannerURL="http://localhost:8080/banner/"
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.bannerURL+'lista');

  }

  public detail(id:number):Observable<Banner>
  {
    return this.httpClient.get<Banner>(this.bannerURL+`detail/${id}`);
  }

public save(banner: Banner): Observable<any>
{
  return this.httpClient.post<any>(this.bannerURL+`create`,banner);
}
public update(id: number, banner:Banner):Observable<any>{ 
  
  return this.httpClient.put<any>(this.bannerURL+`update/${id}`,banner);
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.bannerURL+`delete/${id}`);
}

}
