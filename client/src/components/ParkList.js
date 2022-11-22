import { useState } from 'react'

import ParkListItem from './ParkListItem'

import parks from "../parks";

const ParkList = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const searchResults = parks.filter(park => {
        return park.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const parkListItems = searchResults.map(park => {
        return <ParkListItem key={park.id} park={park} />
    })

    const handleSearch = (event) => {
        return setSearchQuery(event.target.value)
    }
    return (
        <section>
            <div>
            <h1>
                All Parks
            </h1>
            <button>🏀</button>
            <button>⚽️</button>
            <button>🎾</button>
            <button>⚾️</button>
            </div>
            <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            />
            <ul>{parkListItems}</ul>
        </section>
    )
}

export default ParkList;