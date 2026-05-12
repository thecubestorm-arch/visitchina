import Breadcrumb from '@/components/Breadcrumb'
import AuthorByline from '@/components/AuthorByline'
import type { Metadata } from 'next'

interface DetailPageLayoutProps {
  breadcrumbs: { label: string; href?: string }[]
  title: string
  subtitle?: string
  heroImage?: string
  updatedDate?: string
  author?: string
  jsonLd?: object
  children: React.ReactNode
}

export default function DetailPageLayout({
  breadcrumbs,
  title,
  subtitle,
  heroImage,
  updatedDate,
  author,
  jsonLd,
  children,
}: DetailPageLayoutProps) {
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="container-px mx-auto max-w-4xl py-6">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {heroImage && (
        <div className="container-px mx-auto max-w-4xl mb-8">
          <div className="relative h-48 md:h-64 overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/60 to-transparent" />
          </div>
        </div>
      )}

      <article className="container-px mx-auto max-w-4xl pb-16">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-6">
          <AuthorByline updatedDate={updatedDate} author={author} />
        </div>
        <hr className="my-8 border-[var(--line)]" />
        <div className="prose-china">{children}</div>
      </article>
    </>
  )
}