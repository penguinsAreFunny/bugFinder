import "reflect-metadata";
import {container} from "./inversify.config"
import {
    AnnotationFactory, ANNOTATOR_TYPES, FileAndConsoleLogger, LogConfig, SHARED_TYPES,
} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import _ from 'underscore';
import {Logger} from "ts-log";

async function topLevelAwaitWrapper() {
    const annotationFactory =
            container.get<AnnotationFactory<CommitPath, number>>(ANNOTATOR_TYPES.annotationFactory)
    const annotator = annotationFactory.createAnnotator();
    const db = annotationFactory.createDB();
    const localities = await db.readLocalities("PreprocessedLocalities")
    const allLocalities = await db.readLocalities("Localities")
    const annotations = await annotator.annotate(localities, allLocalities)
    await db.writeAnnotations(annotations, "Annotations")
}

topLevelAwaitWrapper();