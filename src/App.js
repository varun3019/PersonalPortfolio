import Main from "./Components/Main";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './auth/SignUp'
import ForgotPass from "./auth/ForgotPass";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SignUp/>}/>
    <Route path="/portfolio" element = {<Main/>}/>
    <Route path="/reset" element ={<ForgotPass/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
