
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Skeleton className="h-8 w-64 mx-auto bg-white/20" />
            <Skeleton className="h-16 w-full max-w-3xl mx-auto bg-white/20" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-white/20" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-white/20" />
              <Skeleton className="h-12 w-48 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeletons */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Skeleton className="h-10 w-96 mx-auto" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
