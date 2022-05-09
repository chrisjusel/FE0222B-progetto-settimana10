import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Router } from '@angular/router';
import { Todo } from './interface/todo';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'todo-completate',
        component: CompletedComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    tasks!: Todo[];
}
