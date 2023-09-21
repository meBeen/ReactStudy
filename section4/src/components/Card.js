const Card = (props)=>{
    return (
        <ul id = {props.id}>
            {props.children}
        </ul>
    )
}

export default Card ;