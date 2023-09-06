import { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import { geoOptions, GEO_API_URL } from '../api';

const Search = ({onSearchChange, onClickingEnter}) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}?minPopulation=10000&namePrefix=${inputValue}`, geoOptions)
               .then(
                (response) => response.json()
               ).then(
                response => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`
                            }
                        })
                    }
                }
               )
    }
    
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const handleOnEnter = (inputValue) => { 
        onClickingEnter(inputValue)
    }

    return (
        <AsyncPaginate 
        className='text-gray-800'
        placeholder = 'Enter Location'
        debounceTimeout={500}
        value={search ? search : ''}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        onKeyDown={
            (event) => {
                if(event.key === 'Enter'){
                    handleOnEnter(event.target.value)
                }
            }
        }
        />
    )
}

export default Search