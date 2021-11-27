"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var bugfinder_framework_defaultcontainer_1 = require("bugfinder-framework-defaultcontainer");
var bugfinder_framework_1 = require("bugfinder-framework");
var bugfinder_commitpath_db_mongodb_1 = require("bugfinder-commitpath-db-mongodb");
var container = bugfinder_framework_defaultcontainer_1.featureExtractionContainer;
exports.container = container;
var mongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript_v2"
};
var logOptions = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
};
var datasetsIDs = [
    //    "Dataset"
    "DatasetAP_predQuanti_postAnno_3_3",
    "DatasetAP_predQuanti_postAnno_3_5",
    "DatasetAP_predQuanti_postAnno_3_10",
    "DatasetAP_predQuanti_postAnno_5_3",
    "DatasetAP_predQuanti_postAnno_5_5",
    "DatasetAP_predQuanti_postAnno_5_10",
    "DatasetAP_predQuanti_postAnno_10_3",
    "DatasetAP_predQuanti_postAnno_10_5",
    "DatasetAP_predQuanti_postAnno_10_10",
];
// binding DB and its dependencies
container.bind(bugfinder_framework_1.TRAINING_TYPES.db).to(bugfinder_commitpath_db_mongodb_1.CommitPathsMongoDB);
container.bind(bugfinder_commitpath_db_mongodb_1.BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig);
container.bind("DATASETS_IDs").toConstantValue(datasetsIDs);
// binding logger and its config
container.bind(bugfinder_framework_1.SHARED_TYPES.logger).to(bugfinder_framework_1.FileAndConsoleLogger);
container.bind(bugfinder_framework_1.SHARED_TYPES.logConfig).toConstantValue(logOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXJzaWZ5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ludmVyc2lmeS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkZBQWdGO0FBQ2hGLDJEQU02QjtBQUM3QixtRkFBMEc7QUFLMUcsSUFBTSxTQUFTLEdBQUcsaUVBQTBCLENBQUE7QUFxQ3BDLDhCQUFTO0FBbkNqQixJQUFNLGFBQWEsR0FBa0I7SUFDakMsR0FBRyxFQUFFLDJCQUEyQjtJQUNoQyxNQUFNLEVBQUUsZUFBZTtDQUMxQixDQUFBO0FBQ0QsSUFBTSxVQUFVLEdBQWM7SUFDMUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsY0FBYyxFQUFFLElBQUk7SUFDcEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsY0FBYyxFQUFFLElBQUk7SUFDcEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsT0FBTyxFQUFFLFdBQVc7Q0FDdkIsQ0FBQTtBQUVELElBQU0sV0FBVyxHQUFHO0lBQ3BCLGVBQWU7SUFDWCxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztDQUN4QyxDQUFBO0FBRUQsa0NBQWtDO0FBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQTJCLG9DQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLG9EQUFrQixDQUFDLENBQUE7QUFDbEYsU0FBUyxDQUFDLElBQUksQ0FBZ0IsdUVBQXFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ2pILFNBQVMsQ0FBQyxJQUFJLENBQVcsY0FBYyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRXJFLGdDQUFnQztBQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFTLGtDQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFvQixDQUFDLENBQUE7QUFDcEUsU0FBUyxDQUFDLElBQUksQ0FBWSxrQ0FBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQSJ9