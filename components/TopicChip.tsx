'use client'

import { useState } from 'react'

interface TopicChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export function TopicChip({ label, active = false, onClick }: TopicChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
        active
          ? 'border-[#af5d32] bg-[#af5d32] text-white'
          : 'border-[var(--line)] bg-white text-[var(--muted)] hover:border-[#af5d32] hover:text-[#af5d32]'
      }`}
    >
      {label}
    </button>
  )
}

interface TopicChipsBarProps {
  chips: string[]
  active?: string
  onSelect?: (chip: string) => void
}

export function TopicChipsBar({ chips, active, onSelect }: TopicChipsBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      <button
        type="button"
        onClick={() => onSelect?.('')}
        className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
          !active
            ? 'border-[#af5d32] bg-[#af5d32] text-white'
            : 'border-[var(--line)] bg-white text-[var(--muted)] hover:border-[#af5d32] hover:text-[#af5d32]'
        }`}
      >
        Alle
      </button>
      {chips.map((chip) => (
        <TopicChip
          key={chip}
          label={chip}
          active={active === chip}
          onClick={() => onSelect?.(chip)}
        />
      ))}
    </div>
  )
}