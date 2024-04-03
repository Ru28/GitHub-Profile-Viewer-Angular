import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

export const routes: Routes = [
    { path:'',component: UserProfileComponent },
    { path:'repos', component: UserReposComponent},
];
