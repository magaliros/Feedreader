/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* Thanks to Lloan Alas for the walkthrogh
 * https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the allFeeds variable 
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each feed has a url and is not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
         });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('each feed has a name and is not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
         });
    });


    /* Test suite named "The menu" */

    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('is displayed on click and hidden on click again', function() {
            $('.menu-icon-link').click();
            expect($("body").hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($("body").hasClass('menu-hidden')).toBe(true);
          });
     });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(done => {
            //Load the first feed
            loadFeed(0, done);
         });

         it('has at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });

     });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let feedOne,
            feedTwo;

        beforeEach(done => {
            //Load the first feed
            loadFeed(0, function() {
                feedOne = $('.feed').html();

                //Load the second feed
                loadFeed(1, function() {
                feedTwo = $('.feed').html();
                done();
                });
            });
        });

        it('changes when a new feed is loaded', function() {
            expect(feedOne === feedTwo).toBe(false);
        });

     });
    
});
