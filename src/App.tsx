import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'

export function App() {

    return (
    <>
        <Heading attr={123} attr2='string'>
            Pomodoro Timer
        </Heading>
        <p>Welcome to the Pomodoro Timer app!</p>
    </>
    );
}
