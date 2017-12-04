import * as unzip from 'unzip';
import * as fs from 'fs';


export class Zip{
    public unzip(zipFilePath: string, outPath: string){
        fs.createReadStream(zipFilePath).pipe(unzip.Extract({ path: outPath }));
    }
}