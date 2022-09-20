// import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: 89000 },
    { name: 'Phone', price: 75000 },
    { name: 'Tablet', price: 23000 },
    { name: 'Watch', price: 1500 }
  ];
  return (
    < div className="App" >
      {
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }
    </div >
  );
}

function Products(props) {
  return (
    <div className='products'>
      <h3>Product Name: {props.name}</h3>
      <p>Product Price: {props.price}</p>
    </div>
  );
}

export default App;
