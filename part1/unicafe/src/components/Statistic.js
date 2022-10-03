const Statistic = (props) => {
    return(


        <tr class='table-row'>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>


    )
}

export { Statistic }