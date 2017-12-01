
export class Logger{
    public trace(...args: string[]){
        console.log(...args);
    }

    public error(...args: string[]){
        console.log(...args);
    }
}