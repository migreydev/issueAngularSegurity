import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue, MainRespuesta } from '../../interfaces/issue';
import { FormControl, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issues-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './issues-form.component.html'
})
export class IssuesFormComponent implements OnInit{

  constructor(private issueService : IssueService,
              private router : Router,
              private route : ActivatedRoute
  ){}

  editmode : boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      const id = params['id'];

      if(id){
        this.editmode = true;
        this.getIssueByID(id);
      }
    })
    
  }


  issue : Omit<Issue, '_id'> = {
    title:  '',
    description: '',
    status: 'abierto',
    __v:  0
  }

  issueEdit : Issue = {
    _id: '',
    title: '',
    description: '',
    status: '',
    __v: 0
  }

  getIssueByID(id: string){
    this.issueService.getIssueById(id).subscribe({
      next: issue =>{
        this.issueEdit = issue.issue;
      },
      error: error =>{
        console.error('Error', error);
      }
    })
  }

  onSubmit(){
    this.route.params.subscribe( params =>{
      const id = params['id'];

      if(id){

        this.issueService.editIssue(id,this.issueEdit).subscribe({
          next: () =>{

            this.router.navigate(['/issues']);
          },
          error: error =>{
            console.error('Error', error);
          }
        })

      }else {
        this.issueService.addIssues(this.issue).subscribe({
          next: () =>{
            this.router.navigate(['/issues']);
          },
          error: error =>{
            console.error('Error', error);
          }
        })

      }
    
    })
  }
}
