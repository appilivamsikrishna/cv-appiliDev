import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.scss"],
})
export class AchievementsComponent implements OnInit {
  repoStats: { stars: number; forks: number; watchers: number } | null = null;
  repoUrl: string = "https://github.com/mivion/swisseph";

  constructor(
    private translateService: TranslateService,
    private http: HttpClient // Inject HttpClient for API calls
  ) {}

  ngOnInit(): void {
    this.fetchRepoStats();
  }

  get lang() {
    return this.translateService.currentLang;
  }

  fetchRepoStats(): void {
    const apiUrl = "https://api.github.com/repos/mivion/swisseph";
    this.http.get(apiUrl).subscribe({
      next: (data: any) => {
        this.repoStats = {
          stars: data.stargazers_count,
          forks: data.forks_count,
          watchers: data.watchers_count,
        };
      },
      error: (err) => {
        console.error("Failed to fetch GitHub stats", err);
        this.repoStats = null; // Handle error case
      },
    });
  }
}
