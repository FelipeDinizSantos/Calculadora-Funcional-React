export default function Button(props)
{
    if(props.label === '=') return <button className='button equal' onClick={props.onClick}>{props.label}</button>

    if(props.label === '+' || props.label === '-' || props.label === '*' || props.label === '/' || props.label === 'C' || props.label === '(' || props.label ===')') return <button className='button operator' onClick={props.onClick}>{props.label}</button>

    return <button className='button' onClick={props.onClick}>{props.label}</button>
}