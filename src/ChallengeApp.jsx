import Player from './components/ChallengeAppComponents/Player';
import TimerChallengeComponent from './components/ChallengeAppComponents/TimerChallengeComponent';

function ChallengeApp() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallengeComponent title="Easy" targetTime={1}/>
        <TimerChallengeComponent title="Not so easy" targetTime={5}/>
        <TimerChallengeComponent title="Somewhat tough" targetTime={10}/>
        <TimerChallengeComponent title="Expert" targetTime={15}/>
      </div>
    </>
  );
}

export default ChallengeApp;
