import { useState } from "react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="px-1.6 py-3.2">
        <div className="flex justify-between items-center relative">
          <img src="logo.svg" alt="logo" />
          <svg
            className="fill-gray cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="1.8rem"
            viewBox="0 0 448 512"
            onClick={handleOpenMenu}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-full flex-col gap-3.2 bg-dark-violet absolute bottom-[-370px] left-[0px] px-2.4 py-3.2 rounded-lg text-1.8 text-[#fff] font-bold`}
          >
            <ul className="flex flex-col gap-2.4 items-center">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <hr className="w-full text-grayish-violet" />
            <div className="flex flex-col gap-2.4">
              <button className="text-[#fff]">Login</button>
              <button className="bg-cyan text-[#fff] rounded-full py-0.8">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
