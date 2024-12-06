import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <span>postboxofchandu@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <span>+91-8125634383</span>
          </div>
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} My Portfolio. All rights reserved by Chandu
        </p>
      </div>
    </footer>
  );
}