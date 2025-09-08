function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-white font-heading font-semibold text-lg">Inferra.ai</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <span>&copy; {new Date().getFullYear()} Inferra.ai. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
