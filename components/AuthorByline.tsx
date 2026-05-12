interface AuthorBylineProps {
  updatedDate?: string
  author?: string
}

export default function AuthorByline({ updatedDate, author = 'VisitChina.ch Redaktion' }: AuthorBylineProps) {
  const date = updatedDate || new Date().toLocaleDateString('de-CH', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f1ea] text-sm">✍️</div>
      <div>
        <p className="font-medium text-[var(--foreground)]">{author}</p>
        <p>Zuletzt aktualisiert: {date}</p>
      </div>
    </div>
  )
}