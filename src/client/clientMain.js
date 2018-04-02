import IOClientEngine from './IOClientEngine';
import IOGameEngine from '../common/IOGameEngine';
import '../../assets/sass/main.scss';

// sent to both game engine and client engine
const options = {
    traceLevel: 1000,
    delayInputCount: 8,
    scheduler: 'render-schedule',
    syncOptions: {
        sync: 'extrapolate',
        localObjBending: 0.2,
        remoteObjBending: 0.5
    }
};

// create a client engine and a game engine
const gameEngine = new IOGameEngine(options);
const clientEngine = new IOClientEngine(gameEngine, options);

clientEngine.start();
