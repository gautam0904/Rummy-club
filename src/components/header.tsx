import React from 'react';

const Header = () => {

    return (
        <div className="bg-dark sticky-top">
            <nav className="container bg-dark d-flex align-items-center text-white">
                <img className='img-fluid me-2 navimg'  src="public/logo.svg" alt="" />

                <h1>Rummy Club</h1>

                <a
                    href="https://teenpattigames.xyz/teen-patti-master-download/"
                    className="downloadButton ms-2"
                >
                    Download
                </a>
            </nav>
        </div>
    );
};

export default Header;