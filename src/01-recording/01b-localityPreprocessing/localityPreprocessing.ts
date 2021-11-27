import "reflect-metadata";
import {container} from "./inversify.config"
import {
    DB, LOCALITY_PREPROCESSING_TYPES, LocalityMap,
    LocalityPreprocessor,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";

async function topLevelAwaitWrapper() {
    const localityPreprocessor = container.get<LocalityPreprocessor<CommitPath>>(LOCALITY_PREPROCESSING_TYPES.localityPreprocessor);
    const db = container.get<DB<CommitPath, any, any>>(LOCALITY_PREPROCESSING_TYPES.db);
    const commitPaths = await db.readLocalities("Localities")
    const preprocessedLocs = await localityPreprocessor.preprocess(commitPaths)
    await db.writeLocalities(preprocessedLocs, "PreprocessedLocalities")
}

topLevelAwaitWrapper();