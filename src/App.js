import StyleProvider from "./styles";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from './pages/Main';
import SearchPage from "./pages/Search";
import SignupPage from './pages/Signup';
import Community from './pages/Community';
import CreateMatch from "./pages/CreateMatch";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/user/signup" element={<SignupPage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/match" element={<CreateMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
