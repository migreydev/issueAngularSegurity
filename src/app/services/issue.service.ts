import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue, Main, MainRespuesta } from '../interfaces/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor (private http : HttpClient) { }

  private url = 'http://localhost:3000/api/issues';


  getAllIssues():Observable<Main>{
    return this.http.get<Main>(this.url);
  }

  addIssues(issue: Omit<Issue, '_id'>):Observable<Omit<Issue, '_id'>>{
  return this.http.post<Omit<Issue, '_id'>>(this.url, issue);
  }

  getIssueById(id: string):Observable<MainRespuesta>{
    const idIssue = `${this.url}/${id}`;
    return this.http.get<MainRespuesta>(idIssue);
  }

  editIssue(id: string , issue : Issue ): Observable<MainRespuesta> {
    const idEdit = `${this.url}/${id}`;
    return this.http.put<MainRespuesta>(idEdit, issue);
  }

  deleteIssue(id: string){
    const idDelete = `${this.url}/${id}`;
    return this.http.delete<Issue>(idDelete);
  }

}
  