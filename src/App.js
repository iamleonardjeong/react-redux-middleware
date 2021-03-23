import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';

function App() {
  return <SampleContainer />;
}

export default App;

function* watchGenerator() {
  console.log('모니터링 중...');
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log('이전 액션: ', prevAction);
    prevAction = action;
    if (action.type === 'HELLO') {
      console.log('안녕하세요');
    }
  }
}

const watch = watchGenerator();
