import "reflect-metadata";
import {container} from "./inversify.config"
import {
   PREPROCESSING_TYPES, PreprocessingFactory,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {SonarQubePredecessorMeasurement} from "bugfinder-commitpath-quantifier-sonarqubepredecessors/dist/sonarQubePredecessorsQuantifier/measurement/SonarQubePredecessorMeasurement";

async function topLevelAwaitWrapper() {
    try {

        const preprocessingFactory = container
            .get<PreprocessingFactory<CommitPath, SonarQubePredecessorMeasurement, number>>(
                PREPROCESSING_TYPES.preprocessingFactory);

        const preprocessor = preprocessingFactory.createPreprocessor()
        const db = preprocessingFactory.createDB()
        const quantifications = await db.readQuantifications("PredQuantifications_n10")
        const annotations = await db.readAnnotations("PostAnnotations_n10")
        const dataset = await preprocessor.preprocess(quantifications, annotations)
        await db.writeDataset("DatasetAP_predQuanti_postAnno_10_10", dataset)

    } catch (error) {
        console.log("ERROR: ", error);
    }

}

topLevelAwaitWrapper();