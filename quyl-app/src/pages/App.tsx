import React from "react";
import Header from "../components/Header";
import StudentList from "../components/StudentList";

const App: React.FC = () => (
  <div>
    <Header />
    <main className="p-4">
      <StudentList />
    </main>
  </div>
);

export default App;
