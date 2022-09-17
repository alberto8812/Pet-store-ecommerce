// componente con las funciones de filtrado y ordenamiento

export default function Filter_Sort(){

    function handlePrice(e) {
        dispatch(sortByPrice(e.target.value))
      }

return(

<div>
            <ul className='filters'>
              <li>
                <div>
                  Filter by Age 
                  <select className='select'>
                    <option value='All'>All</option>
                    <option value='Puppy'>Puppy</option>
                    <option value='Young'>Young</option>
                    <option value='Adult'>Adult</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  Filter by Categories
                  <select className='select'>
                    <option value='All'>All</option>
                    <option value='Accesories'>Accesories</option>
                    <option value='Food'>Food</option>
                    <option value='Toys'>Toys</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  Sort by Price
                  <select className='select' onChange={handlePrice}>
                    <option disabled selected >Select</option>
                    <option value='Lower Price'>Lower Price</option>
                    <option value='Higher Price'>Higher Price</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
)
}