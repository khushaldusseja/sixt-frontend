import React from "react";
import ReactDOM from "react-dom";
import getRoutes from './routes/routes';
import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css'
import './index.css';
import { LocalizeProvider } from "react-localize-redux";

const history = createBrowserHistory();
const store = configureStore(history);
const routes = getRoutes();


const App = props => (
  <LocalizeProvider>
  <Provider store={store}> 
        {routes}
  </Provider>,
  </LocalizeProvider>
);


ReactDOM.render(
  <div>
    <App />
  </div>, document.getElementById("root")
);

