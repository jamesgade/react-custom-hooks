import { useState } from 'react'
import useValueLogger from './useValueLogger'

const UseValueLoggerExample = () => {
    const [text, setText] = useState('')

    useValueLogger(text);

    return (
        <div>
            <h3>useValueLogger - logs a value when it changes</h3>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </div>
    )
}

export default UseValueLoggerExample
