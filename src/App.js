import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import {
  Route,
  Routes,
  BrowserRouter
}
  from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Transaction from "./pages/transaction/Transaction";



function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>

          {/* Quick Menu */}
          <Route path="/user" element={<UserList />}> </Route>
          <Route path="/user/:userId" element={<User />}> </Route>
          <Route path="/newUser" element={<NewUser />}> </Route>
          <Route path="/products" element={<ProductList />}> </Route>
          <Route path="/product/:productId" element={<Product />}> </Route>
          <Route path="/newProduct" element={<NewProduct />}> </Route>
          <Route path="/transaction" element={<Transaction />}> </Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

