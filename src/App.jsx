// React 应用中的 App.js 文件

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import Index from './pages/index/index' // 首页
import Ticket from './pages/ticket/index' // 首页
import NotFound from './pages/notFound' //资源找不到页面

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route  path="/" exact component={(props)=>(<Index {...props}/>)} />  */}
                    <Route  path="/" exact component={Index} />
                    <Route  path="/ticket" component={Ticket} /> 
                    <Route  component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
