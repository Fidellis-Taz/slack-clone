import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const App = () => {
  return (
    <div className="App">
      {/* header */}
      <Header />

      <div className="app__body">
        <Sidebar />
        {/* react router -> main content */}
      </div>
    </div>
  );
};

export default App;
