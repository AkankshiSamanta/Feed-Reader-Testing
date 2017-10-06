#####Start:
* Open Index.html. There two parts to the screen. The upper part is the functionality of the app
and the lower part displays the results of the tests which will automatically run when the page loads.

* The test specs are all written in the feedreader.js file which is located in the jasmine/spec/ folder.

* If one or more of the tests fail the overall color of the page will be red.

* Any tests that passed are green in color.


######Tests Performed:

* A test that loops through each feed in the allFeeds object and ensures it has a URL defined
and that the URL is not empty.

* A test that loops through each feed in the allFeeds object and ensures it has a name defined
and that the name is not empty.

* A test that ensures the menu element is hidden by default.

* A test that ensures the menu changes visibility when the menu icon is clicked.

* A test that ensures when the loadFeed function is called and completes its work, there is at least
a single .entry element within the .feed container.

* A test that ensures when a new feed is loaded by the loadFeed function that the content
actually changes.
