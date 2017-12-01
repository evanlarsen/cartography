import * as fs from 'fs';
import { promisify } from 'util';
import { Logger } from './logger';

const readFile = promisify(fs.readFile);
const accessFile = promisify(fs.access);

export class FileSystem{
    constructor(private logger: Logger) {}

    public async fileExists(file: string){
        try {
            await accessFile(file, fs.constants.F_OK | fs.constants.R_OK);
            return true;
        } catch(err) {
            return false;
        }
    }

    public async get(file: string){
        return await readFile(file);
    }
}