import * as fs from 'fs';
import { promisify } from 'util';
import { Logger } from './logger';
import * as path from 'path';
import * as mkdirp from 'mkdirp';

const readFile = promisify(fs.readFile);
const accessFile = promisify(fs.access);
const writeFile = promisify(fs.writeFile);
const makeDir = promisify(mkdirp);

export class FileSystem{
    constructor(private logger: Logger) {}

    public async exists(file: string){
        try {
            await accessFile(file, fs.constants.F_OK | fs.constants.R_OK);
            return true;
        } catch(err) {
            return false;
        }
    }

    public get(file: string){
        return readFile(file);
    }

    public async save(filePath: string, file: Buffer){
        await makeDir(path.dirname(filePath));
        return writeFile(filePath, file);
    }

    public saveJson(filePath: string, json: any){
        return writeFile(filePath, json);
    }
}