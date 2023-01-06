import StyleProvider from "./styles";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./components/Main";
import SearchPage from "./pages/Search";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
