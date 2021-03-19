# Baseball Bunch Frontend

To install dependencies: `npm install`

To start the app at `localhost:3000`: `npm start`

In order to deploy our app, we need a built and minified version of the app. Typically, this is something that would be
handled by the host. However, since our cPanel root does not have access to node or npm, we must run the build locally
and commit the output. To do so, run: `npm run-scripts build`

To deploy, log into the cPanel terminal and navigate to this directory. Once there, pull the latest from Github and run:
`./deploy-to-cpanel.sh`. This will wipe out the old build files from public_html and replace them with the updated ones along with
.htaccess which helps us handle routing with react.
