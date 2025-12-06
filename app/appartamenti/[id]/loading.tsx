export default function Loading() {
  return (
    <div className="min-h-screen pt-20">
      <div className="animate-pulse">
        <div className="h-[60vh] bg-secondary/30" />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-64 bg-secondary/30 rounded-lg" />
              <div className="h-32 bg-secondary/30 rounded-lg" />
              <div className="h-32 bg-secondary/30 rounded-lg" />
            </div>
            <div className="h-96 bg-secondary/30 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

