# Setup your environment

## Step 1 
setup your project as we do in [Installation and Setup](../introduction/installation.md)


## Step 2
update code in 'src/index.js' as:
```javascript
import React from 'react';
import App from './App';
import {render} from 'dongbao'


render(App)
```
> just as we said in [Hello world](../introduction/helloworld.md) Sample, we use 
```render``` method from ```dongbao``` instead of ```react-dom's```.
Inside the ```render``` method, it actually call the redux's createStore method, pass it
 to redux-react's Provider and set App as the children of Provider. You
 can pass more parameters (like redux middleware) to this method, see API reference.
 
## Step 3
update code in 'src/App.js' as:
```javascript

import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div >
        
      </div>
    );
  }
}

export default App;

```
this just clean the content of App's render