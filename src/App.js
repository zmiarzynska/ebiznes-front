import './App.css';
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import Carts from "./components/Carts/Carts";
import Rates from "./components/Rates/Rates";
import MyOrders from "./components/MyOrders/MyOrders";
import Payments from "./components/Payments/Payments";
import Accounts from "./components/Accounts/Accounts";
function App() {
    return (
        <>
            <div className="categories">
                <Categories/>
            </div>
            <div className="products">
                <Items/>
            </div>
            <div className="cart">
                <Carts/>
            </div>
            <div>
                <Rates/>
            </div>
            <div>
                <MyOrders/>
            </div>
            <div>
                <Accounts/>
            </div>
            <div>
                <Payments/>
            </div>
        </>
    );
}

export default App;
