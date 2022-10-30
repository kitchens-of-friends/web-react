import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./page/MainPage";
import FriendsListPage from "./page/FriendsListPage";
import BookingPage from "./page/BookingPage";
import OrdersPage from "./page/OrdersPage";
import AboutPage from "./page/AboutPage";

import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  return (
    <div className="max-w-6xl ml-auto mr-auto">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="friends" element={<FriendsListPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
