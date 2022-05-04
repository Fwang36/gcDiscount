import './CategoryListItem.scss'

export default function CategoryListItem(props) {

  return (
    <article>
      <div className='category-image-container'>
        <img src={props.image} />
      </div>
      <h4>{props.name}</h4>
    </article>
  )
}