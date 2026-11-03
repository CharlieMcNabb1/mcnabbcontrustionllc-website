export default function PageHeader({ title, children }) {
  return (
    <section className="border-b border-line bg-stone">
      <div className="container-page py-14 md:py-20">
        <h1 className="max-w-4xl text-4xl leading-[1.1] font-semibold tracking-[-0.02em] md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-ink-2">{children}</div>}
      </div>
    </section>
  )
}
