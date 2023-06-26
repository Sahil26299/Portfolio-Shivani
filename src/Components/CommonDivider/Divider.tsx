import './DividerStyles.scss'

export default function Divider(props:any) {
  return (
    <div className='DividerWrapper' style={props.WrapperStyle} >
        <span>- x -  - - x - - x</span>
    </div>
  )
}
