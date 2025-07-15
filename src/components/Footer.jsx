import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-900 py-4 px-6 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 dark:text-gray-300 space-y-2 md:space-y-0">
        
        {/* Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Deepanshu Jain. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-5">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/putin1/"
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5V5c0-2.761-2.239-5-5-5zM8 19H5v-9h3v9zm-1.5-10.25c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75S8.25 6.034 8.25 7s-.784 1.75-1.75 1.75zM20 19h-3v-4.5c0-1.07-.86-1.93-1.93-1.93s-1.93.86-1.93 1.93V19h-3v-9h3v1.23C13.56 10.47 14.46 10 15.4 10c1.69 0 3.07 1.38 3.07 3.07V19z" />
            </svg>
          </a>

          {/* Email */}
          <a 
            href="mailto:Itipusacopa@gmail.com" 
            aria-label="Email"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
              <path d="M22 6 12 13 2 6" />
            </svg>
          </a>
        </div>

        {/* Attribution */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Developed by <a href="https://Deepanshu530.github.io/Portfolio_Deepanshu_Jain.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">Deepanshu jain</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
