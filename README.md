Foundation-Zurb - Custom Build with Grunt, Compass, SASS
==============

### Dependencies

* Install Grunt globally
* If you have installed **Grunt** globally in the past, you will need to remove it first:
`npm uninstall -g grunt`
* Then run
`npm install -g grunt-cli`

### Set Up Project

* Clone the Repo
* CD into the main folder **foundation_htg**
* Install all project dependencies
`npm install`
* To run the project files:
`grunt default watch`

### Add new CSS files

* Create new .SCSS file within appropriate SCSS folder
* Go to **app.scss**
* At bottom of file, import file you have just added
`@import base/myNewFile`
NB: file extension not required

### Add new JS files

* Create new .JS file
* Open **Gruntfile.js** and add appropriate file in **concat > js > src**
