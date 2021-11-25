import "reflect-metadata";
import {container} from "./inversify.config"
import {
    AnnotationFactory, ANNOTATOR_TYPES, FileAndConsoleLogger, LogConfig, SHARED_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import _ from 'underscore';
import {Logger} from "ts-log";

async function topLevelAwaitWrapper() {

    try {
        const annotationFactory =
            container.get<AnnotationFactory<CommitPath, number>>(ANNOTATOR_TYPES.annotationFactory)
        const annotator = annotationFactory.createAnnotator();
        const db = annotationFactory.createDB();

        const localities = await db.readLocalities("Preprocessed_Localities")

        const logger = container.get<Logger>(SHARED_TYPES.logger)
        CommitPath.logger = logger

        const annotations = await annotator.annotate(localities, localities)
        await db.writeAnnotations(annotations, "PostAnnotations_n3")

    } catch (error) {
        console.log("ERROR: 02b-annotation: ", error);
    }

}

topLevelAwaitWrapper();