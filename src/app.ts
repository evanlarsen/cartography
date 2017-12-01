import { StateCodes } from './fips-state-codes';
import { CensusApi } from './census-api';
import { FileSystem } from './file-system';
import { FileCatalog } from './file-catalog';

export class App{
    constructor(
        private api: CensusApi,
        private fileCatalog: FileCatalog,
        private fileSystem: FileSystem)
    {
    }

    public async run(stateCode: StateCodes){
        const cartographicZipFileName = this.fileCatalog.getCartographicBoundaryFile(stateCode);
        if (this.fileSystem.exists(cartographicZipFileName)){
            
        }
    }
}


