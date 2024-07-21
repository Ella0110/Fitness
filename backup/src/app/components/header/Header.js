export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 bg-white supports-backdrop-blur:bg-white/95 backdrop-blur transition-colors z-20 top-0">
        <nav className="flex items-center justify-between border-b border-slate-900/15 border-gray-400 lg:gap-x-12 p-6 lg:px-8" aria-label="Global">
            <h1 className="text-3xl font-bold">Wiki</h1>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold text-white-900">Product</a>
              <a href="#" className="text-sm font-semibold text-white-900">Marketplace</a>
              <a href="#" className="text-sm font-semibold text-white-900">Company</a>
              <a href="#" className="text-sm font-semibold text-white-900">Features</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold text-white-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
      </header>
    </>
  );
}
