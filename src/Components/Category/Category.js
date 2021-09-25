import React from 'react';
import './Category.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLaptop, faCamera, faMobile, faToolbox, faHamburger, faAppleAlt, faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    return (
        <div>
            <h3> <FontAwesomeIcon icon={faBars} /> Product Categories</h3>
            <hr />
            <ul className="product-category">
                <li><FontAwesomeIcon icon={faLaptop} />  </li>
                <li><FontAwesomeIcon icon={faCamera} /></li>
                <li><FontAwesomeIcon icon={faToolbox} />  </li>
                <li><FontAwesomeIcon icon={faMobile} /> </li>
                <li><FontAwesomeIcon icon={faHamburger} /> </li>
                <li><FontAwesomeIcon icon={faAppleAlt} /> </li>
                <li><FontAwesomeIcon icon={faBook} /> </li>
                <li><FontAwesomeIcon icon={faBriefcase} /> </li>
                {/* <li><FontAwesomeIcon icon={faLaptop} /> <span>Laptop</span> </li>
                <li><FontAwesomeIcon icon={faCamera} /> <span>Camera</span></li>
                <li><FontAwesomeIcon icon={faToolbox} /> <span>Tool Box</span>  </li>
                <li><FontAwesomeIcon icon={faMobile} /> <span>Mobile</span> </li> */}
            </ul>
        </div>
    );
};

export default Category;