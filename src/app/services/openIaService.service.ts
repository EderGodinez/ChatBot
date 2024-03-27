import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environments/environments';
import { ChatResponse } from '../interfaces/ChatResponse.interface';
import { Message } from '../interfaces/Messages.interface';

@Injectable({providedIn: 'root'})
export class OpenAiService {
  constructor(private http: HttpClient) { }
  getMessageFromOpenAi(Messages:Message[]): Observable<ChatResponse> {
    const data = {
      messages: Messages,
      model: "gpt-3.5-turbo"
    };
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.API_KEY}`
    });

    const options = {
      headers: headers
    };
    return this.http.post<any>(env.ChatURL, data,options)
  }

}
