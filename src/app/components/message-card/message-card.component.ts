import { Component, Input } from '@angular/core';
import { Message, MessageOwners } from 'src/app/interfaces/Messages.interface';

@Component({
  selector: 'message-card',
  templateUrl: './message-card.component.html',
  styles:[`
  .chat-bubble {
  background-color:#FFFF;
  padding:16px 28px;
  -webkit-border-radius: 20px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius: 20px;
  -moz-border-radius-bottomleft: 2px;
  border-radius: 20px;
  border-bottom-left-radius: 2px;
  display:inline-block;
}
.typing {
  align-items: center;
  display: flex;
  height: 17px;
}
.typing .dot {
  animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
  background-color: #6CAD96 ;
  border-radius: 50%;
  height: 7px;
  margin-right: 4px;
  vertical-align: middle;
  width: 7px;
  display: inline-block;
}
.typing .dot:nth-child(1) {
  animation-delay: 200ms;
}
.typing .dot:nth-child(2) {
  animation-delay: 300ms;
}
.typing .dot:nth-child(3) {
  animation-delay: 400ms;
}
.typing .dot:last-child {
  margin-right: 0;
}

@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
    background-color:#6CAD96;
  }
  28% {
    transform: translateY(-7px);
    background-color:#9ECAB9;
  }
  44% {
    transform: translateY(0px);
    background-color: #B5D9CB;
  }
}
  `]
})
export class MessageCardComponent {
  constructor(){}
  @Input()
  MessageInfo:Message={
    content:"",
    role:MessageOwners.USER
  }
  get message():string{
    return this.MessageInfo.content
  }
  get messageOwner():string{
    return this.MessageInfo.role.toString()
  }
}
