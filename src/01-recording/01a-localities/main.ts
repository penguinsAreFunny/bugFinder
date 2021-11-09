import "reflect-metadata";
import {container} from "./inversify.config"
import {DB, LOCALITY_RECORDING_TYPES, LocalityRecorder} from "bugfinder-framework";
import {CommitPath, PredecessorDefault, PredecessorsUnique} from "./commitPath";
import {GitFileType} from "bugfinder-localityrecorder-commit";
import _ from "underscore"
import {LocalityRecordingFactory} from "bugfinder-framework/dist/01-recording/01-localities/01a-localities/localityRecordingFactory";

async function topLevelAwaitWrapper() {

    try {

        const localityRecordingFactory = container
            .get<LocalityRecordingFactory<CommitPath>>(LOCALITY_RECORDING_TYPES.localityRecordingFactory)
        const localityRecorder = localityRecordingFactory.createLocalityRecorder()
        const db = localityRecordingFactory.createDB()

        const localities = await localityRecorder.getLocalities()



    } catch (error) {
        console.log("ERROR: 01a-locality: ", error.message);
    }

}

topLevelAwaitWrapper();