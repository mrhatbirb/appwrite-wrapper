import Api from './api';

class Storage extends Api {
    constructor(){
        super();
    }

    public uploadFile(file: File, read?: string[], write?: string[]): Promise<object> { 
        return this.sdk.storage.createFile(file, read, write);
    }

    public getAllFiles(search?: string, limit?: number, offset?: number, orderDirection?: string) {
        return this.sdk.storage.listFiles(search, limit, offset, orderDirection);
    }

    public getFile(file_id: string): Promise<any> {
        return this.sdk.storage.getFile(file_id);
    }

    public updateFile(file_id: string, read: string[], write: string[]): Promise<object> {
        return this.sdk.storage.updateFile(file_id, read, write);
    }

    public deleteFile(file_id: string): Promise<object>{
        return this.sdk.storage.deleteFile(file_id);
    }

    public getFilePreview(file_id: string, width?: number, height?: number, quality_percent?: number): string {
        return this.sdk.storage.getFilePreview(file_id, width, height, quality_percent)
    }

    public downloadFile(file_id: string): string {
        return this.sdk.storage.getFileDownload(file_id)
    }

}

export default Storage;