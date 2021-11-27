import "reflect-metadata";
import {container} from "./inversify.config"
import {LocalityRecordingFactory, LOCALITY_RECORDING_TYPES} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";

async function topLevelAwaitWrapper() {
    const localityRecordingFactory = container
            .get<LocalityRecordingFactory<CommitPath>>(LOCALITY_RECORDING_TYPES.localityRecordingFactory)
    const localityRecorder = localityRecordingFactory.createLocalityRecorder()
    const db = localityRecordingFactory.createDB()
    const localities = await localityRecorder.getLocalities()
    await db.writeLocalities(localities, "Localities")
}

topLevelAwaitWrapper();