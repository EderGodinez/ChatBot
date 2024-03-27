import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message, MessageOwners } from './interfaces/Messages.interface';
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
  @ViewChild('MessagesArea', { static: true }) messagesArea!: ElementRef;


  Messages:Message[]=[]
  Isavailable:boolean=true;
  RequestMessage(){
    this.MessageForm.markAllAsTouched()
    if(this.MessageForm.valid&&this.Isavailable){
      this.Isavailable=false;
      this.Messages.push({content:this.MessageForm.get('MessageContent')!.value,role:MessageOwners.USER})
      this.Messages.push({content:"",role:MessageOwners.OPENAI})
      this.ScrollEnd()
      this.MessageForm.reset()
      return this.ChatService.getMessageFromOpenAi(this.Messages).subscribe({
        next:(value)=> {
          this.Isavailable=true;
          this.Messages[this.Messages.length-1].content=value.choices[0].message.content
        },
        error:(err)=> {
          this.Isavailable=true;
          console.error(err)
        },
        complete:()=> {
          this.ScrollEnd()
        },
      })
    }
    return
  }
  IsValidMessage():boolean|null{
    return this.MessageForm.controls['MessageContent'].errors &&
    this.MessageForm.controls['MessageContent'].touched;
  }
  ScrollEnd(){
    if (this.messagesArea) {
      this.messagesArea.nativeElement.scrollTo({
        top: this.messagesArea.nativeElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
}
