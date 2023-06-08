# Uber Clone Notes

## Overview

This clone will demonstrate the basics of building a taxi service application.

This will have:

- a home page
- a search page
- a route confirmation page
- maps and directions

This project will be built using react-native cli instead of expo. Using react functional components and hooks.

We'll use react navigation to manage navigation.

Vector icons for icons.

Different google maps and auto-complete functionality.

## Benefits

this will demonstrate how to setup a react native project with new libraries to practice organization.

Will encourage building components.

Will create components that are reusable and scalable. Components that can be shared and are manageable.

Will cover props, state, and navigation within the application.

Learn how to install 3rd party libraries and work with google APIs. Will use react-native maps as the library which uses google maps in the background.

## Needs

- react native environment
- google developer account (enable billing)
- dummy data and icons from their website.

  ***

## Take Aways

- there are some extra configuration steps I did not do for adding fonts and for doing the emulator in iOS and Android.
- I made the app from an expo project instead.
- `npx pod install` installs the iOS pods to work natively in iOS, but I didn't do this.
- To install vector icons, you can import them into your `App.js` with an import statement like `import Icons from react-native-vector-icons/fontAwesome`.
- Note that each react-native component should start with importing `import { View, Text } from "react-native";` so that you use these jsx tags instead of the `div` and other html tags that don't work in react-native.
- He made all the files `.jsx` files which is the convention because they have JSX code (i.e the html tags).
- Just because you write a `styles.jsx` doesn't mean that it will automatically export; remember to write the export statement.

### Home Page Build

based on a dummy map component, a message box, and a `where to` component.

---

## Further Study

- look into how to use react and iOS pods to develop natively within iOS. See if this has an analogous android package.
