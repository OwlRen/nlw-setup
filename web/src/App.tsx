import { Habit } from "./components/habits";
import "./styles/global.css";

function App() {
   return (
      <div>
         <Habit completed={3} />
         <Habit completed={23} />
         <Habit completed={33} />
      </div>
   );
}

export default App;
