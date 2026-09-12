
import Logo from '../assets/logo-text.png'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">

                <img src= {Logo} alt="" />
             
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}