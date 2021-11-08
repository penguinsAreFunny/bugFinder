import {
    AnnotationFactory,
    Annotator,
    ANNOTATOR_TYPES,
    DB, FileAndConsoleLogger, LogConfig, SHARED_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB, MongoDBConfig} from "bugfinder-commitpath-db-mongodb";
import {
    BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSG_TYPES, CommitPathsAnnotator,
} from "bugfinder-commitpath-annotator-commitmsg";
import {annotatorContainer} from "bugfinder-framework-defaultcontainer";
import {Logger} from "ts-log";
import {Container} from "inversify";
import {
    BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES,
    CommitPathsWindowAnnotator
} from "bugfinder-commitpath-annotator-commitmsgwindow";

const container: Container = annotatorContainer;
const mongoDBConfig: MongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript_v2"
}
const testFileMatcher = /(test?\/.*\.*)/
const logOptions: LogConfig = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
}

// binding Annotator and its dependencies
container.bind<Annotator<CommitPath, number>>(ANNOTATOR_TYPES.annotator).to(CommitPathsWindowAnnotator)
container.bind<number>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.nPre).toConstantValue(0)
container.bind<number>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.nPost).toConstantValue(3)
container.bind<boolean>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.upToN).toConstantValue(true)
container.bind<boolean>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.useCurrent).toConstantValue(false)
container.bind<boolean>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.uniqueModePre)
    .toConstantValue(false)
container.bind<boolean>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.uniqueModePost)
    .toConstantValue(false)
container.bind<Annotator<CommitPath, number>>(
    BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSGWINDOW_TYPES.commitPathAnnotator).to(CommitPathsAnnotator)
container.bind<RegExp>(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSG_TYPES.testFileMatcher).toConstantValue(testFileMatcher)

// binding DB and its dependencies
container.bind<DB<CommitPath, number, any>>(ANNOTATOR_TYPES.db).to(CommitPathsMongoDB)
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig)

// binding AnnotationFactory
container.bind<AnnotationFactory<CommitPath, number>>(ANNOTATOR_TYPES.annotationFactory).to(AnnotationFactory)

// binding Logger
container.bind<Logger>(SHARED_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)

export {container};