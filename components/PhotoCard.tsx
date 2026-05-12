import Link from 'next/link'

interface PhotoCardProps {
  href: string
  image: string
  icon: string
  name: string
  subtitle: string
  chips?: string[]
}

export default function PhotoCard({ href, image, icon, name, subtitle, chips }: PhotoCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#af5d32]" />
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h3 className="font-serif text-lg text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
            {name}
          </h3>
        </div>
        <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{subtitle}</p>
        {chips && chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-block rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs text-[var(--muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}