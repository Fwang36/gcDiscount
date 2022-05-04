import './CategoryList.scss'
import CategoryListItem from './CategoryListItem'
export default function CategoryList(props) {

  const categoriesArray = props.state.categories
  const mappedCategories = categoriesArray.map(category => {
    
    return (
      <CategoryListItem 
        key={category.id}
        id={category.id}
        name={category.name}
        image={category.image}
      />
    )
  })
  
  return (
    <section>

      <h3>Browse A Collection</h3>
      <div className="categories-container">

    {mappedCategories}

      </div>

    </section>
  )

}