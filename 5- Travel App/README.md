# Travel Application

For this 5th project, I build from scratch an app to plan a trip. Given the date and the location, the app will display the following informations:
- 3 images of the place
- the weather forecast for the next 3 days
- the trip start date, end date and duration

The app also allows the user to save the trip in order to have the same information the next time the page is loaded.
The last option is for the user to add comments for his trip - to do lists, recommendations, visa request, ...

## Requirements to use the tool
- Node
- Webpack
- credentials for the following APIs: [geonames](http://www.geonames.org/), [weatherbit](https://www.weatherbit.io/), and [pixabay](https://pixabay.com/)


## Installing the tool
1. Check that Node and npm are installed from the terminal
```
node -v
npm -v
```
2. Clone the repo in your local folder, install loaders and plugins, and open a terminal pointing at this folder
3. Configure the .env file in the root folder with
    - GEONAMES_USER_ID
    - WEATHERBIT_API_KEY
    - PIXABAY_API_KEY


## Using the tool
First build the tool with the terminal
```
npm run build-prod
```
Run it with the terminal
```
npm run start
```
Open your browser at http://localhost:8080/.