import { setToValue } from './utils'

const Button = (props) => {

    return(
        <button class='btn' onClick={setToValue(props.func, props.value + 1)}>
        {props.name}

        </button>
    )
}

export { Button }