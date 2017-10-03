import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducer from './src/reducers/index'
import config from './config'
import express from 'express'
import App from './src/js/App'

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.get(['/','/list', '/list/:item'], (req, res) => {
  axios.get('https://randomuser.me/api/?results=10')
  .then(resp => {
    let context = {}
    const items = resp.data.results
    let preloadedState = {items}
    const store = createStore(reducer, preloadedState, applyMiddleware(thunk))
    const initialMarkup = renderToString(
      <StaticRouter location={req.url} context={context} ><Provider store={store}><App />
      </Provider></StaticRouter>
    )
    const data = store.getState()
    res.render('index', {
      initialMarkup,
      data
    })
  })
  .catch((err) => console.log(err))
})

server.listen(config.port, config.host, () => {
  console.info(`Express is listening on port ${config.port}`)
})
