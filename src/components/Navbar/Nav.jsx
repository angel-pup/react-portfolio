import React from "react";

const Nav = ({ currentPage, setCurrentPage }) => {
    const modContent = (target) => {
        const lastPage = document.querySelector(`#nav-${currentPage}`);
        const targetPage = document.querySelector(`#nav-${target}`);
        if(targetPage) 
            targetPage.classList.add('is-active');
        if(lastPage)
            lastPage.classList.remove('is-active');
        setCurrentPage(target);
    }

    const [isActive, setIsActive] = React.useState(false);

    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item has-text-black">
                        Vess {currentPage}
                    </p>

                    <a
                        role="button"
                        className={`navbar-burger burger ${isActive ? 'is-active': ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navBarElements"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navBarElements" className={`navbar-menu ${isActive ? 'is-active': ""}`}>
                    <div className="navbar-end">
                        <a id="nav-AboutMe" className="navbar-item has-text-black is-active" onClick={() => modContent('AboutMe')}>
                            About Me
                        </a>
                        <a id="nav-Portfolio" className="navbar-item has-text-black" onClick={() => modContent('Portfolio')}>
                            Portfolio
                        </a>

                        <a id="nav-Resume" className="navbar-item has-text-black" onClick={() => modContent('Resume')}>
                            Resume
                        </a>

                        <a id="nav-Contact" className="navbar-item has-text-black" onClick={() => modContent('Contact')}>
                            Contact
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Nav;