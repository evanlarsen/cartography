import * as path from 'path';
import { StateCodes } from './fips-state-codes';
import { project } from './project';

const storage = project.directories.storage;

export class FileCatalog{
    
    public getCartographicBoundaryFile(stateCode: StateCodes){
        const zipFile =  `cb_2014_${stateCode}_tract_500k.zip`;
        return path.resolve(__dirname, storage, stateCode, zipFile);
    }
}