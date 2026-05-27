import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, className = '' }) {
  return (
    <div className={`min-h-screen flex flex-col bg-cream ${className}`}>
      <Navbar />
      <main className="flex-1 page-wrapper">{children}</main>
      <Footer />
    </div>
  );
}
