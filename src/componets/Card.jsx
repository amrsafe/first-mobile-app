import styles from './Main.module.css' ;

 const Card = ({name , age, ...rest}) => {
  const {userList , delbtn} =styles
  return (
    
<div className={userList}>
    <ul>
        <li><span>name:</span>
        {name}
        </li>
        <li><span>age:</span>
        {age}</li>
        <li><span>country:</span>
        {rest.country}</li>
    </ul>
    <div className={delbtn}>x</div>
</div>
  )
}
export default Card ;