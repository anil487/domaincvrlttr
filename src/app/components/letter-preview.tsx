import { FormData } from "../types/form";
import { formatDate } from "../utils/format-date";

interface LetterPreviewProps {
  data: FormData;
}

export function LetterPreview({ data }: LetterPreviewProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow min-h-[842px] w-full  print:shadow-none print:p-0 print:min-h-0 print:w-auto print:max-w-none">
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

        <div className="space-y-4">
          <p>Dear Sir/Madam,</p>
          {data.purpose === "Business" ? (
            <p>
              On behalf of , I am writing this letter to request you to kindly
              register a {""} {data.domainName}  domain for our company. I have
              provided our company registration certificate and PAN Card with
              this letter.
               I would be very glad if you approve my domain registration request.
            </p>
          ) : (
            <p>
              I am writing this letter to request you to kindly register a {" "}
              {data.domainName}  domain for personal use. I have attached a copy
              of my citizenship along with this letter for your reference and
              verification. I would be very glad if you approve my domain registration request.
            </p>
          )}
          <p>
            Thank you very much for consideration. I look forward to hearing
            from you soon.
          </p>

          <div className="space-y-2 font-bold text-base">
            <p>
              Domain name:{" "}
              <span className="font-normal text-base">{data.domainName}</span>
            </p>
            <p>
              Primary Name Server:{" "}
              <span className="font-normal text-base">
                {data.primaryNameServer}
              </span>
            </p>
            <p>
              Secondary Name Server:
              <span className="font-normal text-base">
                {" "}
                {data.secondaryNameServer}
              </span>
            </p>
          </div>

          <div className="space-y-2 mt-8 font-bold text-base">
            <p className="font-normal text-base">Sincerely,</p>
            <p>
              Name: <span className="font-normal text-base">{data.name}</span>
            </p>
            <p>
              Address:{" "}
              <span className="font-normal text-base">{data.address}</span>
            </p>
          </div>
        </div>

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
  );
}
