export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-live="polite">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
