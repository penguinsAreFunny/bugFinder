import "reflect-metadata";
import {container} from "./inversify.config"
import {
    DB,
    TRAINING_TYPES,
} from "bugfinder-framework";
import {PythonInterface} from "./src/pythonInterface";

async function topLevelAwaitWrapper() {
    try {

        const trainer = container.get<PythonInterface>(TRAINING_TYPES.trainer)
        const db = container.get<DB<any, any, any>>(TRAINING_TYPES.db)

        const dataset = await db.readDataset("DatasetAP_predQuanti_postAnno_5_5")
        await trainer.dumpToPythonDir(dataset)

    } catch (error) {
        console.log("ERROR: ", error);
    }

}

topLevelAwaitWrapper();