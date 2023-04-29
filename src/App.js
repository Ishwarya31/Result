import Admin from "./Login/Admin_login"
import User from "./Login/User_login";
 import Home from "./component/Home";
import Sem from "./component/Sem";
import StudentInfo from "./component/StudentInfo";
import Aenter from "./component/Aenter";
import View from "./component/View";

import {BrowserRouter as Router,Route,Switch  } from 'react-router-dom';

export default function App(){
    return(
        <>
              <Router>
        
            <div className="container">
       
          <Switch >
      
                <Route path="/"   exact  component={Home}></Route>
                <Route path="/user"   exact  component={User}></Route>
                <Route path="/admin"  component={Admin}></Route>
                <Route path="/sinfo"  component={StudentInfo}></Route>
                <Route path="/sem"  component={Sem}></Route>
                <Route path="/aenter"  component={Aenter}></Route>
                <Route path="/view"  component={View}></Route>
          </Switch>
               

            </div>
        
       
      </Router>

        </>
    )
}