import { FileSystem } from './file-system';
import { Logger } from './logger';
import * as path from 'path';

test('check if file exists', async () => {
    const fileSystem = new FileSystem(new Logger());
    const exists = await fileSystem.fileExists(path.resolve(__dirname, '../', 'package.json'));
    expect(exists).toBe(true);
});

test('check if file doesnt exist', async () => {
    const fileSystem = new FileSystem(new Logger());
    const exists = await fileSystem.fileExists(path.resolve(__dirname, '../', 'nonexistentfile.xyz'));
    expect(exists).toBe(false);
});