import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter >
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
