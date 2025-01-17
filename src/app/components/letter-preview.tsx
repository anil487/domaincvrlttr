import { FormData } from "../types/form";
import { formatDate } from "../utils/format-date";

interface LetterPreviewProps {
  data: FormData;
}

export function LetterPreview({ data }: LetterPreviewProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow min-h-[842px] w-full max-w-[595px] print:shadow-none print:p-0 print:min-h-0 print:w-auto print:max-w-none">
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
          <p className="font-semibold">Subject: NP Domain Registration</p>
        </div>

        <div className="space-y-4">
          <p>Dear Sir/Madam,</p>

          <p>
            I am writing this letter to request you to kindly register a{" "}
            {data.domainName} domain for our company. I have provided our
            company registration certificate and PAN Card with this letter. I
            would be very glad if you approve my domain registration request.
          </p>

          <p>
            Thank you very much for consideration. I look forward to hearing
            from you soon.
          </p>

          <div className="space-y-2">
            <p>Domain name: {data.domainName}</p>
            <p>Primary Name Server: {data.primaryNameServer}</p>
            <p>Secondary Name Server: {data.secondaryNameServer}</p>
          </div>

          <div className="space-y-2 mt-8">
            <p>Sincerely,</p>
            <p>Name: {data.name}</p>
            <p>Address: {data.address}</p>
          </div>
        </div>

        <div className="flex justify-end mt-4 print:hidden">
          <div className="w-32 h-32 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center">
            <div className="p-10 w-24 h-24 border-2 border-solid border-gray-300 rounded-full flex items-center justify-center text-gray-600">
              STAMP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
