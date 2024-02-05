import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 z-50">
      <div className="flex justify-between items-center h-20 max-w-5xl mx-auto">
        <NavLink to="/">
          <img className="h-12 ml-10 scale-10" src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="Logo" />
        </NavLink>

        <div className="flex gap-8 mr-9 font-medium text-slate-100">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
