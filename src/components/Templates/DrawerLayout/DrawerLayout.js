import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from '../../Organism/Sidebar/Sidebar'
import MainContentWrapper from './MainContentWrapper'

const DrawerLayout = (props) => {
  const {
    sidebarTitle = '',
    config = {}
  } = props

  const { items } = config

  return (
    <Router>
      <Sidebar title={sidebarTitle} config={config} />
      <Switch>
        {
          items.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={
                <MainContentWrapper>
                  {route.main ? <route.main /> : <div>{route.name}</div>}
                </MainContentWrapper>
              }
            />
          ))
        }
        <Route
          children={
            <MainContentWrapper>
                  404 Not Found
            </MainContentWrapper>
          }
        />
      </Switch>
    </Router>
  )
}

export default DrawerLayout
