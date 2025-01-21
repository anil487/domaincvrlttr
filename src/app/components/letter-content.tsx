import type { FormData } from "../types/form"
import { LetterSkeleton } from "./letter-skeleton"

interface LetterContentProps {
  data: FormData
  showSkeleton: boolean
}

export function LetterContent({ data, 
   showSkeleton }: LetterContentProps) {
  if (showSkeleton) {
    return <LetterSkeleton />
  }

  return (
    <div className="space-y-4">
      <p>Dear Sir/Madam,</p>
      {data.purpose === "Business" ? (
        <p>
          On behalf of , I am writing this letter to request you to kindly register a {""} {data.domainName} domain for
          our company. I have provided our company registration certificate and PAN Card with this letter. I would be
          very glad if you approve my domain registration request.
        </p>
      ) : (
        <p>
          I am writing this letter to request you to kindly register a {data.domainName} domain for personal use. I have
          attached a copy of my citizenship along with this letter for your reference and verification. I would be very
          glad if you approve my domain registration request.
        </p>
      )}
      <p>Thank you very much for consideration. I look forward to hearing from you soon.</p>

      <div className="space-y-2 font-bold text-base">
        <p>
          Domain name: <span className="font-normal text-base">{data.domainName}</span>
        </p>
        <p>
          Primary Name Server: <span className="font-normal text-base">{data.primaryNameServer}</span>
        </p>
        <p>
          Secondary Name Server:
          <span className="font-normal text-base"> {data.secondaryNameServer}</span>
        </p>
      </div>

      <div className="space-y-2 mt-8 font-bold text-base">
        <p className="font-normal text-base">Sincerely,</p>
        <p>
          Name: <span className="font-normal text-base">{data.name}</span>
        </p>
        <p>
          Address: <span className="font-normal text-base">{data.address}</span>
        </p>
      </div>
    </div>
  )
}

