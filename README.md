# App Academy App (a/A/a)
An application submission and management website with a Rails/PostgreSQL backend and react/redux front end.  
## Features
* A simple form for applying to a/A
* Once the form is submitted an email is sent to the user with a link to a coding challenge
* coding challenge page has a text editor with syntax hilighting 
* Admin area allows users to see all applications and their respective coding challenges. Applications can be approved and denied. 
* Jest test for redux actions
## Running 
  A live version of this project can be seen [here](http://aa-application.herokuapp.com). Give it a second, the heroku dynos take a minute to wake up.

  If you would like to run this project locally following the following steps:

  * clone this repository
  * run ``bundle`` and ``npm install``
  * launch rails server
  * unless you provide an email account in `development.rb` the mailer will not work locally
## Future Improvements

* Currently the code area for the coding challenge only supports javascript, this could be extended to support a myriad of languages
* The testing suite is currently very sparse due to the time constraints of the project. In a production environment it would need to be expanded