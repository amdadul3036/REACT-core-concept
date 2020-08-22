import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const product = [{name:"Photoshop",price: "$99.99"},
  {name:"Illustrator",price:"$60.99"}, {name:"PDF reader",price:"$6.99"}
];
  const goods = [{name: "Rice", price: "$10", amount:"5kg"},
                {name: "Dab", price: "$50", amount:"10kg"},
                {name: "Ata", price: "$19", amount:"2kg"},
                {name: "Moyda", price: "$25", amount:"3kg"},
                {name: "Vusi", price: "$5", amount:"1kg"}]
  var identity = {
    name: "Dr. Mahfuj",
    profession: "Singer",
    Title: "He is the Best singer of the world",
  };
  const name = "Mahfuz";
  const style = {
    color: "tomato",
    backgroundColor: "yellow",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We will edit this <code>src/App.js</code> and save to reload.Our main
          work is in this folder.
        </p>
        
        {/* <h2>{3 + 5}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>DHRUBOISH</h1>
        <h1 style={style}>name: {name}</h1>
        <p>
          Identity: {identity.name} {","} {identity.profession} {","}{" "}
          {identity.Title}
        </p>
        <p>Identity: {(identity.name, identity.Title, identity.profession)}</p>
        {/* /Ei vabe dile last er ta print hobe sudhu */}
        {/* <p>My first React APP </p>  */}
        <Person></Person>
        <Person></Person>
        <Person></Person>
        {/* <Wrap></Wrap> */}
        {/* Component always start hobe Upper Case diya. */}
        {/* <Wrap></Wrap>
        <Wrap></Wrap> */}
      <Product name = {product[0].name} price = {product[0].price}></Product>
      <Product name = {product[1].name} price = {product[1].price}></Product>
      <Product name = {product[2].name} price = {product[2].price}></Product>
      {/* <Actor name= "Salman Khan" actress = "Dipika Padukon" follower= "14" ></Actor>
      <Actor name= "Amir Khan" actress = "Oishoria" follower= "12" ></Actor>
      <Actor name= "Tom Cruze" actress = "Cruzi" follower= "25" ></Actor>
      <Actor name= "Dhruboish" actress = "Keu Nai" follower= "100" ></Actor> */}
      </header>
    </div>
  );
}

function Person() {
  return <h1>Name:Dhruboish</h1>;
}


function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px", 
    backgroundColor:"pink",
    color:"black",
    height: "300px",
    width: "500px",
    margin: "20px",
    float:"left"
  }

  return (
    <div style = {productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <button style = {{backgroundColor:"red", borderRadius:"50%", boxShadow:"tomato", height:"50px",width:"50px"}}>Buy Now</button>
    </div>
  )
}
// Function App er bire function decleare korle ta diye component kora jabe.ei person function 42-44 line e.
// function Wrap() {
//   return (
//     <div
//       style={{
//         border: "10px solid red",
//         margin: "10px",
//         padding: "20px",
//         borderRadius: "50%",
//       }}
//     >
//       <p>Love is pain</p>
//       <h3>
//         <b>Still People Love to Fuck</b>
//       </h3>
//     </div>
//   );
//   //  Ekadhik tag use korle ta div ba span diya wrap kore dite hobe component er khetre
  // function Actor(props) {
  //   return <div style = {{border: "20px #456aba solid" , margin:"20px", padding:"50px", color:"red", fontSize:"15px", borderRadius:"20px"}}>
  //     <h1>Actor Name: {props.name}</h1>
  //     <h2>His Actress: {props.actress}</h2>
  // <h3>Facebook Follower: {props.follower} million</h3>
  //   </div>
  // }
 

export default App;
