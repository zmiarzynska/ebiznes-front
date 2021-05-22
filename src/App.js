import './App.css';
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";

function App() {
    return (
        <>
            <div className="categories">
                <Categories/>
            </div>
            <div className="products">
                <Items/>
            </div>
        </>
    );
}

export default App;
