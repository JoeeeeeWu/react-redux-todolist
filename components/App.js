import React from 'react';
import AppTodo from 'containers/AppTodo';
import VisibileTodoList from 'containers/VisibileTodoList';
import Footer from './Footer';

const App = () => (
    <div>
        <AppTodo />
        <VisibileTodoList />
        <Footer />
    </div>
)

export default App;
