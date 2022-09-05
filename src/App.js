import "./App.css";
import Container from "./containers/Container";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <div className="App">
      {/* <Container /> */}
      {/* <Home /> */}
      {/* <Navigation /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Container />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="customers">
              <Route index element={<List />} />
              <Route path=":customerId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
