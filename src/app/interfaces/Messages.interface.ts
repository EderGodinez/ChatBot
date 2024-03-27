export interface Message{
    content:string,
    role:MessageOwners
}
export enum MessageOwners{
  USER="user",
  OPENAI="system"
}
