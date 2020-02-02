import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { DisplaytopicComponent } from './Components/displaytopic/displaytopic.component';
const appRoutes: Routes = [
  { path: 'myprofile', component: DisplaytopicComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DisplaytopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
