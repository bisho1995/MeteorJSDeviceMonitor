import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
 
import App from './ui/App';
import store from './ui/store/index';

Meteor.startup(() => { 
  render(
    <BrowserRouter>
      <Provider store={store} >
      <App /></Provider>
    </BrowserRouter>, document.getElementById('render-target'));
});