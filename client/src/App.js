import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Form from "./pages/Form";
import Form1 from "./pages/Form1";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <header className="App-header">My Forms</header>
          <Route exact path="/" component={Form} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/form1" component={Form1} />
        </div>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
