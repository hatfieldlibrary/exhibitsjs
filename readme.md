# Museum Exhibit Builder App

This project makes it easy for novice web developers to create sophisticated museum exhibit kiosks implemented as single page JavaScript applications.

The person creating a new exhibit must be able to translate their content outline into a JSON template, create basic html files (that typically require only paragraph tags),
and finally resize and copy images into an image directory. The application uses this information to build an <a href="https://angularjs.org/">Angular.js</a> single page application. For novices, this work is a brief
introduction to how the web works.

The application is built using the<a href="http://foundation.zurb.com/apps/"> Foundation for Apps</a> web framework and supports web browsers and mobile devices as well as touchscreen kiosks.

This version of the application provides only one exhibit template.  Alternate exhibit templates can be defined using Angular.js routes, custom directives, and styling.



## Foundation for Apps Requirements

The project uses <a href="http://foundation.zurb.com/apps/">Foundation for Apps</a>. These requirements must be installed on your system.

### Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).
  * [Ruby](https://www.ruby-lang.org/en/): Use the installer for your OS. For Windows users, [JRuby](http://jruby.org/) is a popular alternative.
    * With Ruby installed, run `gem install bundler sass`.
  * [Gulp](http://gulpjs.com/) and [Bower](http://bower.io): Run `[sudo] npm install -g gulp bower`


## Installation

Clone or copy the contents of this repository to your system. Change into the project's base directory.  Then install the project dependencies by executing the following commands:

  * npm install
  * bower install

Once this is done, you can launch the sample exhibit typing `gulp` on the command line.  This will build the project and start the development server.  To view the sample exhibit, point your web browser to:

   `http://localhost:8080/#!/`


## Building your Exhibit

You will find exhibit folders here:

 * `client/assets/layout/exhibit.json`
 * `client/assets/images/*`
 * `client/assets/html/*`

These directories currently contain the assets used by the sample exhibit.  You will be modifying the directory content to create your own exhibit.

The `exhibit.json` file provides your exhibit structure. It's an array of top-level navigation sections that can in turn contain an array of second-level navigation sections.  Top-level and second-level
sections define page content.  Here's the basic structure:

<pre>section
 \_ page data
 \_ secondary navigation
    \_ page data</pre>

The exhibit currently supports 3 kinds of page data:

  * images with captions
  * html
  * slick carousel for multi-image documents, etc.

For details, see the sample `exhibit.json` file.


## Deploying your Exhibit

When you are ready to publish your exhibit, just copy the contents of the `build` directory to your web server.


## Advanced Customization



The applications `index.html` page includes Google font downloads and some simple header content that can be customized per exhibit.

All the tools for creating additional Angular.js templates, components, controllers and directives are available.  Rather than overwrite existing templates, it's recommended that you use Angular.js routing to define and create your own templates.

Exhibit styles are defined in the `scss` directory. Use the settings and create your own styles and mixin's here.  The contents of the scss directory
will be compiled into your exhibit css.

For more information, see:

  * <a href="http://foundation.zurb.com/apps/docs/#!/">Foundation for Apps documentation</a>
  * <a href="https://docs.angularjs.org/guide">Angular.js developer guide</a>
  * <a href="https://docs.angularjs.org/api">Angular.js API reference</a>

