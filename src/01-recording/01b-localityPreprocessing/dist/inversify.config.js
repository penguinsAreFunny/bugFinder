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
    dbName: "EXPERIMENTAL"
};
var pathsOptions = {
    //injections: ["src"],
    injections: [],
    injectOnEmptyPaths: false,
    //pathIncludes: /((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)|((.*\/)?src\/.*\.cc$)/
    //pathIncludes: /((.*\/)?src\/.*\.go$)|((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)/
    pathIncludes: [/(.*\/)?src\/.*\.ts$/],
    pathExcludes: [/(.*\/)?src\/.*\.d\.ts$/, /(.*\/)?unittests\/.*\.ts/, /.*=>.*/]
};
var logOptions = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
};
// localityPreprocessor and its config
container.bind(bugfinder_framework_1.LOCALITY_PREPROCESSING_TYPES.localityPreprocessor).to(bugfinder_commitpath_localitypreprocessor_commitsubset_1.CommitSubset);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.pathsHandling).toConstantValue(pathsOptions);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.skip).toConstantValue(500);
container.bind(bugfinder_commitpath_localitypreprocessor_commitsubset_1.BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.n).toConstantValue(1);
// db and its config
container.bind(bugfinder_framework_1.LOCALITY_PREPROCESSING_TYPES.db).to(bugfinder_commitpath_db_mongodb_1.CommitPathsMongoDB);
container.bind(bugfinder_commitpath_db_mongodb_1.BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig);
// binding Logger
container.bind(bugfinder_framework_1.SHARED_TYPES.logger).to(bugfinder_framework_1.FileAndConsoleLogger);
container.bind(bugfinder_framework_1.SHARED_TYPES.logConfig).toConstantValue(logOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXJzaWZ5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ludmVyc2lmeS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUZBQTBHO0FBQzFHLGlJQUdnRTtBQUNoRSwyREFHNkI7QUFHN0IsNkZBQXdFO0FBSXhFLElBQU0sU0FBUyxHQUFHLHlEQUFrQixDQUFDO0FBdUM3Qiw4QkFBUztBQXRDakIsSUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEdBQUcsRUFBRSwyQkFBMkI7SUFDaEMsTUFBTSxFQUFFLGNBQWM7Q0FDekIsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFrQjtJQUNoQyxzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLEVBQUU7SUFDZCxrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLGlGQUFpRjtJQUNqRixpRkFBaUY7SUFDakYsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFDckMsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxDQUFDO0NBQ2pGLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBYztJQUMxQixjQUFjLEVBQUUsSUFBSTtJQUNwQixjQUFjLEVBQUUsSUFBSTtJQUNwQixhQUFhLEVBQUUsSUFBSTtJQUNuQixjQUFjLEVBQUUsSUFBSTtJQUNwQixhQUFhLEVBQUUsSUFBSTtJQUNuQixPQUFPLEVBQUUsV0FBVztDQUN2QixDQUFBO0FBRUQsc0NBQXNDO0FBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQW1DLGtEQUE0QixDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLHFFQUFZLENBQUMsQ0FBQztBQUNySCxTQUFTLENBQUMsSUFBSSxDQUFnQixxSEFBNEQsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDdkksU0FBUyxDQUFDLElBQUksQ0FBUyxxSEFBNEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0csU0FBUyxDQUFDLElBQUksQ0FBUyxxSEFBNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUcsb0JBQW9CO0FBQ3BCLFNBQVMsQ0FBQyxJQUFJLENBQTJCLGtEQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvREFBa0IsQ0FBQyxDQUFDO0FBQ2pHLFNBQVMsQ0FBQyxJQUFJLENBQWdCLHVFQUFxQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVqSCxpQkFBaUI7QUFDakIsU0FBUyxDQUFDLElBQUksQ0FBUyxrQ0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQywwQ0FBb0IsQ0FBQyxDQUFBO0FBQ3BFLFNBQVMsQ0FBQyxJQUFJLENBQVksa0NBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUEifQ==