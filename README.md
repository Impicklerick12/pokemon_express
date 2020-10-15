# Pokemon Express App + Testing with Jest/Supertest

If you're not a Pokemon fan, you can totally replace the Pokemon stuff with another API. The data must come from an API though!Eg. a Kitten API should be able to tell you the name of the cat breed & provide an image of it.

Combine today's content with some previous challenges!

* Create an Express app with CRUD routes such as:

    * POST '/pokemon/create'

        * Use node-fetch to get a Pokemon from the PokeAPI

        * Save the Pokemon's name, types, and image into an object

        * Save that object to either a file (using fs to persist data after server stops & starts) or store it in an array (data won't persist between server stops & starts)

        * return your choice of either:

            * redirecting to the "showAll" route after saving the Pokemon object

            * returning a "success" message after saving the Pokemon object

    * GET '/pokemon/showAll'

        * return an object of all saved Pokemon

        * Optional: return a HTML file that uses Express Handlebars to show your dynamic data as a webpage

    * GET '/pokemon/show/:entryID'

        * return an object of a specific Pokemon, based on an ID or array index position

        * this may mean that you have to add an "ID" property to your data when saving it to a file

        * Optional: return a HTML file that uses Express Handlebars to show your dynamic data as a webpage

    * GET '/pokemon/edit/:entryID'

        * This might be a tricky one! Leave til last if it's taking too much time.

        * Show a HTML file that uses Express Handlebars to populate a form with data about a specific Pokemon

        * The form should be able to call the POST version of this route on submit

    * POST '/pokemon/edit/:entryID'

        * Use the posted data to update the specified entry 

        * return your choice of either:

            * redirecting to the GET version of this route after saving the Pokemon object

            * returning to the "/show/:entryID" route of the Pokemon you just edited after saving the Pokemon object

    * '/pokemon/delete/:entryID'

        * Delete the specified Pokemon from your file / array 

        * Redirect to the "/showAll" route

* Write tests for each of the routes that you've written

    * eg. make sure that when you delete an entry from your file / array, that the entry is no longer in that file / array

    * eg. make sure that when you create a Pokemon, that should be saved into the file / array

    * eg. when you visit the "showAll" page, it has a HTTP status code of 200

* Make sure your tests work on Github Actions

    * Revisit the JS testing content for the specific fixes & process on that!