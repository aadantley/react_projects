# Notes from E Shop Build

This is something like an amazon clone.

## Deleting files for a fresh page

delete everything but:

- public
  - index.html
- src
  - App.css
  - App.js
  - index.css
  - index.js
- package-lock.json
- package.json

This is all you need to start a simple react app.

Then go into indx.html and delete all the boilerplate code and change the title of your app.

Then go into app.js and remove all the components to get a blank screen to start with.

Then you're ready to build.

## Building The Header

This header will be similar to the amazon website.

We break the header into smaller components:

- header logo
- header search bar
- header navigation
  - sign in button
  - shop icon
  - basket icon

The header will be one complete component with these sub-components.

We added the emmet setting to vs code to enable using these abbreviations. they make it easy to create div components with the right class name.

To install material ui icons, use installation command is: `npm install @mui/material @emotion/react @emotion/styled`, and then run `npm install @mui/icons-material` to install the icons package.

Then we use the material ui site to search for icons and components. There are icons and components available, so make sure you have the package installed thats being imported for a particular icon or component. There are a lot of them; use the bookmarks.

We want a basket icon, so he searched for that shopping basket, and then you can copy the single line of code provided from the site to add import the icon into your project. There are also props you can use with each image as well.

We also added a store front icon.

Then we have the HTML we want, and then we can move to the CSS.

We did a very similar thing; we created all the content we need to style, then moved the content to another component in a folder structure, and then imported that new component into App.js for display.

_Tip_: as we go through this course, he is giving the CSS pages, but he doesn't necessarily specify the class name of each component every time. So you'll need to go back through each CSS file to make sure your class names match his and that you have all the class names he has in the final file.
