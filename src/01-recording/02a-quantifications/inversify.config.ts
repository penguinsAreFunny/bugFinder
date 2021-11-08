import {Container} from "inversify";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {
    DB, FileAndConsoleLogger, LogConfig, QuantificationFactory, Quantifier, QUANTIFIER_TYPES, SHARED_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import path from "path";
import {
    BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES,
    FormatParser,
    GitImpl, Git, GitOptions,
    MADFilesFromCommit, MADFilesFromLogImpl
} from "bugfinder-localityrecorder-commit";
import {execSync} from "child_process";
import {
    BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBE_TYPES,
    SonarQubeConfig,
    SonarQubeMeasurement,
    SonarQubeQuantifier
} from "bugfinder-commitpath-quantifier-sonarqube";
import {Logger} from "ts-log";
import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {
    BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES, RAMCache, Cache,
    SonarQubePredecessorMeasurement,
    SonarQubePredecessorsQuantifier
} from "bugfinder-commitpath-quantifier-sonarqubepredecessors";

const container = new Container()
const mongoDBConfig: MongoDBConfig = {
    url: "mongodb://localhost:27017",
    dbName: "TypeScript_v2"
}
const testFileMatcher = /(test?\/.*\.*)/
const projectRoot: string = path.join(process.cwd(), "../repositories/TypeScript");
const propertiesPath: string = path.join(process.cwd(), "./src/01-recording/02a-quantifications/sonar-qube-properties/typescript.properties")

const typescriptPreHook: () => void = () => {
    execSync("npm install", {cwd: projectRoot});
}

const hooks: (() => void)[] = [
    typescriptPreHook
];

const sonarQubeConfig: SonarQubeConfig = {
    propertiesPath: propertiesPath,
    sonarQubeURL: "http://localhost:9000/",
    id: "admin",
    pw: "sonarqubepassword",
    preHooks: hooks
}
const gitOptions: GitOptions = {
    baseDir: projectRoot,
    maxConcurrentProcesses: 4,
};

const logOptions: LogConfig = {
    debugToConsole: true,
    errorToConsole: true,
    infoToConsole: true,
    traceToConsole: true,
    warnToConsole: true,
    logFile: "./log.txt",
}

// binding quantifier and its dependencies
container.bind<Quantifier<CommitPath, SonarQubePredecessorMeasurement>>(QUANTIFIER_TYPES.quantifier)
    .to(SonarQubePredecessorsQuantifier)
container.bind<SonarQubeQuantifier>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.sonarQube)
    .to(SonarQubeQuantifier)
container.bind<SonarQubeConfig>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBE_TYPES.sonarQubeConfig)
    .toConstantValue(sonarQubeConfig)


// binding cache and its dependencies
container.bind<Cache>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.cache).to(RAMCache)
container.bind<DB<CommitPath, number, SonarQubeMeasurement>>(
    BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.db).to(CommitPathsMongoDB)
container.bind<string>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.cacheID)
    .toConstantValue("Quantifications")
container.bind<number>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.n)
    .toConstantValue(10)
container.bind<boolean>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.upToN)
    .toConstantValue(false)
container.bind<boolean>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.uniqueMode)
    .toConstantValue(false)
container.bind<boolean>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBEPREDECESSORS_TYPES.useThisCommitPath)
    .toConstantValue(true)




// binding Git and its dependencies
container.bind<Git>(BUGFINDER_COMMITPATH_QUANTIFIER_SONARQUBE_TYPES.git).to(GitImpl)
container.bind<MADFilesFromCommit>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.madFilesFromCommitParser)
    .to(MADFilesFromLogImpl);
container.bind<FormatParser>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.gitCommitParser)
    .to(FormatParser);
container.bind<GitOptions>(BUGFINDER_LOCALITYRECORDER_COMMIT_TYPES.gitOptions)
    .toConstantValue(gitOptions);

// binding DB and its dependencies
container.bind<DB<CommitPath, any, SonarQubeMeasurement>>(QUANTIFIER_TYPES.db)
    .to(CommitPathsMongoDB)
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig)
    .toConstantValue(mongoDBConfig)

// binding shared logger
container.bind<Logger>(SHARED_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)

// binding QuantificationFactory
container.bind<QuantificationFactory<CommitPath, any>>(QUANTIFIER_TYPES.quantificationFactory)
    .to(QuantificationFactory)

export {container};