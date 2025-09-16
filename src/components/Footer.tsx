const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            {/* <img src="/logo 2 black.png" alt="Logo" className="h-6 w-auto" /> */}
            <span className="text-sm text-muted-foreground">
              © 2025 Seed to Scale. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Powered by</span>
            <a
              href="https://aexaware.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/ae-logo.png"
                alt="Powered by Logo"
                className="h-4 w-auto"
              />
            </a>
            {/* <span>Aexawareinfotech-Pvt-Ltd</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
