import { SyntheticEvent, useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WolfHeadLogo from '../assets/WolfHeadLogo.png';

const Header = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const handleClick = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget)
    }

    return(
        <header className="flex flex-row w-full justify-around items-center bg-gray-100">
            <img 
                src={WolfHeadLogo} 
                alt="Drawing of wolf face with gray hair and yellow eyes" 
                className="h-20 w-20"
            />
            <section className="mt-8">
                <h2 className="text-5xl flex justify-center cursive">Wild Margins</h2>
                <h3 className="text-lg text-gray-600 flex justify-center mb-12">
                    Stories and essays by G. Jeff Golden
                </h3>
            </section>
            <IconButton className="h-12 w-12 p-6px" onClick={handleClick}>
                <MenuIcon fontSize="large" />
            </IconButton>
            <Menu 
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem>Wolf News & Facts</MenuItem>
                <MenuItem>Essays</MenuItem>
                <MenuItem>Short Stories</MenuItem>
            </Menu>
        </header>
    );
};

export default Header;