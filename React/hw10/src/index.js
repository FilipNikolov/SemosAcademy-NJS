import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Users } from './components/users';
import { Comments } from './components/comments';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
)