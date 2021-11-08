import "reflect-metadata";
import {container} from "./inversify.config"
import {DB, LOCALITY_RECORDING_TYPES, LocalityRecorder} from "bugfinder-framework";
import {CommitPath, PredecessorDefault, PredecessorsUnique} from "./commitPath";
import {GitFileType} from "bugfinder-localityrecorder-commit";
import _ from "underscore"

async function topLevelAwaitWrapper() {

    try {

        const localityRecorder = container.get<LocalityRecorder<CommitPath>>(LOCALITY_RECORDING_TYPES.localityRecorder);
        const db = container.get<DB<CommitPath, any, any>>(LOCALITY_RECORDING_TYPES.db);

        const allLocalities = await db.readLocalities("CommitPaths")
        const localities = await db.readLocalities("CommitPaths-skip12146-n10000_v2")


        const log = (locs: CommitPath[]) => {
            locs.forEach((loc) => {
                console.log(loc.commit.hash, " ", loc.path.path, " ", loc.commit.order)
            });
        }

        CommitPath.setPredecessorDelegation(new PredecessorsUnique())
        let newlocs = _.sortBy(localities, (el) => {
            return -el.commit.order
        })
        const preds = CommitPath.getNPredecessorsMap(newlocs, 5, true, newlocs)
        const predsArray = preds.toArray().map(el => {
            return el.val
        })
        const map = new Map<string, number>()
        for (const pred of predsArray) {
            map.set(pred[0]?.path?.path, 0)
        }

        for (const pred of predsArray) {
            const curVal = map.get(pred[0]?.path?.path)
            map.set(pred[0]?.path?.path, curVal + 1)
        }

        let i = 0
        for (const key of map.keys()) {
            console.log(key, " ", map.get(key))
            i++
        }

        let x = 0
        const map2 = new Map<string, number>()

        for (const pred of predsArray) {
            for (let i = 0; i < pred.length; i++) {
                const p = pred[i]
                const key = p.commit.hash + p.path.path
                if (map2.get(key) == 1) {
                    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Duplicate found! " + key + " i")
                    x++
                }
                map2.set(key, 1)
            }
        }


        console.log("Duplicates: ", x)
        console.log("Total unique files with n preds: ", i)


        //const localities = await localityRecorder.getLocalities();
        //await db.writeLocalities(localities, "CommitPaths");


    } catch (error) {
        console.log("ERROR: 01a-locality: ", error.message);
    }

}

topLevelAwaitWrapper();