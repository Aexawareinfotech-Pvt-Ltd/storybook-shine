import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (targetId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* <img src="/logo 2 black.png" alt="Logo" className="h-8 w-auto" /> */}
          <span className="text-xl font-bold text-foreground">
            Seed to Scale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </Link>
          <button
            onClick={() => handleLinkClick("author-profile")}
            className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick("book-features")}
            className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => handleLinkClick("reviews")}
            className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
          >
            Reviews
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              className="text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <button
              onClick={() => handleLinkClick("author-profile")}
              className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick("book-features")}
              className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-left py-2"
            >
              Features
            </button>
            <button
              onClick={() => handleLinkClick("reviews")}
              className="text-foreground/70 hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-left py-2"
            >
              Reviews
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
