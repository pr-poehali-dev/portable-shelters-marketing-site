import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/components/constants";

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  activeSection: string;
  onMenuToggle: () => void;
  onScrollTo: (id: string) => void;
}

export default function Header({ scrolled, menuOpen, activeSection, onMenuToggle, onScrollTo }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1614]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E8824A] flex items-center justify-center">
            <Icon name="Building2" size={18} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold text-white tracking-widest uppercase">СеверПолимер</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`text-sm font-medium tracking-wider uppercase transition-colors ${activeSection === item.id ? "text-[#E8824A]" : "text-white/70 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:+73462000000"
          className="hidden lg:flex items-center gap-2 bg-[#E8824A] text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase hover:bg-[#D4703A] transition-colors"
        >
          <Icon name="Phone" size={14} />
          +7 (3462) 00-00-00
        </a>

        <button onClick={onMenuToggle} className="lg:hidden text-white">
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1A1614] border-t border-white/10 px-6 py-6">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="block w-full text-left py-3 text-white/80 hover:text-[#E8824A] font-display uppercase tracking-wider text-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+73462000000" className="mt-4 flex items-center gap-2 text-[#E8824A] font-semibold">
            <Icon name="Phone" size={16} />
            +7 (3462) 00-00-00
          </a>
        </div>
      )}
    </header>
  );
}
