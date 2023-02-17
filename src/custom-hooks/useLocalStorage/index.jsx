import useLocalStorage from './useLocalStorage'

const UseLocalStorageExample = () => {
    const [name, setName] = useLocalStorage('name', '')

    return (
        <div>
            <h3>useLocalStorage - get/set an item from/in localStorage</h3>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseLocalStorageExample
