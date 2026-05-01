export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} — Portfólio Digital Acadêmico
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Desenvolvido com React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
