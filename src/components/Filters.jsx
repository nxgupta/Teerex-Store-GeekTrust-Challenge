const Filters = ({ searchedData, filteredData, setFilteredData }) => {
      
      const handleFilterChange=(e)=>{
        if(e.target.checked){
            let filter=[]
            if(e.target.name!=='price'){
            filter=searchedData.filter(product=>product[e.target.name]===e.target.value)
            }
            else{
                if(+e.target.value===250){
                     filter=searchedData.filter(product=>product[e.target.name]<=e.target.value)
                    
                }
                else if(+e.target.value===450){
                     filter=searchedData.filter(product=>product[e.target.name]>=251 && product[e.target.name]<=450)
                }
                else{
                     filter=searchedData.filter(product=>product[e.target.name]>e.target.value)
                }
            }
            setFilteredData([...filteredData,...filter])
        }
        else{
            let filter=[]
            if(e.target.name!=='price'){
                filter=filteredData.filter(product=>product[e.target.name]!==e.target.value)
                setFilteredData(filter)
            }
            else{
                if(+e.target.value===250){
                     filter=filteredData.filter(product=>product[e.target.name]>e.target.value)   
                }
                else if(+e.target.value===450){
                     filter=filteredData.filter(product=>(product[e.target.name]<251 || product[e.target.name]>450))
                }
                else{
                     filter=filteredData.filter(product=>product[e.target.name]<e.target.value)
                }
                setFilteredData(filter)
            }
            
        }
      }
      console.log(filteredData)
    return (
        <div className='filters' onClick={(e) => handleFilterChange(e)}>
            <div className='category'>
                <header>Colour</header>
                <label>
                    <input type='checkbox' name='color' value='Red' />
                    Red
                </label>
                <label>
                    <input type='checkbox' name='color' value='Blue' />
                    Blue
                </label>
                <label>
                    <input type='checkbox' name='color' value='Green' />
                    Green
                </label>
            </div>
            <div className='category'>
                <header>Gender</header>
                <label>
                    <input type='checkbox' name='gender' value='Men' />
                    Men
                </label>
                <label>
                    <input type='checkbox' name='gender' value='Women' />
                    Women
                </label>
            </div>
            <div className='category'>
                <header>Price</header>
                <label>
                    <input type='checkbox' name='price' value='250' />
                    0-Rs250
                </label>
                <label>
                    <input type='checkbox' name='price' value='450' />
                    Rs250-Rs450
                </label>
                <label>
                    <input type='checkbox' name='price' value='451' />
                    Rs450
                </label>
            </div>
            <div className='category'>
                <header>Type</header>
                <label>
                    <input type='checkbox' name='type' value='Polo' />
                    Polo
                </label>
                <label>
                    <input type='checkbox' name='type' value='Hoodie' />
                    Hoodie
                </label>
                <label>
                    <input type='checkbox' name='type' value='Basic' />
                    Basic
                </label>
            </div>
        </div>
    )
}

export default Filters