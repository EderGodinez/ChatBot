import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-card',
  templateUrl: './message-card.component.html',
})
export class MessageCardComponent {
  constructor(){}
  @Input()
  MessageInfo:any={
    date:new Date(),
    Message:"Hola :D",
    MessageOwner:"User"
  }
  get date():Date{
    return this.MessageInfo.date
  }
  get message():string{
    return this.MessageInfo.Message
  }
  get messageOwner():string{
    return this.MessageInfo.MessageOwner
  }
}
