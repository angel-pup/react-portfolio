const Nav = ({ currentPage, setCurrentPage }) => {
    const modContent = (target) => {
        document.querySelector(`#nav-${target}`).classList.add('is-active');
        document.querySelector(`#nav-${currentPage}`).classList.remove('is-active');
        setCurrentPage(target);
    }

    return (
        <div>
            <nav class="navbar is-info has-text-white" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <p class="navbar-item has-text-black">
                        Vess {currentPage}
                    </p>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navBarElements" class="navbar-menu">
                    <div class="navbar-end">
                        <a id="nav-AboutMe" class="navbar-item is-active" onClick={() => modContent('AboutMe')}>
                            About Me
                        </a>

                        <a id="nav-Portfolio" class="navbar-item" onClick={() => modContent('Portfolio')}>
                            Portfolio
                        </a>

                        <a id="nav-Resume" class="navbar-item" onClick={() => modContent('Resume')}>
                            Resume
                        </a>

                        <a id="nav-Contact" class="navbar-item" onClick={() => modContent('Contact')}>
                            Contact
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Nav;