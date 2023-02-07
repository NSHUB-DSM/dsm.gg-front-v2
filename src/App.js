import StyleProvider from "./styles";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from './pages/Main';
import SearchPage from "./pages/Search";
import SignupPage from './pages/Signup';
import Community from './pages/Community';
import CreateMatch from "./pages/CreateMatch";
import GameMake from "./pages/CreateMatch/make/game";
import Matching from "./pages/Matching";
import TierLimit from "./pages/CreateMatch/make/tier";
import NotFound from "./notfound";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/user/signup" element={<SignupPage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/match" element={<CreateMatch />}></Route>
          <Route path="/match/create/game" element={<GameMake />}></Route>
          <Route path="/matching" element={<Matching />}></Route>
          <Route path="/match/create/tier" element={<TierLimit />}></Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
