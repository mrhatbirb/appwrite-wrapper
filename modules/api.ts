import * as Appwrite from 'appwrite';
import config from '../config';

abstract class Api {
    sdk: null|Appwrite
    constructor(){
        const appwrite = new Appwrite();
        appwrite.setEndpoint(config.endpoint).setProject(config.project_id);
        this.sdk = appwrite;
    }
}

export default Api;