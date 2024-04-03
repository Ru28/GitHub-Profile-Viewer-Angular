import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [MatCardModule, MatPaginatorModule],
  templateUrl: './user-repos.component.html',
  styleUrl: './user-repos.component.css'
})
export class UserReposComponent {
  username!: string;
  repositories!: any[];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.username=this.githubService.getUsername();
    console.log(this.username);
    this.loadRepositories();
  }
  
  loadRepositories(): void {
    this.githubService.getRepositories(this.username).subscribe(repositories => {
      this.repositories = repositories;
    });
  }

  onPageChange(pageEvent: any): void {
    this.currentPage = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;
    this.loadRepositories();
  }
}
