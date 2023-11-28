## Community Market
This is a readme, we have imported the vue and express in the project

Running the project. Run "npm i" in folder market and server
run market: npm run dev
run server: $env:DEBUG='myapp:*'; npm start
open by http://localhost:3000/
for any possible issue, try to remove node_modules, and run "npm i"

Documentation:
Front-end Directory (/market)
/public:
Functionality: Hosting of global static assets like site-wide images, favicons, and stylesheets.
/src:
Main Source Code for the entire front-end application.
/assets:
Functionality: Houses local assets such as images for specific components or pages, and local stylesheets.
/components:
Functionality: Contains reusable Vue components like product cards, navigation bars, footers, modals, and form controls.
/icons:
Functionality: Stores icon components, which are used across different components and views for consistent iconography.
/router:
Functionality: Manages Vue routing configurations, defining paths to different views/pages like Home, Product Listings, User Profiles, Shopping Cart, etc.
/views:
Functionality: Contains Vue page components like the Homepage, Product ListingModel Page, User Profile Page, Shopping Cart Page, etc.
Back-end Directory (/server)
/bin:
Functionality: Contains scripts to start and manage the server, often including development and production environment configurations.
/public:
Functionality: Serves static files that are publicly accessible, potentially including user-uploaded content or shared resources between front-end and back-end.
/images:
Functionality: Stores server-side images that might be used in emails, notifications, or other backend processes.
/javascripts:
Functionality: Contains server-side JavaScript files, potentially for utility functions, middleware, or other server-side logic.
/stylesheets:
Functionality: Used if the server dynamically generates stylesheets, or for server-side rendering scenarios.
/routes:
Functionality: Manages Express routes, handling API endpoints for functionalities like user authentication, product management, order processing, etc.
/views:
Functionality: If server-side rendering is used, this directory contains templates for generating HTML, like email templates or dynamically generated pages.
