import './PostItem.scss'

const PostItem = (props) => {
  return (
    <>
    <div className="postItems">
    <input className='postInput' type="checkbox" />
    <div>{props.categories}</div>
    <div>{props.subcategory}</div>
    <div>{props.brand}</div>
    <div>{props.items}</div>
    <div>{props.cashback}</div>
    </div>
    </>
  )
}
export default PostItem;