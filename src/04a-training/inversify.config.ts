import {featureExtractionContainer} from "bugfinder-framework-defaultcontainer";
import {
    DB,
    FileAndConsoleLogger,
    LogConfig,
    SHARED_TYPES,
    TRAINING_TYPES
} from "bugfinder-framework";
import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {Logger} from "ts-log";
import {PythonInterface} from "./src/pythonInterface";
import {Trainer} from "./src/trainer";

const container = featureExtractionContainer

const mongoDBConfig: MongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript_v2"
}
const logOptions: LogConfig = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
}

// binding DB and its dependencies
container.bind<DB<CommitPath, any, any>>(TRAINING_TYPES.db).to(CommitPathsMongoDB)
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig)

// binding FeatureExtractor and its dependencies
container.bind<Trainer>(TRAINING_TYPES.trainer).to(PythonInterface)

// binding logger and its config
container.bind<Logger>(SHARED_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)

export {container}