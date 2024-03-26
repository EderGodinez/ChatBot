export interface Message{
  date: Date,
    Message:string,
    MessageOwner:MessageOwners
}
enum MessageOwners{
  USER="User",
  OPENAI="OpenAI"
}
