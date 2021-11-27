import {BUGFINDER_DB_COMMITPATH_MONGODB_TYPES, CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {
    DB, SHARED_TYPES,
    LogConfig, FileAndConsoleLogger, Preprocessor, PreprocessingFactory, PREPROCESSING_TYPES, TraceAP
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {preprocessingContainer} from "bugFinder-framework-defaultContainer";
import {Logger} from "ts-log";
import {SonarQubePredecessorMeasurement} from "bugfinder-commitpath-quantifier-sonarqubepredecessors";
import {
    BUGFINDER_COMMITPATH_PREDECESSORS_PREPROCESSOR_NULLFILTER_TYPES,
    NullFilterPreprocessor
} from "bugfinder-commitpath-number-sonarqube-preprocessor-featureselection";

const container = preprocessingContainer;
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

const ignorePaths = [/src$/]

const trace: TraceAP = {
    annotatorName: "bugfinder-commitpath-annotator-commitmsgwindow",
    annotatorVersion: "1.0.1",
    locPreprocessName: "bugfinder-commitpath-localitypreprocessor-commitsubset",
    locPreprocessVersion: "1.12.0",
    locRecordName: "bugfinder-localityrecorder-commitpath",
    locRecordVersion: "1.23.4",
    preprocessorName: "bugfinder-commitpath-number-sonarqubepredecessormeasurement-preprocessor-selectiontransformer",
    preprocessorVersion: "1.0.1",
    quantifierName: "bugfinder-commitpath-quantifier-sonarqubepredecessors",
    quantifierVersion: "1.1.8"
}
const description = "This dataset contains samples of code metrics of files and a target that indicated the number " +
    "of fixes that occured to that file. SonarQube was used to " +
    " measure atomic measurements. After that measurements of 3 predecessor CommitPaths were taken into account to" +
    " calculate SonarQubePredecessorMeasurements. Predecessors CommitPaths are the last changes of file in " +
    "predecessors commits. The annotations are the number of fix indicating commit messages in the 3 next " +
    "CommitPaths (next changes to that file). A fix indicating commit msg is a msg that contains words like bug, fix," +
    " error or fail, affects less or equal than 2 files is not a merge commit and if the CommitPath is not a test file."

const ignoreFeatures = [
    'minValClasses',
    'minValFunctions',
    'minValCoverage',
    'minValNcloc',
    'minValLinesToCover',
    'minValUncoveredLines',
    'minValStatements',
    'minValCommentLinesDensity',
    'minValLineCoverage',
    'minValComplexity',
    'minValCommentLines',
    'maxValClasses',
    'maxValFunctions',
    'maxValCoverage',
    'maxValNcloc',
    'maxValLinesToCover',
    'maxValUncoveredLines',
    'maxValStatements',
    'maxValCommentLinesDensity',
    'maxValLineCoverage',
    'maxValComplexity',
    'maxValCommentLines',
    'meanValClasses',
    'meanValFunctions',
    'meanValCoverage',
    'meanValNcloc',
    'meanValLinesToCover',
    'meanValUncoveredLines',
    'meanValStatements',
    'meanValCommentLinesDensity',
    'meanValLineCoverage',
    'meanValComplexity',
    'meanValCommentLines',
    'minDiffClasses',
    'minDiffFunctions',
    'minDiffCoverage',
    'minDiffNcloc',
    'minDiffLinesToCover',
    'minDiffUncoveredLines',
    'minDiffStatements',
    'minDiffCommentLinesDensity',
    'minDiffLineCoverage',
    'minDiffComplexity',
    'minDiffCommentLines',
    'maxDiffClasses',
    'maxDiffFunctions',
    'maxDiffCoverage',
    'maxDiffNcloc',
    'maxDiffLinesToCover',
    'maxDiffUncoveredLines',
    'maxDiffStatements',
    'maxDiffCommentLinesDensity',
    'maxDiffLineCoverage',
    'maxDiffComplexity',
    'maxDiffCommentLines',
    'meanDiffClasses',
    'meanDiffFunctions',
    'meanDiffCoverage',
    'meanDiffNcloc',
    'meanDiffLinesToCover',
    'meanDiffUncoveredLines',
    'meanDiffStatements',
    'meanDiffCommentLinesDensity',
    'meanDiffLineCoverage',
    'meanDiffComplexity',
    'meanDiffCommentLines',
    'minRelDiffClasses',
    'minRelDiffFunctions',
    'minRelDiffCoverage',
    'minRelDiffNcloc',
    'minRelDiffLinesToCover',
    'minRelDiffUncoveredLines',
    'minRelDiffStatements',
    'minRelDiffCommentLinesDensity',
    'minRelDiffLineCoverage',
    'minRelDiffComplexity',
    'minRelDiffCommentLines',
    'maxRelDiffClasses',
    'maxRelDiffFunctions',
    'maxRelDiffCoverage',
    'maxRelDiffNcloc',
    'maxRelDiffLinesToCover',
    'maxRelDiffUncoveredLines',
    'maxRelDiffStatements',
    'maxRelDiffCommentLinesDensity',
    'maxRelDiffLineCoverage',
    'maxRelDiffComplexity',
    'maxRelDiffCommentLines',
    'meanRelDiffClasses',
    'meanRelDiffFunctions',
    'meanRelDiffCoverage',
    'meanRelDiffNcloc',
    'meanRelDiffLinesToCover',
    'meanRelDiffUncoveredLines',
    'meanRelDiffStatements',
    'meanRelDiffCommentLinesDensity',
    'meanRelDiffLineCoverage',
    'meanRelDiffComplexity',
    'meanRelDiffCommentLines',
    'minValSecurityReviewRating',
    'minValBugs',
    'minValGeneratedLines',
    'minValTestSuccessDensity',
    'minValMajorViolations',
    'minValReliabilityRemediationEffort',
    'minValFiles',
    'minValEffortToReachMaintainabilityRatingA',
    'minValDuplicatedLines',
    'maxValVulnerabilities',
    'maxValSecurityReviewRating',
    'maxValMajorViolations',
    'maxValMinorViolations',
    'maxValDuplicatedFiles',
    'maxValSqaleRating',
    'maxValFiles',
    'maxValOpenIssues',
    'meanValSecurityRating',
    'meanValSecurityReviewRating',
    'meanValSqaleIndex',
    'meanValSecurityHotspots',
    'meanValMajorViolations',
    'meanValFiles',
    'meanValSkippedTests',
    'meanValSecurityRemediationEffort',
    'minDiffCognitiveComplexity',
    'minDiffSecurityRating',
    'minDiffInfoViolations',
    'minDiffReopenedIssues',
    'minDiffMajorViolations',
    'minDiffViolations',
    'minDiffReliabilityRating',
    'minDiffFiles',
    'maxDiffSecurityRating',
    'maxDiffDuplicatedBlocks',
    'maxDiffBugs',
    'maxDiffLines',
    'maxDiffReopenedIssues',
    'maxDiffCriticalViolations',
    'maxDiffReliabilityRemediationEffort',
    'maxDiffFiles',
    'maxDiffWontFixIssues',
    'meanDiffDuplicatedLinesDensity',
    'meanDiffSecurityRating',
    'meanDiffReopenedIssues',
    'meanDiffTestSuccessDensity',
    'meanDiffMinorViolations',
    'meanDiffTestFailures',
    'meanDiffReliabilityRemediationEffort',
    'meanDiffCodeSmells',
    'meanDiffOpenIssues',
    'minRelDiffSecurityRating',
    'minRelDiffBlockerViolations',
    'minRelDiffGeneratedLines',
    'minRelDiffReopenedIssues',
    'minRelDiffReliabilityRemediationEffort',
    'minRelDiffSqaleRating',
    'minRelDiffSkippedTests',
    'minRelDiffDuplicatedLines',
    'minRelDiffOpenIssues',
    'maxRelDiffVulnerabilities',
    'maxRelDiffInfoViolations',
    'maxRelDiffReopenedIssues',
    'maxRelDiffConfirmedIssues',
    'maxRelDiffDuplicatedFiles',
    'maxRelDiffReliabilityRemediationEffort',
    'maxRelDiffOpenIssues',
    'meanRelDiffCognitiveComplexity',
    'meanRelDiffDuplicatedBlocks',
    'meanRelDiffSqaleIndex',
    'meanRelDiffInfoViolations',
    'meanRelDiffSecurityHotspots',
    'meanRelDiffCriticalViolations',
    'meanRelDiffReliabilityRemediationEffort',
    'meanRelDiffSqaleDebtRatio',
    'meanRelDiffSecurityRemediationEffort',
    'meanRelDiffOpenIssues',
    'maxRelDiffBugs',
    'maxRelDiffCriticalViolations',
    'meanRelDiffBugs',
    'maxRelDiffSqaleIndex',
    'maxRelDiffMajorViolations',
    'maxRelDiffViolations',
    'maxRelDiffCodeSmells',
    'meanRelDiffMajorViolations',
    'meanRelDiffViolations',
    'meanRelDiffCodeSmells',
    'maxRelDiffBlockerViolations',
    'meanRelDiffBlockerViolations',
    'maxRelDiffDuplicatedLinesDensity',
    'maxRelDiffDuplicatedBlocks',
    'maxRelDiffDuplicatedLines',
    'meanRelDiffDuplicatedLinesDensity',
    'meanRelDiffDuplicatedFiles',
    'meanRelDiffDuplicatedLines',
    'maxRelDiffSecurityHotspots',
    'maxRelDiffMinorViolations',
    'meanRelDiffMinorViolations',
    'maxRelDiffSqaleDebtRatio',
    'maxRelDiffCognitiveComplexity'
]

// Preprocessor and its config
container.bind<Preprocessor<CommitPath, number, SonarQubePredecessorMeasurement>>(
    PREPROCESSING_TYPES.preprocessor).to(NullFilterPreprocessor);
container.bind<TraceAP>(
    BUGFINDER_COMMITPATH_PREDECESSORS_PREPROCESSOR_NULLFILTER_TYPES.traceAP).toConstantValue(trace)
container.bind<string>(
    BUGFINDER_COMMITPATH_PREDECESSORS_PREPROCESSOR_NULLFILTER_TYPES.description).toConstantValue(description)
container.bind<RegExp[]>(BUGFINDER_COMMITPATH_PREDECESSORS_PREPROCESSOR_NULLFILTER_TYPES.ignorePaths)
    .toConstantValue(ignorePaths)
container.bind<PreprocessingFactory<CommitPath, number, SonarQubePredecessorMeasurement>>(
    PREPROCESSING_TYPES.preprocessingFactory).to(PreprocessingFactory)

// db and its config
container.bind<DB<CommitPath, any, any>>(PREPROCESSING_TYPES.db).to(CommitPathsMongoDB);
container.bind<MongoDBConfig>(BUGFINDER_DB_COMMITPATH_MONGODB_TYPES.mongoDBConfig).toConstantValue(mongoDBConfig)

//
container.bind<string[]>(BUGFINDER_COMMITPATH_PREDECESSORS_PREPROCESSOR_NULLFILTER_TYPES.ignoreFeatures)
    .toConstantValue(ignoreFeatures)

// binding logger and its config
container.bind<Logger>(SHARED_TYPES.logger).to(FileAndConsoleLogger)
container.bind<LogConfig>(SHARED_TYPES.logConfig).toConstantValue(logOptions)

export {container};