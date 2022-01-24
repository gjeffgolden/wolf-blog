import { SyntheticEvent, useState } from "react"

import { Link } from "react-router-dom"

import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import WolfHeadLogo from "../assets/WolfHeadLogo.png"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseModal = () => setAnchorEl(null)

  return (
    <header className="flex flex-row w-full justify-around items-center bg-green-100">
      <Link to="/">
        <img
          src={WolfHeadLogo}
          alt="Drawing of wolf face with gray hair and yellow eyes"
          className="h-20 w-20"
        />
      </Link>
      <section className="mt-8">
        <h2 className="text-5xl flex justify-center paragraph">Wild Margins</h2>
        <h3 className="text-2xl text-gray-600 cursive flex justify-center mb-12">
                    Stories and essays
        </h3>
      </section>
      <IconButton className="h-12 w-12 p-6px" onClick={handleClick}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        className="mt-12"
        open={!!anchorEl}
        onClose={() => handleCloseModal()}
      >
        <Link to="/" onClick={() => handleCloseModal()}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/wolf-news" onClick={() => handleCloseModal()}>
          <MenuItem>Wolf News & Facts</MenuItem>
        </Link>
        <Link to="/essays" onClick={() => handleCloseModal()}>
          <MenuItem>Essays</MenuItem>
        </Link>
        <Link to="/short-stories" onClick={() => handleCloseModal()}>
          <MenuItem>Short Stories</MenuItem>
        </Link>
        <Link to="/about-the-author" onClick={() => handleCloseModal()}>
          <MenuItem>About the Author</MenuItem>
        </Link>
      </Menu>
    </header>
  )
}

export default Header
