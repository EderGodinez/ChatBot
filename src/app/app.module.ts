import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpenAiService } from './services/openIaService.service';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'Chat', component: AppComponent },
  { path:'**',  redirectTo:'Chat'}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageCardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [OpenAiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
