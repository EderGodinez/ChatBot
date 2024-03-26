import { Component } from '@angular/core';
import { Message } from './interfaces/Messages.interface';
import { OpenAiService } from './services/openIaService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly ChatService:OpenAiService,private readonly FB:FormBuilder){}
  title = 'ChatBotApp';
  public MessageForm:FormGroup=this.FB.group({
    MessageContent:["",[Validators.required]],
  })
  Messages:Message[]=[]
  RequestMessage(){
    this.MessageForm.markAllAsTouched()
    console.log(this.MessageForm)
    if(this.MessageForm.valid){
      return this.ChatService.getMessageFromOpenAi()
    }
    console.log('error')
    return
  }
  IsValidMessage():boolean|null{
    return this.MessageForm.controls['MessageContent'].errors &&
    this.MessageForm.controls['MessageContent'].touched;
  }
}
