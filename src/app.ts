import { StateCodes } from './fips-state-codes';
import { CensusApi } from './census-api';
import { FileSystem } from './file-system';
import { FileCatalog } from './file-catalog';
import { Logger } from './logger';
import { Zip } from './zip';
import { Shape2GeoJson } from './shape2geojson';

export class App{
    constructor(
        private api: CensusApi,
        private fileCatalog: FileCatalog,
        private fileSystem: FileSystem,
        private zip: Zip,
        private shape2geojson: Shape2GeoJson,
        private logger: Logger)
    {
    }

    public async run(stateCode: StateCodes){
        const folderPath = this.fileCatalog.getFolderPath(stateCode);
        const zipFilePath = this.fileCatalog.getCartographicBoundaryFile(stateCode);
        const zipFile = await this.getCartographicBoundaryFile(zipFilePath, stateCode);
        const files = await this.zip.unzip(zipFile, folderPath);
        const shapeFilePathQuery = files.filter(f => f.endsWith('.shp'));
        if (shapeFilePathQuery.length === 0){
            console.log('no shape file found');
            return;
        }
        const geojson = await this.shape2geojson.convert(shapeFilePathQuery[0]);
        await this.fileSystem.saveJson(this.fileCatalog.getGeoJsonPath(stateCode, shapeFilePathQuery[0]), geojson);
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


