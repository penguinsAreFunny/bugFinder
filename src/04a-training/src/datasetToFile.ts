import {Dataset} from "bugfinder-framework";
import path from "path";
import fs from "fs";
import {execSync} from "child_process";

export class DatasetToFile {
    toFile(dataset: Dataset){
        const pythonWd = path.join(__dirname, "src")
        const datasetPath = path.join(pythonWd, "dataset_5_5.json")
        const datasetPathSrc = "./src/dataset_5_5.json"
        fs.writeFileSync(datasetPath, JSON.stringify(dataset))
        fs.writeFileSync(datasetPathSrc, JSON.stringify(dataset))

        console.log("This is only an interface to support machine learning with src.")
        console.log("Feel free to model the whole training process, if you like to automate training.")
        console.log("This function will only dump the dataset to a json file so that you can train with the" +
            " given src templates or your own src scripts.")
        console.log("Have a look at src/src/main.ipynb. Run conda activate ./ml_env to use the template scripts.")
        console.log(`You can find the dataset as a json-file with path: ${datasetPathSrc}.`)
        console.log("Use the Python scripts to select and train a suitable model.")

        const stdout1 = execSync("conda activate ./ml_env",{cwd: pythonWd})
        const stdout2 = execSync(`python main.py ${datasetPath}`, {cwd: pythonWd})
        console.log(stdout1.toString())
        console.log(stdout2.toString())
        console.log("PythonWD: ", pythonWd)
        console.log("Datasetpath: ", datasetPath)
        }

    }
}