## Running the app

```
yarn install
yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries used
- **axios**: for data fetching. Could be fetch api, but axios gives more flexibility
- **reselect**: for keeping logic in selectors
- **lodash**: mainly for used lodash/fp which allowed to have pipes in selectors
- **redux-saga**: middleware for handling requests and requests' logic
- **node-sass**: for using scss preprocessor

## Notes
- app created by `create-react-app`
- `.env` file added for allowing app to use absolute paths, instead of relative (by adding `NODE_PATH=./` line to it)
- I didn't implement separation with presentational and functional components, since it's small app
- I used some pretty heavy libraries (reselect, axios, lodash, redux-saga) so that application could be easily scaled
- No error handling (didn't have enough time)
- no search functionality (didn't have enough time)
