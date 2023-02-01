import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import DynamicPage from '../pages/DynamicPage';

import Index from '../pages/index';
import Todo from '../pages/Todo';


export default function Routes() {
  return (
    <ReactRoutes>
        <Route path="/" element={<Index />}/>
        <Route exact path="/todo" element={<Todo />}/>
        <Route exact path="/todo/:id" element={<DynamicPage />}/>
    </ReactRoutes>
  )
}
