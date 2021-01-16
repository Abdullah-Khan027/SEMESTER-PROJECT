import React from 'react'
import './App.css';
import {Switch,Route,BrowserRouter as  Router} from 'react-router-dom'
import {Home} from './Components2/Home'
import {Na} from './Components2/Na'
import { Ec } from './Components2/Ec'
import { Women } from './Components2/Women'
import { Men } from './Components2/Men'
import { Bg } from './Components2/Bg'
import { F } from './Components2/F'
import { Makeup } from './Components2/Makeup';
import { Signin } from './Components2/Signin';
import { Signup } from './Components2/Signup';
import { Final } from './Components2/Final';
import { Track } from './Components2/Track';
import { Contact } from './Components2/Contact';
import { Catalogue } from './Components2/Catalogue';
import {Navbar} from './Components/Navbar'
import {Logo1} from './Components/Logo1'
import {Menu} from './Components/Menu'
import {Footer} from './Components/Footer'


function App() {
  return (
   
<Router>

        <Navbar />
        <Logo1 />
        <Menu />
<Switch>

  <Route path="/" exact component={Home} />
  <Route path="/Na" exact component={Na} />
  <Route path="/Ec" exact component={Ec} />
  <Route path="/Women" exact component={Women} />
  <Route path="/Men" exact component={Men} />
  <Route path="/Bg" exact component={Bg} />
  <Route path="/F" exact component={F} />
  <Route path="/Makeup" exact component={Makeup} />
  <Route path="/Signin" exact component={Signin} />
  <Route path="/Signup" exact component={Signup} />
  <Route path="/Final" exact component={Final} />
  <Route path="/Track" exact component={Track} />
  <Route path="/Contact" exact component={Contact} />
  <Route path="/Catalogue" exact component={Catalogue} />
</Switch>
<Footer />
</Router>

  );
}


export default App;
