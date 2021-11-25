import "reflect-metadata";
import {container} from "./inversify.config"
import {
    LocalityMap,
    QuantificationFactory, QUANTIFIER_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {MongoDBConfig} from "bugfinder-commit-db-mongodb";
import {
    SonarQubePredecessorMeasurement,
} from "bugfinder-commitpath-quantifier-sonarqubepredecessors";
import {CommitPathsMongoDB} from "bugfinder-commitpath-db-mongodb";
import {SonarQubeMeasurement} from "bugfinder-commitpath-quantifier-sonarqube";
import _ from "underscore"
import * as crypto from "crypto";

async function topLevelAwaitWrapper() {

    try {
        const dbConfig: MongoDBConfig = {
            url: "mongodb://localhost:27017",
            dbName: "TypeScript"
        }


        const factory = container.get<QuantificationFactory<CommitPath, SonarQubePredecessorMeasurement>>(
            QUANTIFIER_TYPES.quantificationFactory)
        const db = factory.createDB()
        const quantifier = factory.createQuantifier()


        const locs = await db.readLocalities("Preprocessed_Localities")
        const predQuantis = await quantifier.quantify(locs, locs)
        await db.writeQuantifications(predQuantis, "PredQuantifications_n10")

/*
        const q0 = await db.readQuantifications("TestQuantis_v2")
        const q1 = await db.readQuantifications("MissingQuantis13k")
        const q2 = await db.readQuantifications("MissingQuantis14k")
        const q3 = await db.readQuantifications("MissingQuantis15Bis18k")
        const q4 = await db.readQuantifications("MissingQuantisSlice1000")
        const q5 = await db.readQuantifications("MissingQuantisSlice1000To1500")
        const q6 = await db.readQuantifications("MissingQuantisSlice1500To1881")
        const allLocs = await db.readLocalities("CommitPaths-skip12146-n10000_v2")

        const test = (quantis: LocalityMap<CommitPath, any>) => {
            for(const el of quantis.toArray()){
                if(el.val.cognitiveComplexity != null){
                    console.log("FOUND")
                    return true
                }
            }
            return false
        }

        if(test(q0)) console.log("q0")
        if(test(q1)) console.log("q1")
        if(test(q2)) console.log("q2")
        if(test(q3)) console.log("q3")
        if(test(q4)) console.log("q4")
        if(test(q5)) console.log("q5")
        if(test(q6)) console.log("q6")

        const allQuantis = new LocalityMap<CommitPath, any>()
        allQuantis.push(q0)
        allQuantis.push(q1)
        allQuantis.push(q2)
        allQuantis.push(q3)
        allQuantis.push(q4)
        allQuantis.push(q5)
        allQuantis.push(q6)

        let x = 0
        const locMap = new Map<string, boolean>()
        const newAllQuantis = new LocalityMap<CommitPath, any>()
        allLocs.forEach(loc => {
            const key = loc.commit.hash + loc.path.path
            locMap.set(key, true)

            if(allQuantis.getVal(loc) == null){
                console.log(key)
                x++
            }else{
                newAllQuantis.set(loc, allQuantis.getVal(loc))
            }
        })

        let y = 0
        allQuantis.toArray().forEach(el => {
            const key = el.key.commit.hash + el.key.path.path
            if(!locMap.get(key)){
                console.log("\t", key)
                y++
            }
        })


        console.log("All quantis size: ", allQuantis.size())
        console.log("Localities not quantified: ", x)
        console.log("Quantifications not in localities: ", y)
        console.log("New all quantis size: ", newAllQuantis.size())
        await db.writeQuantifications(newAllQuantis, "Quantis_v5")
        await db.writeLocalities(newAllQuantis.getLocalities(), "Localities_v5")*/

        // await db.writeQuantifications(allQuantis, "TestQuantis_v4")
        //  const predQuantis = await quantifier.quantify(locs, locs)

    } catch (error) {
        console.log("ERROR: 02a-quantification: ", error);
    }

}

topLevelAwaitWrapper();