import './FeaturedItem.scss'

export default function FeaturedItem(props) {

  return (
    <article className='featured-item-container'>
      <img src={props.image} />
      <h4>{props.name}</h4>
      <div className="featured-item-pricing">
        <span className="was-price">${props.was / 100} </span>
        <span className="now-price">${props.price / 100}</span>
      </div>
    </article>
  )
}