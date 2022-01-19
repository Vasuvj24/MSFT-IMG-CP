import './App.css';
import './Components/Menu'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Me from './Components/Me'
import Notification from './Components/Notification'
import Home from './Components/Home'
import Login from './Components/Login'
import { useState } from 'react';
import Signup from './Components/Signup';
import Contactus from './Components/Contactus'
function App() {
  const [LoginIs, setLoginIs] = useState(false);
  const postsData=[{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'},{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'},{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'},{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'},{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'},{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022'}]
  const notification=["he called multiple times and redarded","concall on the way","mayham viwed your profile","start preparing for new event"]
  const events = ["ISRO Challenge","NSO Nationals","Best physics Contenst,Agra"]
  const nameAbout = [{name:"Vasu Vijayvargiya",bio:"NIMS School",place:'Jaipur Rajasthan'},{about:'I am studying student in NIMS School and national level science olypiard winner 2012'}];
  const experience = [{experience:'NSO Winner',company:'National level Olympiard',time:'2012'},{experience:'NMO Winner',company:'National level Olympiard',time:'2014'}];
  const education = [{education:'Shri Guru Tegh Bahadur Academy',class:'8th std'},{education:'Joseph Academy',class:'5th std-8th std'}]
  console.log("LoginIs value at start of app " +LoginIs);
  const admin = {id:"VasuVj24",pass:"123"};
  const receiveData = (obj)=>{
    if(admin.id===obj.userName && admin.pass===obj.pass){return setLoginIs(true);}
    console.log("LoginIs at receive data "+LoginIs);
    return false;
  }
  const handleLogout = ()=>{
      if(LoginIs===true){
      setLoginIs(false);
      }
      console.log(LoginIs);
    console.log("error in LogOut");
  }
  return (
    <div className="header">
    <Router>
      <Switch>
        <Route path='/' exact component={()=><Home loginIs={LoginIs} events={events} handleLogout={handleLogout} postsData={postsData}/>} />
        <Route path='/Notification' component={()=><Notification notification={notification} loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/me' component={()=><Me nameAbout={nameAbout} experience={experience} education={education} loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/login' component={()=><Login LoginIs={LoginIs} handleLogout={handleLogout} receiveData={receiveData}/>}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/contact' component={()=><Contactus loginIs={LoginIs} handleLogout={handleLogout}/>}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
