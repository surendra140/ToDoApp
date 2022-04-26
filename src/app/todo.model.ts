export class Todo {
     title: string; 
     task:string;

    constructor(title: string, task: string,) {
       this.title = title;
       this.task = task;
      }

      getTitle():string {
          return this.title;
      }

      getTask():string {
          return this.task;
      }
    
}
