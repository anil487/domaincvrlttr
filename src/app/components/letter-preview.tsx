import type { FormData } from "../types/form"
import { formatDate } from "../utils/format-date"
import Print from "../components/print"
import { LetterContent } from "./letter-content"

interface LetterPreviewProps {
  data: FormData
  isGenerating: boolean
}

export function LetterPreview({ data, isGenerating }: LetterPreviewProps) {
  return (
    <Print isGenerating={isGenerating}>
      <div className="bg-white p-3 pt-16 rounded-lg shadow w-full min-h-[842px] md:min-h-[1000px] lg:min-h-[842px] print:shadow-none print:p-1 print:min-h-0 print:w-auto print:max-w-none relative overflow-hidden">
        <div className="space-y-3 lg:space-y-6">
          <div className="text-right">
            <p>Date: {formatDate(new Date())}</p>
          </div>

          <div className="space-y-1 mx-1 lg:space-y-2 lg:mx-3">
            <p>To,</p>
            <p>The Hostmaster,</p>
            <p>Mercantile Communication Pvt. Ltd.</p>
            <p>Durbar Marg, Kathmandu</p>
          </div>

          <div className="flex justify-center">
            <p className="font-semibold underline underline-offset-4">Subject: NP Domain Registration</p>
          </div>
          <LetterContent data={data} showSkeleton={!isGenerating} />
          {data.purpose === "Business" && (
            <div className="absolute right-4 md:right-8 lg:right-12 bottom-8 md:bottom-12 lg:bottom-16 justify-end mt-2 hidden md:flex print:hidden">
              <div className="w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center">
                <div className="p-8 md:p-9 lg:p-10 w-20 md:w-22 lg:w-24 h-20 md:h-22 lg:h-24 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs md:text-sm lg:text-base">
                  STAMP
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="print:hidden absolute inset-0 bg-gradient-to-t from-gray-400 via-transparent to-transparent opacity-50"></div>
      </div>
    </Print>
  )
}

