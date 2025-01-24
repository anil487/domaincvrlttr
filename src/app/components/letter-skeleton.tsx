export function LetterSkeleton() {
    return (
      <div className="space-y-4 animate-pulse">

        {/* Salutation */}
        <div className="h-6 bg-gray-200 rounded w-32" />
  
        
      {/* Main letter content */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-10/12" />
        </div>
  
       {/* Thank you paragraph */}
        <div className="h-5 bg-gray-200 rounded w-4/5" />
  
        {/* Domain details */}
        <div className="space-y-2 font-bold text-base">
          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded w-24" />
            <div className="h-5 bg-gray-200 rounded w-48" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded w-36" />
            <div className="h-5 bg-gray-200 rounded w-56" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded w-40" />
            <div className="h-5 bg-gray-200 rounded w-56" />
          </div>
        </div>
  
       {/* Signature section */}
        <div className="space-y-2 mt-8">
          <div className="h-5 bg-gray-200 rounded w-20" /><br></br>
          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded w-16" />
            <div className="h-5 bg-gray-200 rounded w-48" />
          </div>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-5 bg-gray-200 rounded w-20" />
            <div className="h-5 bg-gray-200 rounded w-56" />
          </div>
        </div>
      </div>
    )
  }
  
  