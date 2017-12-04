import { StateCodes } from './fips-state-codes';
import { CensusApi } from './census-api';
import { FileSystem } from './file-system';
import { FileCatalog } from './file-catalog';
import { Logger } from './logger';
import { Zip } from './zip';

export class App{
    constructor(
        private api: CensusApi,
        private fileCatalog: FileCatalog,
        private fileSystem: FileSystem,
        private zip: Zip,
        private logger: Logger)
    {
    }

    public async run(stateCode: StateCodes){
        const folderPath = this.fileCatalog.getFolderPath(stateCode);
        const zipFilePath = this.fileCatalog.getCartographicBoundaryFile(stateCode);
        const zipFile = await this.getCartographicBoundaryFile(zipFilePath, stateCode);
        this.zip.unzip(zipFilePath, folderPath);
    }

    private async getCartographicBoundaryFile(zipFilePath: string, stateCode: StateCodes){
        if (await this.fileSystem.exists(zipFilePath)){
            return this.fileSystem.get(zipFilePath);
        }
        const zipFile = await this.api.getShapeFile(stateCode);
        await this.fileSystem.save(zipFilePath, zipFile);
        return zipFile;
    }
}


