import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  seeAllHref?: string
  seeAllLabel?: string
}

export default function SectionHeader({ title, seeAllHref, seeAllLabel = 'Alle ansehen →' }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1.5 rounded-full bg-[#af5d32]" />
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--foreground)]">{title}</h2>
      </div>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="shrink-0 text-sm font-medium text-[#af5d32] hover:text-[#8f431c] transition-colors"
        >
          {seeAllLabel}
        </Link>
      )}
    </div>
  )
}