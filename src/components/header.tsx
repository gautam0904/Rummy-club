import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div className="bg-dark sticky-top">
            <nav className="container bg-dark d-flex align-items-center text-white">
                <img className="img-fluid me-2 navimg" src="/logo.svg" alt="Logo" />
                <h1>Rummy Club</h1>

                <a
                    href="https://teenpattigames.xyz/teen-patti-master-download/"
                    className="downloadButton ms-2"
                >
                    Download 
                    <FontAwesomeIcon className='ms-3' icon={faDownload} />
                </a>
            </nav>
        </div>
    );
};

export default Header;