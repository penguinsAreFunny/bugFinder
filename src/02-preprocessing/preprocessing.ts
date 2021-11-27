import "reflect-metadata";
import {container} from "./inversify.config"
import {
   PREPROCESSING_TYPES, PreprocessingFactory,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {SonarQubePredecessorMeasurement} from "bugfinder-commitpath-quantifier-sonarqubepredecessors/dist/sonarQubePredecessorsQuantifier/measurement/SonarQubePredecessorMeasurement";

async function topLevelAwaitWrapper() {

    const preprocessingFactory = container
        .get<PreprocessingFactory<CommitPath, SonarQubePredecessorMeasurement, number>>(
            PREPROCESSING_TYPES.preprocessingFactory);

    const preprocessor = preprocessingFactory.createPreprocessor()
    const db = preprocessingFactory.createDB()
    const quantifications = await db.readQuantifications("Quantifications")
    const annotations = await db.readAnnotations("Annotations")
    const dataset = await preprocessor.preprocess(quantifications, annotations)
    await db.writeDataset("Dataset", dataset)

}

topLevelAwaitWrapper();