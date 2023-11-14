import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import { MyStateProvider } from "./context/MySate";



function App() {
    return (
        <MyStateProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/dashbord" element={<Dashboard />} />
                        <Route path="/*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MyStateProvider>
    );
}

export default App;
