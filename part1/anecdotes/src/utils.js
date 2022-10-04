const randomDot = (max) => {
    return Math.floor(Math.random() * (max))
}

const setToValue = (func, newValue) => () => {
    func(newValue)
}

export { randomDot, setToValue }