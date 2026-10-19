// Monitor CRT beige de los 90 que enmarca el Golden Circle (guiño a la computadora del póster de referencia).
const RetroMonitor = ({ children, caption = 'Golden Circle', className = '' }) => (
  <div className={`relative flex flex-col items-center ${className}`}>
    <div className="relative w-full rounded-[1.4rem] bg-[#d8d2bc] border-2 border-ink shadow-[6px_8px_0_rgba(27,42,82,0.22)] p-[5%] pb-[3.5%]">
      <div
        className="relative aspect-[4/3] rounded-[1rem] border-2 border-ink bg-[#10303b] overflow-hidden ring-4 ring-[#c9c2a8]"
        style={{
          '--gc-line': '#e8e4d4',
          '--gc-text': '#f2efe3',
          '--gc-why': '#e0603a',
          '--gc-how': '#3fa6b8',
          '--gc-what': '#8fc0dc',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-[4%]">
          <div className="h-full aspect-square">{children}</div>
        </div>
        {/* líneas de barrido y reflejo del cristal */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.16)_0_2px,transparent_2px_4px)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[10%] -left-[5%] h-1/2 w-1/2 rounded-br-[100%] bg-gradient-to-br from-white/12 to-transparent"
        />
      </div>
      <div className="mt-[3%] flex items-center justify-between px-1">
        <span className="label !text-[0.5rem] md:!text-[0.6rem] text-muted">{caption}</span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <i className="block h-1.5 w-5 rounded-full bg-ink/40" />
          <i className="block h-2 w-2 rounded-full bg-coral" />
        </span>
      </div>
    </div>
    <div aria-hidden="true" className="h-3 w-1/4 border-x-2 border-ink bg-[#c9c2a8]" />
    <div
      aria-hidden="true"
      className="h-3 w-1/2 rounded-b-xl border-2 border-ink bg-[#d8d2bc] shadow-[4px_5px_0_rgba(27,42,82,0.22)]"
    />
  </div>
)

export default RetroMonitor
