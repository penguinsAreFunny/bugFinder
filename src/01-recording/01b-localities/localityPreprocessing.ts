import "reflect-metadata";
import {container} from "./inversify.config"
import {
    DB, LOCALITY_PREPROCESSING_TYPES, LocalityMap,
    LocalityPreprocessor,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";

async function topLevelAwaitWrapper() {
    try {

        const localityPreprocessor = container.get<LocalityPreprocessor<CommitPath>>(LOCALITY_PREPROCESSING_TYPES.localityPreprocessor);
        const db = container.get<DB<CommitPath, any, any>>(LOCALITY_PREPROCESSING_TYPES.db);
        const commitPaths = await db.readLocalities("AllCommitPaths")
        const preprocessedLocs = await localityPreprocessor.preprocess(commitPaths)
        await db.writeLocalities(preprocessedLocs, "CommitPaths-skip12146-n10000_v2")

    } catch (error) {
        console.log("ERROR: 01b-locality: ", error);
    }

}

topLevelAwaitWrapper();