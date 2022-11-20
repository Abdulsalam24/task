import { useEffect, useState } from "react";


const Timer = () => {

    const [input, setInput] = useState('')
    const [timer, setTimer] = useState(5)

    let timeout

    useEffect(() => {
        timeout = setTimeout(() => {
            if (timer > 0) {
                setTimer((c) => c - 1)
            } else if (timer < 0) {
                setTimer((c) => ++c)
            } else if (timer === 0) {
                setTimer(0)
            }
        }, 1000)
        return () => {
            clearInterval(timeout)
        }
    }, [timer])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handlePlay = () => {
        if (input !== "") {
            setTimer(input)
        }
    }

    const handlePause = () => {
        clearInterval(timeout)
    }

    const handleResume = () => {
        setTimeout(() => {
            if (timer > 0) {
                setTimer((c) => c - 1)
            } else if (timer < 0) {
                setTimer((c) => ++c)
            } else if (timer === 0) {
                setTimer(0)
            }
        }, 1000)
    }

    const handleReset = () => {
        setTimer(0)
        setInput("")
    }

    return (
        <div className="App-header">  
            <p> Timer : {timer}</p>
            <input type="number" value={input} placeholder='user input' onChange={handleChange} />
            <div>
                <button onClick={handlePlay}>play</button>
                <button onClick={handlePause}>pause</button>
                <button onClick={handleResume}>resume</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    )
}

export default Timer