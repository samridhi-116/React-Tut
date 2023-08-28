okay, so to ignite our app
in our terminal, we will initialize npm using..  
    <!--*  npm init   [(-y) will skip all those unnecessary options] -->
        this will create a package.json file
        
and to install our package.. 
    <!-- *  npm install (i) packageName -->

to install parcel... 
    <!-- * npm install -D parcel   [npm i --save-dev parcel] -->
        -D is dev dependency (for developing and normally it is for production)
        else, gets installed on global environment, we install react on our global environment. 

        now in our package.json file we can notice some changes.. there is a property created, called 
        "dev dependency".. 
            when we install a package, it's basic info like version and name gets stored in our dependency..
            version is stored in 3 ways: 
                "2.3.1" -> means we are sticking to this current version, we don't need changes in it
                "^2.3.1" -> ^ is called caret -> if we have minor version changes it updates it automatically
                "~2.3.1" -> ~ is called tilder -> used for major version updates

and after installing a package, there is one more file and a folder created
    package-lock.json -> this is a very important file and never to be messed with.. 
        it locks the version we use, and it has all the necessary info we need for our package
        it is mandatory to push it to git while uploading other files.
        it ensures that the production also uses the same versions as we used. 
        
    node_modules -> all the packages that we install, gets stored in node_modules
        it acts as a library for npm, all the stored packages and modules required to run it, are present in here!
        we should never upload these modules to git, bcoz the file is very heavy and all package-lock.json file has all the necessary info to re-create these modules again. 

install react using -> 
    <!--*  npm i react -->
    <!--*  npm i react-dom -->

but how to connect to server?
    <!--*   npx parcel ignition.html -->
        means, run parcel through npm with a entry point (ignition.html)

.gitignore -> in this file we mention all the files that can be auto-generated, we do not push those files to git. for example, node_modules, .parcel-cache, dist etc...

Now, [npx parcel index.html] creates a development built for us and hosts it on the server..
but, how to tell our server that we want production built??

    easy, use build commandddd????
    <!--*  npx parcel build index.html  -->
        and like that parcel will build all the production ready files in dist folder
        you'll get 3 files each of html, css, js.. 
        we know parcel is a bundler, so it bundeled our code and created single file of each type.

what exactly our parcel does? Why is it a beast?

1.  HOT MODULE REPLACEMENT (HMR)
         this automatically updates out local host as we make changes to our code...
         it uses File watcher algorithm: 
             (written in c++ -> bcoz it's very fast and keeps the track of all the files changing and tells the server to reload) that's how it gets to know any change we make in our file.

2.  Bundling
         parcel bundels our entire file and gives us a production ready code.

3.  Minify
4.  Cleaning our code
5.  Super Fast build algorithm
6.  Development and Production build
7.  Media optimization
         We know, media is a heavy elemnt in our browser, so not only our code, but also all our media like images and videos gets minified and optimised.

8.  Caching While Development
         parcel caches our data. that's why when we make changes to it, the loading speed gets reduced.

9.  Compatable with older versions of our browser
10. Parcel allows us to build our app on HTTPS
         npx parcel index.html --HTTPS

11. Creates server
         Parcel creates server so that we can run our react on it

12. Can manage port numbers
13. Consistent Hashing algorithm
14. It is a 0 config. bundler
15. Compression
16. Tree Shaking - Removing unwanted code, in a package we have so many other functionalities, that we might not use, so parcel removes those modules and files too..

Now, does a single package performs all these functionalities?
    Nooo! a single package can not perform these many functionalities,parcel uses the files present in parcel-cache to perform all the functionalities it does, parcel is orchestrating things. parcel it self has other dependencies that performs certain things, and they further have their own dependencies and so on.... 
    and they are known as transitive dependencies. 