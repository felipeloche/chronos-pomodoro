import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
    <>
        <Heading>
            Pomodoro Timer 
            <button>
                <TimerIcon/>
            </button>
        </Heading>
        <p>Welcome to the Pomodoro Timer app!</p>
    </>
    );
}
