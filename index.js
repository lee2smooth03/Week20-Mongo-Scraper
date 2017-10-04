/**
 * this file serves as the entry point for the howework assignment;
 * start by downloading the two packages for requesting and scraping:
 *      - cheerio
 *      - request 
 */

var cheerio = require("cheerio");
var request = require("request");

console.log("\nWhat do we have going on here?\nWe're about to scrape a page");

/**
 * first, request the page that we want to scrape
 * the callback function is specified here:
 * https://www.npmjs.com/package/request
 */
// request("https://www.reddit.com/r/webdev", function(error, response, html){
request("http://www.cnn.com/us?refresh=1", function(error, response, html){
    // console.log(html);

    // Load the body of the HTML into cheerio
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var results = [];

    $("span.cd__headline-text").each(function(i, element){
        var title = $(element).text();
        var link = $(element).parent().attr("href");

        results.push({
            title: title,
            link: link
          });
    });

    console.log(results);
});