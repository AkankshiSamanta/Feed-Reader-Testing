/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the name is not empty.
         */
        it('Feed URLs are defined and are not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });

        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined and are not empty', function() {
           for(var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].name).toBeDefined();
               expect(allFeeds[i].name).not.toBe('');
           }
        });
    });

    describe('THE MENU', function() {

        /* Ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Should be hidden', function() {
           var menuHidden = $('body').hasClass('menu-hidden');
           expect(menuHidden).toBe(true);
        });

        /* Test that will change the visibility of the menu icon, when clicked
           It will hide if you click it the second time
         */
        it('Switch or Hide when clicked', function() {
            var menuIcon = $('.menu-icon-link');
              menuIcon.click();
              expect($('body').hasClass("menu-hidden")).toBe(false);

              menuIcon.click();
              expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });




    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
             loadFeed(0, done);
        });

         // Checks whether the feed item located in the article.entry,
         // is actually there or not
        it('There should be atleast one article in the feed container', function() {
             expect($('.feed article.entry').length).toBeGreaterThan(0);
        });
     });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var previousFeed, nextFeed;

        beforeEach(function(done) {
             loadFeed(1, function() {
                 previousFeed = $('.feed').html();
                 done();
             });
        });
         /* Test that ensures when a new feed is loaded by the
          loadFeed function that the content actually changes.
          */
        it('should change the feed content with new feed', function(done) {
             loadFeed(2, function(){
                 nextFeed = $('.feed').html();
                 expect(nextFeed).not.toEqual(previousFeed);
                 done();
             });
        });
  });
}());
