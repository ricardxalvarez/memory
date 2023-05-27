import './App.css';
import Welcome from './pages/welcome';
import Game from './pages/game';
import GameOver from './pages/game_over';
import Congrats from './pages/congrats';
import { useGlobal } from './global';

function App() {
  const { game_state } = useGlobal()
  return (
    <>
    {
      game_state === 'welcome' &&
      <Welcome/>
    }
    {
      game_state === 'game' &&
      <Game/>
    }
    {
      game_state === 'game_over' &&
      <GameOver/>
    }
    {
      game_state === 'congrats' &&
      <Congrats/>
    }
    </>
  );
}



export default App;
