import { Dataset } from "bugfinder-framework";
export interface Trainer {
    train(dataset: Dataset): any;
}
