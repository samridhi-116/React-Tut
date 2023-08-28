- What is `NPM`?
    It is definately not a node package manager. It's anything but that.
    It is a package manager for JavaScript, and is used to install, and manage JavaScript libraries, modules, that you can use in your projects. It allows developers to easily add functionality to their applications.


- What is `npx`?
    The key feature of npx is that it allows you to run packages without the need to install them globally on your system or specify their exact path. Instead, it automatically downloads and executes the package temporarily, allowing you to use it for one-off commands or tasks.
    This ensures that you are using the correct version specified in your project's dependencies.
    If the package is not found locally in your project's node_modules directory, npx will automatically download and install the package from the npm registry, execute it, and then remove it.


- What is `Parcel/Webpack`? Why do we need it?
    Parcel and Webpack are tools for web development that serve as bundlers. 
    They are used to transform(creates a single line of code, removes all the comments, console.log etc.), bundle(bundle all the files to a single file), and optimize(minify our code) web assets, such as JavaScript, CSS, HTML, and images, making them ready for production use. 


- What is `.parcel-cache`?
    .parcel-cache directory is to store compiled, processed, and optimized assets that don't need to be reprocessed every time you run the bundler. Caching these intermediate artifacts allows Parcel to skip redundant processing time and speeds up the build process significantly.


- What is difference between `dependencies` vs `devDependencies`
    devDependencies: used to specify packages that are only required during development or for building the project, 
    <!-- ! Noooo... stored locally in our device. -->
    Examples: testing frameworks, build tools (like Parcel, Webpack, etc.), and other development-specific utilities.
    installation: npm i -D parcel

    dependencies: used to specify packages that are required for your application to run correctly in production,
    <!--! Nooo.... stored on our global environment. -->
    Examples: production-ready libraries (react, react-DOM), frameworks, and utilities that are needed to execute your application's core functionality.
    installation: npm i react


- What is `Tree Shaking`?
    while we are bundling our code for production, all the dead code and unused modules are removed. The goal of tree shaking is to reduce the size of the bundle, improve loading times, and optimize the application's performance. 
    We studied in JavaScript's runtime environment after the code is parsed into AST, we get a optimised code. That is where our bundlers are present. 


- What is `Hot Module Replacement`?
    this allows to update the particular code without requiring a full page refresh. It automatically injects changes into the running application, preserving its state, and reflecting updates immediately in the browser. 
    It uses file watcher algorithm - that keeps the track of all the changes made the code.


- List down your favourite 5 superpowers of Parcel and describe any 3 of them. 
    1. Development and production build
        in development build we are given all the dev tools and functionalities and while in production, we get all our files bundeled and minified, all our node modules are minifies and are added to a single file.
    2. Allows HTTPS
        parcel allows our server to run on HTTPS protocol.   npx parcel index.html --HTTPS
    3. Media optimisation
        heaviest items on our browser are media elements (images, videos), parser minifies and optimise that for us (for production use)
    4. Caching while development
        parcel-cache is like a storage space that parcel requires to store our code. 
        while we initialize our app on server it takes some time (say 1-3s) to build our environment, but after that when we save or make minor changes to our code, the updates take very less time (say 1-3ms). That's because of the parcel-caching. Our code is cached and when we make changes only those particular components are updated (other components are cached and stored).
    5. Hot Module Replacement
        already explained. 


- What is `.gitignore`? What should we add and not add into it?
    .gitignore itself says git-ignore, comonents that git has to ignore or components that should not be pushed to git. All the components that are auto generated should not be pushed to git. 

    we should not add files like package-lock.json to git, bcoz that file stores all the data required to re-generate node modules and also, it locks the versions of packages that we are using and ensures the production also uses same versions
    and components like node_modules, parcel-cache, dist should be added to it, bcoz those files are heavy and they are auto generated when we install the package or initialize it. 


- What is the difference between `package.json` and `package-lock.json`?
    package.json: this file contains all the information regarding our project, like project name, description, version, git repostries etc. This file is generated while initializing npm. 
    the most impt thing that it holds, is our dependencies. dependencies store all the installed packages and their versions. 

    package-lock.json: this is a auto-generated file, after installing a package. This file has all the details about our packages and their transitive dependencies and stuff. this file locks the version of our package and ensures that the production uses the same versions as the development. When we run npm install or npm update, npm will read the package-lock.json file to determine the exact versions of the packages to install.


- Why should I not modify `package-lock.json`?
    because of versions and similar packages, it ensures that everyone working on a project have same packages and their versions.

- What is `node_modules`? Is it a good idea to push that on git? 
    it is a directory, that auto-generates while we install our packages. it contains all the modules and files that helps the functionality of that package, all the dependencies and futher their dependencies...
    node module directory is quite large and heavy, plus when we install a package, it gets auto-generated. so, pushing such heavy and large files to git is not a good idea and also when they can be auto-generated. 


- What is the `dist` folder?
    dist folder (in case of parcel) contains all the final bundeled files. this folder is auto generated, when we run our parcel, this folder is created that contains each file of html, css, js that has combined all the codebase to one single file. This is our final output.


- What is `browserlists`?
    browserslist allows you to define the list of target browsers and some conditions related to the browsers that our app should support. It is almost similar to polyfill, but just that a polyfill is a code implementation that fills the gaps of the modern functionality to older browsers and browserlists is a object added to package.json file with the list of support browsers and conditions. 





