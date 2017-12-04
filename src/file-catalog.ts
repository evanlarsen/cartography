import * as path from 'path';
import { StateCodes } from './fips-state-codes';
import { project } from './project';

const storage = project.directories.storage;

export class FileCatalog{

    public getFolderPath(stateCode: StateCodes){
        return path.resolve(__dirname, storage, stateCode);
    }
    
    public getCartographicBoundaryFile(stateCode: StateCodes){
        const zipFile =  `cb_2014_${stateCode}_tract_500k.zip`;
        return path.resolve(__dirname, storage, stateCode, zipFile);
    }
}