export default function Screen(props)
{
    return(
        <div className='screen'>
          <span className='operationScreen'>{props.value}</span>
          <span className='resultScreen'>{props.result}</span>
        </div>
      )
}