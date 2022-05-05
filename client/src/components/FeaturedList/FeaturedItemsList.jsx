import './FeaturedItemsList.scss'
import FeaturedItem from './FeaturedItem'

export default function FeaturedItemsList(props) {


  const featureItemsArray = props.state.features
  const mappedFeatures = featureItemsArray.map(item => {

    return (

      <FeaturedItem 
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        sku={item.sku}
        price={item.price}
        was={item.was}
      />
    )
  })
  return (
    <section>
      <h3>Featured Specials</h3>
      <div className='featured-items-container'>

      {mappedFeatures}

      </div>
    </section>
  )
}