"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var bugfinder_framework_defaultcontainer_1 = require("bugfinder-framework-defaultcontainer");
var bugfinder_framework_1 = require("bugfinder-framework");
var bugfinder_commitpath_db_mongodb_1 = require("bugfinder-commitpath-db-mongodb");
var decisionTree_1 = require("./src/decisionTree");
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
// binding DB and its dependencies
container.bind(bugfinder_framework_1.TRAINING_TYPES.db).to(bugfinder_commitpath_db_mongodb_1.CommitPathsMongoDB);
container.bind(bugfinder_commitpath_db_mongodb_1.BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig);
// binding FeatureExtractor and its dependencies
container.bind(bugfinder_framework_1.TRAINING_TYPES.trainer).to(decisionTree_1.DecisionTree);
// binding logger and its config
container.bind(bugfinder_framework_1.SHARED_TYPES.logger).to(bugfinder_framework_1.FileAndConsoleLogger);
container.bind(bugfinder_framework_1.SHARED_TYPES.logConfig).toConstantValue(logOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXJzaWZ5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ludmVyc2lmeS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkZBQWdGO0FBQ2hGLDJEQU02QjtBQUM3QixtRkFBMEc7QUFJMUcsbURBQWdEO0FBR2hELElBQU0sU0FBUyxHQUFHLGlFQUEwQixDQUFBO0FBMEJwQyw4QkFBUztBQXhCakIsSUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEdBQUcsRUFBRSwyQkFBMkI7SUFDaEMsTUFBTSxFQUFFLGVBQWU7Q0FDMUIsQ0FBQTtBQUNELElBQU0sVUFBVSxHQUFjO0lBQzFCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLE9BQU8sRUFBRSxXQUFXO0NBQ3ZCLENBQUE7QUFFRCxrQ0FBa0M7QUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBMkIsb0NBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsb0RBQWtCLENBQUMsQ0FBQTtBQUNsRixTQUFTLENBQUMsSUFBSSxDQUFnQix1RUFBcUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFakgsZ0RBQWdEO0FBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQVUsb0NBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyxDQUFBO0FBRWhFLGdDQUFnQztBQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFTLGtDQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFvQixDQUFDLENBQUE7QUFDcEUsU0FBUyxDQUFDLElBQUksQ0FBWSxrQ0FBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQSJ9