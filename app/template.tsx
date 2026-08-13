export default function Template({ children }: { children: React.ReactNode }) {
  // Keep the initial server-rendered content visible. Animating the whole page
  // from opacity 0 delayed the hero and made slow mobile loads look blank.
  return <>{children}</>
}











