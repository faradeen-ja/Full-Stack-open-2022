import {Part} from './Part'

const Content = (props) =>{

    const parts = (props).parts

    return(
        <div>
            { parts.map(Element => (
                <Part parts={Element.partName} exercises={Element.exercsies} />
            ))}
        </div>
    )
}

export { Content }