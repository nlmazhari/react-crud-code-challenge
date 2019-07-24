# Documentation

## How to run the application locally in the browser:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
commands to use:
* to install the packages after pull: npm install
* to run the project: npm start
* to run test units: npm test -> please press a to run all tests

## How to use the application:

* after running the project, the start view is loaded on port 3000.
* thers is a list of dinos in here, u can remove each by clicking on the remove button beside dino name.
* there is a pagination which shows a list of 100 dinos per page. 
* by clicking on different page numbers, different requests will be sent to the api, loading next results. 
* u can add new dinos by entering the name in the input field under create new dino title and hit save button.

* by clicking on any of dino names, u will be redirected into view dino detalis page.
* since this is SPA, only the contents of the mainbar section is changing.
* u can update dino name here, by clicking update name button. a form will show up, enabling the user to edit the name.
* u can remove single weight enteries by clicking the remove button beside each row.
* u can change the weight by typing into the field, and it will be changed on blur.
* u can add new weights, though I have not included specific form validations such as checking the date user enters, since I think it would be beyond the scope of this test. I also didn't focus on the UI and design, as required.

Cheers! :)