import { databaseConnectionString } from "./../config";
import { seedCategories } from "./Seeder";


export default class DatabaseInitializer {
    initialize() {
        const mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);
        mongoose.connect(databaseConnectionString, { useNewUrlParser: true });
        
        const shouldSeedDatabase = process.env.SEED_DATABASE === "true";

        if(shouldSeedDatabase) {
            seedCategories();
        }
    }
}