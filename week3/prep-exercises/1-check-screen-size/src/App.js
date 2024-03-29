import {DisplaySize} from './helpers';
import {PersonByWindowSize} from './PersonByWindowSize';
import { useWindowSize } from "@uidotdev/usehooks";
import './App.css';

function App() {
  const { width, height } = useWindowSize()

  return (
      <div>
          <DisplaySize {...{ width, height }} />
          <PersonByWindowSize />
          <p>
              Resizing your window changes the clothes and accessories of the avatar. A
              specific avatar is shown depending whether your window is big, medium, or
              small.
          </p>
      </div>
  )
}

export default App;
