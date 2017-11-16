## TV Show Explorer

Webapp deployed [here](http://ivywong.me/tvshow-explorer/).

Data taken from the [TVmaze API](http://www.tvmaze.com/api).

### Design Principles

For this app, I made sure that there was an obvious text size hierarchy,
with the app title the largest, the show titles second-largest, and so on.
I also made sure all the important information, like the genres and the 
website links, is highlighted by a color. This way it is easy to skim the 
page even though there is a lot of information.

I also made sure that the colors fit well with each other, so that text
contrasts with the background and is therefore legible despite how some 
of the text is pretty small.

The app is also fairly responsive, in that the width changes depending on
the screen size to use the space more efficiently, and the search bar changes
as well so it isn't cut off in smaller screens.

For the input fields, I made sure it is easy to tell which field corresponds
to what. For example, the dropdowns all have a label next to the currently set
value, so switching between sorts or filters won't make it harder to tell which
one corresponds to sorting, show status, etc. As for the search bar, I added some
placeholder text that lets the user know what they can search for (title and genre).

Since the show listings contain images and summaries, not many shows can fit on the
screen at once. To mitigate this, I added a count for the number of search/filter results
so the user can tell if the results changed even if the changes are off screen, and so
they have an idea of how much they can scroll through.

### Data and Components

This app has three components: `ShowList`, `FilteredList`, and `ShowCard`. 

`ShowList` is a simple container that takes in a list of items and renders them using `ShowCards`.

`ShowCards` take in information about a single show and displays them as cards.

`FilteredList` takes in user input and uses that to filter and sort the list of shows 
to display before passing it to `ShowList`.

My app loads JSON data containing several shows in `App.js` and extracts the list of unique list
of networks from the data before passing both to `FilteredList`.

### User Interaction

This app loads in show data from TVmaze and displays it nicely in a list. The user can
filter and sort this data with the following:

**Sort**: Name (A-Z), Name (Z-A), Lowest Rated, Highest Rated

**Filter**: by show status (i.e. whether it is still airing or not) and show network (e.g. HBO).

**Search**: The user can type in a search query, which checks both the show titles and the show genres. For example, you can search for comedy shows by typing in "comedy". 

### Summary

This app can help users find TV shows they might be interested in watching by making it easy to sort, filter, and search by rating, show status, and genre.
