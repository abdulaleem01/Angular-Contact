import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { contact } from './Contact';
@Injectable({
  providedIn: 'root'
})


export class ContactsService {
 
  constructor(private http:HttpClient) { }

  public getContacts():Observable<any>{
    const url = 'https://localhost:7118/GetContacts/';
    return this.http.get<any>(url);
  }

  public postContacts(contact:contact):Observable<any>{
    const url = 'https://localhost:7118/AddContacts';
    return this.http.post<any>(url,contact)
  }

  public putContacts(contact:contact,id:any):Observable<any>{
    const url = `https://localhost:7118/UpdateContacts/${id}`
    return this.http.put<any>(url,contact)
  }

  public deleteContact(id:any):Observable<any>{
    const url = `https://localhost:7118/DeleteContacts/${id}`
    return this.http.delete<any>(url);
  }
}
