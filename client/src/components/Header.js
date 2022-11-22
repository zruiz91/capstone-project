const Header = () => {
    return (
        // <header>
        //     <h1>
        //         PlayBall
        //     </h1>
        //     <button>login</button>
        //     <button>signup</button>


        // </header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <h1>
                    PlayBall
                </h1>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header;