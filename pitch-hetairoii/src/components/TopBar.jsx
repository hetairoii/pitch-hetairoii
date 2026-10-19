// Cabecera fija en versalitas, como la del póster de referencia.
const TopBar = () => (
  <header className="pointer-events-none fixed inset-x-0 top-1 z-40 flex items-center justify-center px-14 py-3 md:px-20">
    <p className="label text-center !text-[0.58rem] md:!text-[0.65rem] text-ink">
      Matias Silveira · Personal Branding · Caracas, Venezuela
    </p>
  </header>
)

export default TopBar
