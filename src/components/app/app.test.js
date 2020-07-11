import React from 'react'
import renderer from 'react-test-renderer'
import App from './app'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducers";

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

/*

Присутствует тестирование снэпшота для главной страницы, тест написан корректно и благодаря этому нам не нужно тратить
много времени на тестирование, ведь если snapshot не совпадает то это значит, что мы получим ошибку при сравнении snapshots.
Однако для других компонентов и роутов приложения тесты отсутствуют - необходимо тестировать остальные компоненты и роуты.

Следует также использовать "сквозные" тесты, которые полезны при тестировании длинных последовательностей 
действий
*/
it('renders without crashing', () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
})
