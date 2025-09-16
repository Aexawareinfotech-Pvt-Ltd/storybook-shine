import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src="/logo 2 black.png" alt="Logo" className="h-8 w-auto" /> */}
          <span className="text-xl font-bold text-foreground">
            Seed to Scale
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
