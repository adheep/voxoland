import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout/Layout"
import Login from './Pages/Login';
import Home from './Pages/Home'
import Marketplace from './Pages/MarketPlace';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Login />} />
          <Route path="" element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      
    </div>
  );
}


export default App;
