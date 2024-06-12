import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../interfaces/issue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-issues',
  standalone: true,
  imports: [],
  templateUrl: './list-issues.component.html'
})
export class ListIssuesComponent implements OnInit{

  constructor(private issueService : IssueService,
              private router : Router
  ){}

  issues : Issue[] = [];

  ngOnInit(): void {
    this.getAllIssues();
  }

  getAllIssues(){
    this.issueService.getAllIssues().subscribe({
      next : respuesta =>{
        this.issues = respuesta.issues;
      },
      error: error =>{
        console.error('Error al obtener el listado de issues', error);
      }
    })
  }

  editIssue(id: string){
    this.router.navigate([`add/${id}`])
  }

  deleteIssue(id: string){
    this.issueService.deleteIssue(id).subscribe({
      next: () =>{
        this.getAllIssues();
        this.router.navigate(['issues'])
      },
      error: error =>{
        console.error('Error al eliminar la issue', error);
      }
    })
  }

}
