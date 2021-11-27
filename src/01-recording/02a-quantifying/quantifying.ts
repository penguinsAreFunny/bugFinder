import "reflect-metadata";
import {container} from "./inversify.config"
import {
    QuantificationFactory, QUANTIFIER_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {
    SonarQubePredecessorMeasurement,
} from "bugfinder-commitpath-quantifier-sonarqubepredecessors";

async function topLevelAwaitWrapper() {

    const factory = container.get<QuantificationFactory<CommitPath, SonarQubePredecessorMeasurement>>(
        QUANTIFIER_TYPES.quantificationFactory)
    const db = factory.createDB()
    const quantifier = factory.createQuantifier()
    const localities = await db.readLocalities("PreprocessedLocalities")
    const allLocalities = await db.readLocalities("Localities")
    const predQuantis = await quantifier.quantify(localities, allLocalities)
    await db.writeQuantifications(predQuantis, "Quantifications")

}

topLevelAwaitWrapper();