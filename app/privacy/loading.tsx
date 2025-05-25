import { Skeleton } from "@/components/ui/skeleton"

export default function PrivacyLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Skeleton className="h-8 w-32 bg-gray-800" />
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-16 bg-gray-800" />
              ))}
            </div>
            <Skeleton className="h-10 w-24 bg-gray-800" />
          </div>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-16 w-96 mx-auto bg-gray-800" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-gray-800" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
            <Skeleton className="h-4 w-48 mx-auto bg-gray-800" />
          </div>
        </section>

        {/* Table of Contents Skeleton */}
        <section className="py-12 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-32 mx-auto mb-8 bg-gray-800" />
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-16 bg-gray-800" />
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-12 w-64 bg-gray-800" />
                <Skeleton className="h-32 w-full bg-gray-800" />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section Skeleton */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-12 w-12 mx-auto bg-gray-800" />
            <Skeleton className="h-10 w-80 mx-auto bg-gray-800" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-gray-800" />
            <Skeleton className="h-12 w-40 mx-auto bg-gray-800" />
          </div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24 bg-gray-800" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="h-4 w-full bg-gray-800" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
