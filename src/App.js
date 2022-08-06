import "./App.css";
import React from "react";
import Header from "./components/Header";
import Form from "./components/ExplorerForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
