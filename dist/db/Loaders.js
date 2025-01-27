"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loaders {
    constructor(dbStarters) {
        this.dbStarters = dbStarters;
    }
    start() {
        for (const dbName in this.dbStarters) {
            console.log(dbName);
            const databaseFunctionStart = this.dbStarters[dbName];
            if (databaseFunctionStart !== undefined) {
                databaseFunctionStart();
            }
            else {
                console.log('No function found for database:' + dbName);
            }
        }
    }
}
exports.default = Loaders;
//# sourceMappingURL=Loaders.js.map