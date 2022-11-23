// import Card from "react-bootstrap/Card";


const ParkListItem = ( { park } ) => {
    return (
        <li>
            <section>
                <h4> { park.name } </h4>
                <p>
                    { park.address }
                </p>
                <h5>Amenities</h5>
                <ul>
                    <li>⚾️  ✅</li>
                    <li>🎾  ❌</li>
                    <li>🏀  ❌</li>
                    <li>⚽️  ✅</li>
                </ul>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default ParkListItem;