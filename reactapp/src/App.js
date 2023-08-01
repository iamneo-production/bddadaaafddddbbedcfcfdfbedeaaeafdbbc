import Start from './components/UI/Banner/Start.js';
import "./App.css"
import Result from './components/UI/Banner/Result.js';
import Button from './components/UI/Button/Button.js';
import Quiz from './components/UI/Banner/Quiz.js';
function App() {
  
  return (
    <>
      <div>
      <h1 className="heading1">Quizz App</h1>
      <button onClick={<Start/>}>Start Quiz</button>
      </div>
      <Button TestingInput ="Show Results"></Button>
      <Quiz/>
      
    </>
    
  );
}

export default App;