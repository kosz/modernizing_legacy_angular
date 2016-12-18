# legacy

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. However this does not matter, the instructions in this repo should work with any 
legacy angular 1 project.

## Build & development

Run `grunt` for building and `grunt serve` for preview.
Run `webpack --watch` to have webpack watch for typescript file changes. Please follow the hijacking instructions before, so this can work.

## Hijacking Instructions

You should be able to use these instructions on top of any legacy angular 1 project. 

### 1. copy the webpack.config.js to the root of your project 

This is the webpack configuration file

### 2. copy the scripts/a1to2 directory anywhere you'd like in your project

This directory contains the angular 1 to 2 transitional framework.

### 3. copy app.ts anywhere you'd like in your project

This will become the entry point for the app. 

#### 3.1 Remove the ng-app declaration from index.html if used

If ng-app is not used, remove the bootstraping code for your current app.

#### 3.2 Add your app's module as a dependency inside app.ts

This is the root of the hijacking mechanism. Your old js app becomes a dependency 
for your new TypeScript app. Anything from the old JS app is brought over, and anything 
new written in TypeScript can work with the old code.

This is a very non intrusive strategy.

### 4. copy timer.ts anywhere you'd like in your project

This is a test component. If things work well, adding <timer></timer> anywhere in your old app should render this component, which is written in TypeScript using syntax very similar to angular 2.

### 5. npm install webpack awesome-typescript-loadoer typescript --save 

Webpack will also need to be installed globally.

### 6. edit all files and update necessary paths

There are various paths in the files that need to be updated based on the choices made on where they should live in the new project. 

### 7. include the javascript output file in your project's index.html

The webpack.config.js declares an output file destination. All your type script code will be compiled here. Including this file 
in your index.html AFTER your legacy javascript app angular module declaration, will allow the typescript app.ts to take over bootstraping
while still including your legacy code. 

Please note that the TypeScript files can be debugged directly in Chrome Dev Tools due to the sourcemap features included in this example. 
The typescript files can be found under Chrome Dev Tools > Sources > webpack://

### 8. open an issue if I've forgotten any steps

:sweat_smile:


## Setting up ng-redux

### Install redux and stuff

```
npm install redux redux-thunk ng-redux --save
npm install typings -g
typings install -SG dt~redux-thunk
```

### Add NgRedux
