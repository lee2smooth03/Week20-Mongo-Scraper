# Week 20: Mongo Scraper
Use Cheerio and Mongo to scrape NY Times or any website of my choice

## Packages to Install:
:: `npm init` ::
- express
- express-handlebars
- body-parser
- mongoose
- cheerio
- request

## Deploy the App to Heroku:
In order to deploy the project to Heroku, we need to set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Following these steps to get it running:

- Create a Heroku app in the project directory. 
- Run this command in the Terminal/Bash window: 
    * `heroku addons:create mongolab`
    * This command will add the free mLab provision to any project

- We'll need to find the URI string that connects Mongoose to mLab. Run this command to grab that string: 
    * `heroku config | grep MONGODB_URI`
    * Notice the value that appears after `MONGODB_URI =>`
    _This is your URI string. Copy it to a document for safekeeping_

- When it's to connect Mongoose with the remote database, simply paste the URI string as the lone argument of for `mongoose.connect()` function. That’s it!

- Reference: http://nyt-mongo-scraper.herokuapp.com/

### Instructions
In this assignment, we're to create a web app that lets users view and leave comments on the latest news. But we don't actually write any articles; instead, we'll flex our Mongoose and Cheerio muscles to scrape news from another sites.

    01)
    Whenever a user visits the site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

        * Headline - the title of the article
        * Summary - a short summary of the article
        * URL - the url to the original article
        * Feel free to add more content to your database (photos, bylines, and so on)

    02)
    Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

    * Whenever you scrape a site, make sure an article isn't already represented in the database
      we don't want duplicates

### Tips
    * Go back to Saturday's activities if you need a refresher on how to partner one model with another.
    * Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; we don't want duplicates. 
    * Don't just clear out your database and populate it with scraped articles whenever a user accesses your site. 
    * If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

### Hosting on Heroku

    Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database. 

- Please see [Heroku’s Account Verification Information] for more details:
    https://devcenter.heroku.com/articles/account-verification


### Helpful Links

- [MongoDB Documentation]
    https://docs.mongodb.com/manual/

- [Mongoose Documentation]
    http://mongoosejs.com/docs/api.html

- [Cheerio Documentation]
    https://github.com/cheeriojs/cheerio