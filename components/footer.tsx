export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background px-4 py-8 pb-24 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })} Makilagi ED
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}
