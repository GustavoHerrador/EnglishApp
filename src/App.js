import MyRoutes from "./Routes/MyRoutes";
import "antd/dist/antd.css";
import "././App.css";
import { Footer } from "antd/lib/layout/layout";

function App() {
  return (
    <>
      <div className="container">
        <MyRoutes />
      </div>
      <Footer> Copyright 2022 by Gustavo Herrador</Footer>
    </>
  );
}

export default App;
