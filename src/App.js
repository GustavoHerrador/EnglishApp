import MyRoutes from "./Routes/MyRoutes";
import "antd/dist/antd.css";
import "././App.css";
import { Footer } from "antd/lib/layout/layout";

function App() {
  return (
    <div className="container">
      <MyRoutes />
      <Footer> Copyright 2022 by Gustavo Herrador</Footer>
    </div>
  );
}

export default App;
