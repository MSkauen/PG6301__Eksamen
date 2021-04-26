Setting up a react application:

1. `npm init`
2. `npm install -D parcel@1.12.3` 
3. Add Scripts start `parcel scr/client/index.html`
4. Add index.html
5. `npm start` => http://localhost:3000
6. Add index.jsx and reference from index.html
7. `npm install -P react react-dom`
8. Restart `npm start`
9. Add `ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))`


The React application should now be running.

## Troubleshooting

* Check parcel version
* restart parcel (npm start)
* Delete .cache directory
* Run `npm install` - perhaps also delete `node_modules` directory

## Issues
* While using TestRenderer.Act and .Create for testing and results in ``Error: Can't access .root on unmounted test renderer``
* A workaround for this was using the old try/catch you see in _ApplistMessages.jsx_ instead of ``` setMessages(await messageApi.listMessages()); ``` which is not optimal
* Issue was recreated using a clone from working lecture.