
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-orange-900 via-red-900 to-black text-white">
        <div className="h-16" /> {/* Navbar space */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-16 w-full bg-orange-800/30" />
            <Skeleton className="h-8 w-3/4 mx-auto bg-orange-800/30" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-orange-800/30" />
              <Skeleton className="h-12 w-36 bg-orange-800/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeletons */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Problem Section */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Skeleton className="h-10 w-2/3 mx-auto" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5 mx-auto" />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4 p-8">
                <Skeleton className="h-8 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton key={j} className="h-4 w-full" />
                  ))}
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
