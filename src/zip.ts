import * as AdmZip from 'adm-zip';
import * as fs from 'fs';
import { promisify } from 'util';



export class Zip{
    public unzip(file: Buffer, outPath: string): Promise<string[]>{
        return new Promise((resolve, reject) =>{
            const zip = new AdmZip(file);
            const zipEntries = zip.getEntries();
            const unzipedFileNames = zipEntries.map(ze => ze.entryName);
            zip.extractAllToAsync(outPath, true, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(unzipedFileNames);
            })
        });
    }
}