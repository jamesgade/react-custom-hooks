import UseEventListenerExample from "./custom-hooks/useEventListener"
import UseFetchExample from "./custom-hooks/useFetch"
import UseLocalStorageExample from "./custom-hooks/useLocalStorage"
import UseValueLoggerExample from "./custom-hooks/useValueLogger"

const App = () => {
  return (
    <div>
      <h1>Custom Hooks</h1>
      <UseLocalStorageExample />
      <UseValueLoggerExample />
      <UseFetchExample />
      <UseEventListenerExample />
    </div>
  )
}

export default App
