import {useStore, actions} from './store'
import {useRef} from 'react'


function App() {
  const [state, dispatch] = useStore();
  const {job, jobs} = state;

  const handleAdd = () => {
    dispatch(actions.addJob(job));
    dispatch(actions.setJob(''));
    inputRef.current.focus();
  }

  const inputRef = useRef();

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(actions.setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(actions.deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
