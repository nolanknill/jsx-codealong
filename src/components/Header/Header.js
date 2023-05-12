import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__links header__links--left">
                <div className="header__logo">Cohort Directory</div>
            </div>
            <nav className="header__links header__links--right">
                <a href="/">Home</a>
            </nav>
        </header>
    )
}

export default Header;