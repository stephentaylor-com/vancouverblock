import { Info, BookOpen } from 'lucide-react';

const VARIANTS = {
  history: {
    icon: BookOpen,
    text: 'Historical notes on this website are based on publicly available heritage resources including the Vancouver Heritage Foundation, the Canadian Register of Historic Places, City of Vancouver archives, and published architectural histories. They are presented for educational purposes and do not represent an official heritage authority.',
  },
  general: {
    icon: Info,
    text: 'Research notes on this website draw on publicly available sources including municipal records, published histories, and archival materials. While care has been taken to ensure accuracy, readers are encouraged to consult primary sources for detailed or authoritative information.',
  },
};

/**
 * SourceNote — editorial note crediting research sources.
 *
 * @param {Object} props
 * @param {'history'|'general'} props.variant
 */
export default function SourceNote({ variant = 'general' }) {
  const config = VARIANTS[variant] || VARIANTS.general;
  const Icon = config.icon;

  return (
    <aside
      className="rounded-lg border-l-2 border-heritage-bronze bg-heritage-archive/50 p-6"
      role="note"
      aria-label="Source information"
    >
      <div className="flex gap-4">
        <div className="shrink-0 pt-0.5">
          <Icon
            size={16}
            className="text-heritage-bronze"
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="eyebrow mb-2">
            {variant === 'history' ? 'Historical Sources' : 'Research Note'}
          </p>
          <p className="text-sm leading-relaxed text-heritage-charcoal/60">
            {config.text}
          </p>
        </div>
      </div>
    </aside>
  );
}
