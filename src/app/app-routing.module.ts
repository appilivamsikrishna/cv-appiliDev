import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CertifsComponent } from './certifs/certifs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { CsvViewerComponent } from './privacy-policies/csv-viewer/csv-viewer.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  {
    path: "images",
    component: HomeComponent,
  },
  {
    path: "videos",
    component: CertifsComponent,
  },
  {
    path: "files",
    component: TechnologiesComponent,
  },
  {
    path: "status",
    component: MembersComponent,
  },
  {
    path: "info",
    component: AchievementsComponent,
  },
  {
    path: "contacts",
    component: ContactsComponent,
  },
  {
    path: "demos",
    component: DemosComponent,
  },
  {
    path: "privacy-policies/csv-viewer",
    component: CsvViewerComponent,
  },          // probably TODO disable Security Appili Vamsi Krishna DFS
  {
    path: "",
    redirectTo: "/info",
    pathMatch: "full",
  },
  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
