# Description
This is a MonoRepository which aims to automatically find bugs in source code  
based on software-metrics.

This package contains all programms needed to run to generate a learning dataset.  
It uses partial implementations of the bugFinder-framework which are placed in  
the packages directory. You can find these packages on npm, too.   

This package uses [bugFinder-framework](#https://github.com/penguinsAreFunny/bugFinder-framework)
and implementation-packages of bugFinder-framework-interfaces.

# Pre
```
git submodule update --init --recursive  
npm install  
```
You won´t need SonarQube, if you do not like to quantify with SonarQubeQuantifier  
You won´t need git, if you do not like to use localityRecorder-Commit or CommitPath

Used Versions
```
git v2.33.1
SonarQube v9.0.1.46107  
node v14.17.0
```
# Configuration
Each script has a configuration file.
See src/.../module_name/inversify.config.ts

# Running
Please consider [configuring](#Configuration) the scripts before running.  
You can run the scripts:
```
npm run recording-01a-localities
npm run recording-01b-localities
npm run recording-02a-quantifications
npm run recording-02b-annotations
npm run preprocessing
npm run training
```
