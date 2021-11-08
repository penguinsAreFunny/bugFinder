"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var bugfinder_commitpath_db_mongodb_1 = require("bugfinder-commitpath-db-mongodb");
var bugfinder_commitpath_localitypreprocessor_commitsubset_1 = require("bugfinder-commitpath-localitypreprocessor-commitsubset");
var bugfinder_framework_1 = require("bugfinder-framework");
var bugFinder_framework_defaultContainer_1 = require("bugFinder-framework-defaultContainer");
var container = bugFinder_framework_defaultContainer_1.localityBContainer;
exports.container = container;
var mongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript"
};
var pathsOptions = {
    injections: ["src"],
    injectOnEmptyPaths: false,
    //pathIncludes: /((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)|((.*\/)?src\/.*\.cc$)/
    //pathIncludes: /((.*\/)?src\/.*\.go$)|((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)/
    pathIncludes: [/(.*\/)?src\/.*\.ts$/],
    pathExcludes: [/(.*\/)?src\/.*\.d\.ts$/, /(.*\/)?unittests\/.*\.ts/, /.*=>.*/]
};
var logOptions = {
    debugToConsole: false,
    errorToConsole: false,
    infoToConsole: true,
    traceToConsole: false,
    warnToConsole: false,
    logFile: "./log.txt",
};
// localityPreprocessor and its config
container.bind(bugfinder_framework_1.LOCALITY_PREPROCESSING_TYPES.localityPreprocessor).to(bugfinder_commitpath_localitypreprocessor_commitsubset_1.CommitSubset);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.pathsHandling).toConstantValue(pathsOptions);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.skip).toConstantValue(12146);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.n).toConstantValue(10000);
// binding logger and its config TODO: DefaultConfig setzen?
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.logger).to(bugfinder_framework_1.FileAndConsoleLogger);
container.bind(bugfinder_framework_1.SHARED_TYPES.logConfig).toConstantValue(logOptions);
// db and its config
container.bind(bugfinder_framework_1.LOCALITY_PREPROCESSING_TYPES.db).to(bugfinder_commitpath_db_mongodb_1.CommitPathsMongoDB);
container.bind(bugfinder_commitpath_db_mongodb_1.BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig);
container.bind(bugfinder_commitpath_db_mongodb_1.BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.logger).to(bugfinder_framework_1.FileAndConsoleLogger);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXJzaWZ5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ludmVyc2lmeS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUZBQTBHO0FBQzFHLGlJQUdnRTtBQUNoRSwyREFHNkI7QUFHN0IsNkZBQXdFO0FBSXhFLElBQU0sU0FBUyxHQUFHLHlEQUFrQixDQUFDO0FBcUM3Qiw4QkFBUztBQXBDakIsSUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEdBQUcsRUFBRSwyQkFBMkI7SUFDaEMsTUFBTSxFQUFFLFlBQVk7Q0FDdkIsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFrQjtJQUNoQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsa0JBQWtCLEVBQUUsS0FBSztJQUN6QixpRkFBaUY7SUFDakYsaUZBQWlGO0lBQ2pGLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO0lBQ3JDLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLFFBQVEsQ0FBQztDQUNqRixDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQWM7SUFDMUIsY0FBYyxFQUFFLEtBQUs7SUFDckIsY0FBYyxFQUFFLEtBQUs7SUFDckIsYUFBYSxFQUFFLElBQUk7SUFDbkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsT0FBTyxFQUFFLFdBQVc7Q0FDdkIsQ0FBQTtBQUNELHNDQUFzQztBQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFtQyxrREFBNEIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxRUFBWSxDQUFDLENBQUM7QUFDckgsU0FBUyxDQUFDLElBQUksQ0FBZ0IscUhBQTRELENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ3ZJLFNBQVMsQ0FBQyxJQUFJLENBQVMscUhBQTRELENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pILFNBQVMsQ0FBQyxJQUFJLENBQVMscUhBQTRELENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlHLDREQUE0RDtBQUM1RCxTQUFTLENBQUMsSUFBSSxDQUFTLHFIQUE0RCxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQywwQ0FBb0IsQ0FBQyxDQUFBO0FBQ3BILFNBQVMsQ0FBQyxJQUFJLENBQVksa0NBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7QUFFN0Usb0JBQW9CO0FBQ3BCLFNBQVMsQ0FBQyxJQUFJLENBQTJCLGtEQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvREFBa0IsQ0FBQyxDQUFDO0FBQ2pHLFNBQVMsQ0FBQyxJQUFJLENBQWdCLHVFQUFxQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNqSCxTQUFTLENBQUMsSUFBSSxDQUFTLHVFQUFxQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQywwQ0FBb0IsQ0FBQyxDQUFBIn0=