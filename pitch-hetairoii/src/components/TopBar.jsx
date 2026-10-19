// Cabecera fija en versalitas, como la del póster de referencia.
const TopBar = () => (
  <header className="pointer-events-none fixed inset-x-0 top-1 z-40 flex items-center justify-between gap-3 px-3 py-2 md:px-6">
    <div
      aria-hidden="true"
      className="hidden md:flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-ink bg-paper text-center"
    >
      <span className="label !text-[0.5rem] !tracking-[0.12em]">Elevator</span>
      <span className="label !text-[0.5rem] !tracking-[0.12em]">pitch</span>
    </div>
    <p className="label mx-auto text-center !text-[0.58rem] md:!text-[0.65rem] text-ink">
      Matias Silveira · Personal Branding · Caracas, Venezuela
    </p>
    <div aria-hidden="true" className="hidden md:block h-14 w-14 shrink-0" />
  </header>
)

export default TopBar
