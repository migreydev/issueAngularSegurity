import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../interfaces/issue';

@Component({
  selector: 'app-issues-form',
  standalone: true,
  imports: [],
  templateUrl: './issues-form.component.html'
})
export class IssuesFormComponent implements OnInit{

  constructor(private issueService : IssueService){}

  ngOnInit(): void {
    
    
  }

  issue : Omit<Issue, '_id'> = {
    title:  '',
    description: '',
    status: 'abierto',
    __v:  0
  }

  onSubmit(){
    
  }

}
