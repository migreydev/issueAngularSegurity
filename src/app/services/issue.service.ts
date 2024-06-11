import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue, Main } from '../interfaces/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor (private http : HttpClient) { }

  private url = 'http://localhost:3000/api/issues';


  getAllIssues():Observable<Main>{
    return this.http.get<Main>(this.url);
  }

  addIssues(issue: Omit<Issue, '_id'>){
    this.http.post<Omit<Issue, '_id'>>(this.url, issue);
  }

  deleteIssues(){
    
  }
}
  