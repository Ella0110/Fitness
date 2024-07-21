export default function Footer() {
  return (
    <>
      <footer className="inset-x-0 bottom-0">
        <div className="flex items-centers mx-4 grid grid-cols-1 justify-between gap-4 mt-6 border-t border-slate-900/15  py-6 md:grid-cols-2">
          <p className="text-sm/6 text-white-900 max-md:text-center">
            © 2024 Tailwind Labs Inc. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white-900 text-sm/6 font-semibold md:justify-end">
            <a href="/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <a href="#">Changelog</a>
          </div>
        </div>
      </footer>
    </>
  );
}