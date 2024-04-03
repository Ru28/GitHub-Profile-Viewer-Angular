import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule,FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  username!:string;
  user!:any;
  constructor(private githubService: GithubService) { }

  getUserInfo(){
    this.githubService.getUser(this.username).subscribe(userData =>{
      this.user = userData;
    })
  }
}
