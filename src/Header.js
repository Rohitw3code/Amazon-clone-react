import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img alt='amazon' className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className='header__nav'>

                <div className='header__option'>
                    <span className='header_optionLineOne'>
                        Hello Rohit
                    </span>
                    <span className='header_optionLineTwo'>
                        SignIn
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header_optionLineOne'>
                        Return
                    </span>
                    <span className='header_optionLineTwo'>
                        &Orders
                    </span>

                </div>

                <div className='header__option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>

                </div>

                <div className='header__optionBasket'>
                    <ShoppingCartIcon className='header__basketLogo'/>
                    <span className='header__optionLineTwo header__basketCount'>
                        0
                    </span>
                </div>


            </div>


        </div>
    )
}

export default Header