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
                    <li>βΎοΈ  β</li>
                    <li>πΎ  β</li>
                    <li>π  β</li>
                    <li>β½οΈ  β</li>
                </ul>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default ParkListItem;