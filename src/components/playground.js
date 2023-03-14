<div className="md:hidden">
  <button
    type="button"
    className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
    onClick={handleMenuClick}
  >
    <svg
      className="h-6 w-6 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isMenuOpen ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
        />
      )}
    </svg>
  </button>
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          activeClassName="bg-gray-900 text-white"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          activeClassName="bg-gray-900 text-white"
        >
          Profile
        </NavLink>
        {token ? (
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Log out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            Log in
          </NavLink>
        )}
      </div>
    </div>
  )}
</div>
