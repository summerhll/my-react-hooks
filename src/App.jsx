// React 应用中的 App.js 文件

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Index from './pages/index' // 首页

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
               <Route path="/" exact component={(props)=>(<Index {...props}/>)} /> 
                {/* <Route path="*" component={base.notfound} /> */}
            </BrowserRouter>
        );
    }
}

export default App;
