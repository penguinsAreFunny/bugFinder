import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {
    BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES,
    CommitSubset
} from "bugfinder-commitpath-localitypreprocessor-commitsubset";
import {
    DB, LOCALITY_PREPROCESSING_TYPES, SHARED_TYPES,
    LocalityPreprocessor, LogConfig, FileAndConsoleLogger
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {localityBContainer} from "bugFinder-framework-defaultContainer";
import {Logger} from "ts-log";
import {PathsHandling} from "bugfinder-commitpath-localitypreprocessor-commitsubset";

const container = localityBContainer;
const mongoDBConfig: MongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript"
}

const pathsOptions: PathsHandling = {
    injections: ["src"],
    injectOnEmptyPaths: false,
    //pathIncludes: /((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)|((.*\/)?src\/.*\.cc$)/
    //pathIncludes: /((.*\/)?src\/.*\.go$)|((.*\/)?src\/.*\.c$)|((.*\/)?src\/.*\.h$)/
    pathIncludes: [/(.*\/)?src\/.*\.ts$/],
    pathExcludes: [/(.*\/)?src\/.*\.d\.ts$/, /(.*\/)?unittests\/.*\.ts/, /.*=>.*/]
}

const logOptions: LogConfig = {
    debugToConsole: false,
    errorToConsole: false,
    infoToConsole: true,
    traceToConsole: false,
    warnToConsole: false,
    logFile: "./log.txt",
}
// localityPreprocessor and its config
container.bind<LocalityPreprocessor<CommitPath>>(LOCALITY_PREPROCESSING_TYPES.localityPreprocessor).to(CommitSubset);
container.bind<PathsHandling>(BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.pathsHandling).toConstantValue(pathsOptions)
container.bind<number>(BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.skip).toConstantValue(12146);
container.bind<number>(BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.n).toConstantValue(10000);
// binding logger and its config TODO: DefaultConfig setzen?
container.bind<Logger>(BUGFINDER_COMMITPATH_LOCALITYPREPROCESSOR_COMMITSUBSET_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)

// db and its config
container.bind<DB<CommitPath, any, any>>(LOCALITY_PREPROCESSING_TYPES.db).to(CommitPathsMongoDB);
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig)
container.bind<Logger>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.logger).to(FileAndConsoleLogger)

export {container};

