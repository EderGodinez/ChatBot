import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class OpenAiService {
  constructor() { }
  getMessageFromOpenAi(){
    return "Message"
  }
}
