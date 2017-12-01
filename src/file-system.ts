import * as fs from 'fs';
import { promisify } from 'util';
import { Logger } from './logger';

const readFile = promisify(fs.readFile);

export class FileSystem{
    constructor(private logger: Logger) {}

    public async get(file: string){
        return await readFile(file);
    }
}