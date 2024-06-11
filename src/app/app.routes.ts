import { Routes } from '@angular/router';
import { ListIssuesComponent } from './issues/list-issues/list-issues.component';
import { IssuesFormComponent } from './issues/issues-form/issues-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component: HomeComponent },
    {path:"issues", component: ListIssuesComponent },
    {path:"add", component: IssuesFormComponent },
    {path:"add/:id", component: IssuesFormComponent },
    {
        path: 'auth',
        loadChildren: () => import('./auth/routes').then(mod => mod.routes)
    },
];
