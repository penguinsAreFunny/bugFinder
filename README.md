# Description
This is a MonoRepository which aims to automatically find bugs in source code  
based on software-metrics.

This package contains all programs needed to run to generate a learning dataset.  
It uses partial implementations of the bugFinder-framework which are placed in  
the packages directory. You can find these packages on npm, too.   

This package uses [bugFinder-framework](https://github.com/penguinsAreFunny/bugFinder-framework)
and implementation-packages of bugFinder-framework-interfaces.


# Table of contents
- [Description](#description)
- [Table of contents](#table-of-contents)
- [Pre](#pre)
- [Configuration](#configuration)
- [Running](#running)
- [Machine Learning](#machine-learning)
- [Concept](#concept)
- [Pipeline](#pipeline)
  * [Record localities](#record-localities)
  * [Preprocess localities](#preprocess-localities)
  * [Quantify localities](#quantify-localities)
  * [Annotate localities](#annotate-localities)
  * [Preprocess quantified and annotated localities](#preprocess-quantified-and-annotated-localities)
- [Blackboard](#blackboard)
  * [Controller](#controller)
  * [Knowledge Sources](#knowledge-sources)
- [Knowledge sources available](#knowledge-sources-available)
  * [DB](#db)
  * [LocalityRecorder (and therefore localities)](#localityrecorder--and-therefore-localities-)
  * [LocalityPreprocessors](#localitypreprocessors)
  * [Quantifier](#quantifier)
  * [Annotator](#annotator)
  * [Preprocessor](#preprocessor)
  * [Machine Learning](#machine-learning-1)
<!-- <small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small> -->

# Pre
```
git submodule update --init --recursive  
npm install  
```
You won´t need SonarQube, if you do not like to quantify with SonarQubeQuantifier.
If you want to use SonarQube for quantifications
Used Versions
```
git v2.33.1
SonarQube v9.0.1.46107  
node v14.17.0
Anaconda3 2020.07 (Python 3.8.3 64-bit)
```
# Configuration
Each script has a configuration file.  
See src/.../module_name/inversify.config.ts

# Running
Please consider [configuring](#Configuration) the scripts before running.  
You can run the scripts:
```
npm run recording-01a-localityRecording
npm run recording-01b-localityPreprocessing
npm run recording-02a-quantifying
npm run recording-02b-annotating
npm run preprocessing
npm run training
```

# Machine Learning
The training phase is not automated. You can use packages/bugFinder-machineLearning as a template.  
For further readings see [bugFinder-machineLearning](#https://github.com/penguinsAreFunny/bugFinder-machineLearning)

# Concept
The architecture of this project is based on a pipeline and a blackboard architecture.

# Pipeline
The whole process of finding bugs in source code with machine learning is modeled as a pipeline:  
![Machine_Learning_Pipeline](./doc/Pipeline.svg | width=75)  


## Record localities
Record localities you want to find bugs in. F.e. a Commit or a path in a commit.
## Preprocess localities
Preprocess the recorded localities. You might want to filter localities you do not want to consider for now or inject localities.
## Quantify localities
You need to quantify your preprocessed localities with the goal of generating features used for machine learning.
F.e. measure software-metrics about the last changes of your source-code file.
## Annotate localities
You need to annotate you localities to generate able to generate a suitable dataset for supervised learning.  
Do the localities contain a bug or do the not? 
F.e. Take the next five changes of a file into account and measure how many bug fixes were made.
## Preprocess quantified and annotated localities
With the goal of achieving a dataset, which can be easily used with [scikit-learn](#https://scikit-learn.org/stable/) your
quantified and annotated localities need to be transformed to a suitable format. You might want to filter features or samples you do not want to consider.

# Blackboard  
<img src="https://github.com/penguinsAreFunny/bugFinder/blob/master/doc/loesungsstrategie.svg" width=75% height=75%/>  
<img src="https://github.com/penguinsAreFunny/bugFinder/blob/master/doc/Bausteinsicht-Recording.svg" width=75% height=75%/>  

## Controller
For each step of the pipeline there is a controller. Each steps uses a knowledge source.
The controllers are pictured on the left side of the picture. The Recording-Component consists of
the components localityRecording, localityPreprocessing, quantifying and annotating.  
## Knowledge Sources
The knowledge sources (right part of the picture) can be exchanged. Dependency injection with [InversifyJS](#https://github.com/inversify/InversifyJS) is used.


# Knowledge sources and components available
You can find different components realisations open source on github and npm.
Search for bugfinder-*
## DB
- [Commit-MongoDB](https://www.npmjs.com/package/bugfinder-commit-db-mongodb)
- [CommitPath-MongoDB](https://www.npmjs.com/package/bugfinder-commitpath-db-mongodb)

## LocalityRecorder (and therefore localities)
npm search: bugfinder-localityrecorder-*
- [CommitPath](https://www.npmjs.com/package/bugfinder-localityrecorder-commitpath)
- [Commit](https://www.npmjs.com/package/bugfinder-localityrecorder-commit)

## LocalityPreprocessors
npm search: bugfinder-$LOCALITY_CLASS-localityPreprocessor-* 
- [Predecessors](https://www.npmjs.com/package/bugfinder-commitpath-localitypreprocessor-commitsubset)
## Quantifier
npm search: bugfinder-$LOCALITY_CLASS-quantifier-*
- [SonarQube](https://github.com/penguinsAreFunny/bugFinder-commitPath-quantifier-sonarqube)
- [SonarQubePredecessors](https://github.com/penguinsAreFunny/bugFinder-commitPath-quantifier-sonarqubePredecessors)
## Annotator
npm search: bugfinder-$LOCALITY_CLASS-annotator-*
- [CommitMsg](https://www.npmjs.com/package/bugfinder-commitpath-annotator-commitmsg)
- [CommitMsgPredecessors](https://github.com/penguinsAreFunny/bugFinder-commitPath-annotator-commitMsgPredecessors)
## Preprocessor
npm search: bugfinder-$LOCALITY_CLASS-$ANNOTATION_TYPE-$QUANTIFICATION_TYPE-preprocessor-*
- [featureSelection](https://github.com/penguinsAreFunny/bugFinder-commitpath-number-sonarqube-preprocessor-featureSelection)
## Machine Learning
- [bugFinder-machineLearning](https://github.com/penguinsAreFunny/bugFinder-machineLearning)  
