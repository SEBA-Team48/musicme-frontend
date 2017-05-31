# musicme-frontend

musicme-frontend application

MusicMe application based on AngularJS. Backend can be found here
Prerequisites

Both for the front end and the back end check:

    nodejs official website - nodejs includes npm (node package manager)

Getting Started

To get you started you can simply clone the musicme-frontend repository and install all its dependencies:
Prerequisites

You need git to clone the sebamaster-movie-frontend repository. You can get git from http://git-scm.com/.

We also use a number of node.js tools to initialize and test sebamaster-movie-frontend . You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.
Clone MusicMe Project

Clone the musicme-frontend repository using git:

git clone https://github.com/SEBA-Team48/musicme-frontend.git
cd sebamaster-movie-frontend

If you just want to start a new project without the musicme-frontend commit history then you can do:

git clone --depth=1 https://github.com/SEBA-Team48/musicme-frontend.git <your-project-name>

The depth=1 tells git to only pull down one commit worth of historical data.

In case you would like to try the application without a server you can use the branch

git clone -b serverless --depth=1 https://github.com/SEBA-Team48/musicme-frontend.git <your-project-name>

Install Dependencies

We get the tools we depend upon via npm, the node package manager.

npm install

Create a Bundle for the Application

This project use webpack version 1 for creating a bundle of the application and its dependencies

We have pre-configured npm to automatically run webpack so we can simply do:

npm run build

Behind the scenes this will call webpack --config webpack.config.js. After, you should find that you have one new folder in your project.

    dist - contains all the files of your application and their dependencies.

Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

npm start

Now browse to the app at http://localhost:8000/index.html.
