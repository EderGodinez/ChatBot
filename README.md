# ChatBotApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
## Authors

- [@EderGodinez](https://github.com/EderGodinez)

# Configurations

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ChatURL`

Inside the `/src` folder create a folder called environments and create the file where the [OpenAI](https://openai.com/blog/openai-api) KEY APIs will be inside that created folder create a file called `environments.ts` where you will write the following configuration object.
```typescript
//environments.ts
export const env={
   API_KEY:"",
   ChatURL:""
}
```
### Set API_KEY

To generate an OpenAI API KEY you must go to [OpenAI](https://platform.openai.com/api-keys) once you are inside, go to the API KEY section, and click on generate new secret key and assign a project name which you will identify and once finished copy the API KEY that the site provides you

![Api generator screenshot](https://github.com/EderGodinez/ChatBot/blob/main/src/github-assets/APIKEY.png)



### Set ChatURL

To get OpenAI ChatURL you must go to [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create?lang=node.js) once you are inside, go to the Create chat completion section, and click on copy the APIURL of Endpoint POST.

![POST endpoint URL](https://github.com/EderGodinez/ChatBot/blob/main/src/github-assets/CHATURL.png)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

