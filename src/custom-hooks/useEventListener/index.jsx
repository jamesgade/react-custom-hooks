import useEventListener from './useEventListener'

const UseEventListenerExampleComponent = ({ show = false, onClose = () => null }) => {

  // Event listener to close dialog on click outside element
  useEventListener('mousedown', event => {
    // Do nothing if the event was already processed
    if (event.defaultPrevented) {
      return;
    }
    // Check if click is outside the dialog
    if (!target?.current?.contains(event.target)) {
      onClose()
    }
  });

  // Renders dailog
  return show ? React.createPortal(<div>...</div>, document.body) : null
}

const UseEventListenerExample = () => {
    return (
        <div>
            <h3>useEventListener</h3>
        </div>
    )
}

export default UseEventListenerExample;
