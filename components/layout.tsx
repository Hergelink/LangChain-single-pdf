interface LayoutProps {
  children?: React.ReactNode;
}
import Link from 'next/link';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <Link href="/" className="hover:text-slate-600 cursor-pointer">
              Home
            </Link>
            <Link href="/faq" className="p-2 hover:text-slate-600 cursor-pointer">FAQ</Link>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
