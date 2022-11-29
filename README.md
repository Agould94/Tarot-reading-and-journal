This is a basic application designed to allow users to query and view various configurations of Tarot cards. 

Tarot is the ancient art of self-reflection through symbolism. By pulling cards, and reflecting on the symbols within them and their meanings, we come to gain a deeper understanding of our own minds.

Essentially, tarot is a meditative practice aimed and deepening our relationship with symbols, which are traditionally the domain of the "right brain", which we do not often use in a modern context.

By contemplating the ancient symbols on the various cards of the tarot, we enable ourselves to become aware of the symbolism that surrounds us in our daily lives.

Use the Navigation Bar to see different card spreads, contemplate their meanings, and add them to your journal.

This application uses the Open Weather Map API to display to current weather in your location, and some clever javascript courtesy of Jason Sturges (https://github.com/jasonsturges/lunarphase-js) to query the current lunar phase, an important piece of infomation for many tarot readers. 

In the project directory, you can run:

### `npm start`
This Runs the app in the development mode.\
You can then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

You must then run:
### `json-server --watch db.json --port 4000`
This Runs the server in db.json on a seperate port to create CRUD db.json file. db.json contains a single object object with two keys, cards and journal, each contain an array of objects. The cards key points to all the data for all 72 tarot cards. it is read-only. The journal object points to an array of journal entries that are user-created, they are fully CRUD capable and can be accessed through the various functionalities of the application. 

Use the Nav Bar to click around the site, add journal entries to the JSON mock server in db.json/journal, and query cards in the various card spreads. Which are pulled from the mock server in db.json/cards.


Copyright <2022> <ALLEXANDER GOULD>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.