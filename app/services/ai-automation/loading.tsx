import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-emerald-900 via-cyan-900 to-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-16 w-3/4 mx-auto bg-emerald-800/20" />
            <Skeleton className="h-6 w-full mx-auto bg-emerald-800/20" />
            <Skeleton className="h-6 w-5/6 mx-auto bg-emerald-800/20" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-emerald-800/20" />
              <Skeleton className="h-12 w-48 bg-emerald-800/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-16">
          {/* Platforms section */}
          <div className="text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="h-16 w-16 rounded-xl mb-3" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>

          {/* Problem section */}
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-80 mx-auto mb-8" />
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-6 rounded-xl border">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-10 w-10 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages section */}
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-8 rounded-xl shadow-lg border">
                  <div className="text-center mb-6">
                    <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-6 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-40 mx-auto mb-4" />
                    <Skeleton className="h-8 w-24 mx-auto" />
                  </div>
                  <div className="space-y-3 mb-8">
                    {[...Array(6)].map((_, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Skeleton className="h-5 w-5 rounded" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
