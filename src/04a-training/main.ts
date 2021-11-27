import "reflect-metadata";
import {container} from "./inversify.config"
import {
    Dataset,
    DB,
    TRAINING_TYPES,
} from "bugfinder-framework";

import fs from "fs";

async function topLevelAwaitWrapper() {
    const db = container.get<DB<any, any, any>>(TRAINING_TYPES.db)

    console.log("This is only an interface to support machine learning with src.")
    console.log("Feel free to model the whole training process, if you like to automate training.")
    console.log("This function will only dump the datasets to json-files so that you can train with the" +
        " given template-project bugFinder-machineLearning or your own scripts.")

    const datasetsIDs = container.get<string[]>("DATASETS_IDs")
    for(const datasetID of datasetsIDs){
        const dataset = await db.readDataset(datasetID)
        toFile(dataset, datasetID)
    }
}

function toFile(dataset: Dataset, datasetName){
    const datasetPathSrc = "./src/" + datasetName
    fs.writeFileSync(datasetPathSrc, JSON.stringify(dataset))
    console.log(`You can find the dataset as a json-file with path: ${datasetPathSrc}.`)
    console.log("Use the Python scripts to select and train a suitable model.")
}


topLevelAwaitWrapper();