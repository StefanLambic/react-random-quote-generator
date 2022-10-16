import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");

  const quoteApi = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
      setQuote(arrayOfQuotes.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteApi();
  }, []);

  return (
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quoteButton">
            <button className="button" onClick={quoteApi}>
              GET QUOTE
            </button>
          </div>
          <div className="quote">
            <q>{quote}</q>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
