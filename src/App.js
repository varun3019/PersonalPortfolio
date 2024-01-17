import Main from "./Components/Main";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './auth/SignUp'
import SignIn from "./auth/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SignUp/>}/>
    <Route path="/signin" element = {<SignIn/>}/>
    <Route path="/portfolio" element = {<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
