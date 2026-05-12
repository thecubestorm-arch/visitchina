export default function TrustBar() {
  const currentMonth = new Date().toLocaleDateString('de-CH', { month: 'long', year: 'numeric' })

  return (
    <div className="bg-white border-y border-[#ebe4d8] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-serif">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇨🇭</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Von Schweizerinnen für Schweizer</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">.ch Domain + nDSG-konform</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">🕐</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Aktualisiert {currentMonth}</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">🇨🇭</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Swiss hosted</span>
          </div>
        </div>
      </div>
    </div>
  )
}