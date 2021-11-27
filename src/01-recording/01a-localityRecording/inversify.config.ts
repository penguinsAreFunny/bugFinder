import path = require("path");
import {
    BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES, Commit, CommitRecorder, FormatParser, Git, GitImpl,
    GitOptions, MADFilesFromCommit, MADFilesFromLog
} from "bugfinder-localityrecorder-commit";
import {
    DB, FileAndConsoleLogger,
    LOCALITY_RECORDING_TYPES,
    LocalityRecorder,
    LocalityRecordingFactory, LogConfig,
    SHARED_TYPES
} from "bugfinder-framework";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {
    BUGFINDER_LOCALITYRECORDER_COMMITPATH_TYPES,
    CommitPath,
    CommitPathRecorder, DefaultCommitPathMapper
} from "bugfinder-localityrecorder-commitpath";
import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {localityAContainer} from "bugfinder-framework-defaultcontainer";
import {Logger} from "ts-log";
import {CommitToCommitPathMapper} from "bugfinder-localityrecorder-commitpath/dist/commitToCommitPath/commitToCommitPathMapper";

const container = localityAContainer;
const projectRoot: string = path.join(process.cwd(), "../TypeScript")

const gitOptions: GitOptions = {
    baseDir: projectRoot,
    maxConcurrentProcesses: 4
}

const mongoDBConfig: MongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "EXPERIMENTAL"
}

const logOptions: LogConfig = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
}

// binding localityRecorder and its dependencies
container.bind<LocalityRecordingFactory<CommitPath>>(LOCALITY_RECORDING_TYPES.localityRecordingFactory).to(LocalityRecordingFactory)

// bindings used in CommitPathRecorder
container.bind<LocalityRecorder<CommitPath>>(LOCALITY_RECORDING_TYPES.localityRecorder).to(CommitPathRecorder)
container.bind<LocalityRecorder<Commit>>(BUGFINDER_LOCALITYRECORDER_COMMITPATH_TYPES.commitRecorder).to(CommitRecorder)
container.bind<CommitToCommitPathMapper>(BUGFINDER_LOCALITYRECORDER_COMMITPATH_TYPES.commitToCommitPathMapper).to(DefaultCommitPathMapper)

// bindings used in CommitRecorder
container.bind<GitOptions>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.gitOptions).toConstantValue(gitOptions)
container.bind<Git>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.git).to(GitImpl)
container.bind<FormatParser>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.gitCommitParser).to(FormatParser)
container.bind<MADFilesFromCommit>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.madFilesFromCommitParser).to(MADFilesFromLog)

// binding db and its dependencies
container.bind<DB<CommitPath, any, any>>(LOCALITY_RECORDING_TYPES.db).to(CommitPathsMongoDB)
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig)

// binding Logger
container.bind<Logger>(SHARED_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)
export {container}