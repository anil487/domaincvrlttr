import type { FormData } from "../types/form";
import { formatDate } from "../utils/format-date";
import Print from "../components/print";
import { LetterContent } from "./letter-content";

interface LetterPreviewProps {
  data: FormData;
  isGenerating: boolean;
}

export function LetterPreview({ data, isGenerating }: LetterPreviewProps) {
  return (
    <Print>
      <div className="bg-white p-8 rounded-lg shadow min-h-[842px] w-full print:shadow-none print:p-0 print:min-h-0 print:w-auto print:max-w-none">
        <div className="space-y-6">
          <div className="text-right">
            <p>Date: {formatDate(new Date())}</p>
          </div>

          <div className="space-y-2">
            <p>To,</p>
            <p>The Hostmaster,</p>
            <p>Mercantile Communication Pvt. Ltd.</p>
            <p>Durbar Marg,Kathmandu</p>
          </div>

          <div className="flex justify-center">
            <p className="font-semibold underline underline-offset-4">
              Subject: NP Domain Registration
            </p>
          </div>

          <LetterContent data={data} showSkeleton={!isGenerating} />

          {data.purpose.length !== 0 && (
            <div className="flex justify-end mt-2 print:hidden">
              <div className="w-32 h-32 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center">
                <div className="p-10 w-24 h-24 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  STAMP
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Print>
  );
}
