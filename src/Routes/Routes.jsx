import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Index from '../pages/index';
import Todo from '../pages/Todo';


export default function Routes() {
  return (
    <ReactRoutes>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/" element={<Index />}/>
    </ReactRoutes>
  )
}
