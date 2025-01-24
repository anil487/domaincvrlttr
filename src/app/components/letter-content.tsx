import type { FormData } from "../types/form";
import { LetterSkeleton } from "./letter-skeleton";
import { TypeAnimation } from "react-type-animation";

interface LetterContentProps {
  data: FormData;
  showSkeleton: boolean;
}

export function LetterContent({ data, showSkeleton }: LetterContentProps) {
  if (showSkeleton) {
    return <LetterSkeleton />;
  }

  const letterContent = `
Dear Sir/Madam,

${
  data.purpose === "Business"
    ? `I am writing this letter to request you to kindly register a ${data.domainName} domain for our company Registered Company ${data.companyName} Pvt.Ltd. I have provided our company registration certificate and PAN Card with this letter.I would be very glad if you approve my domain registration request.`
    : `I am writing this letter to request you to kindly register a ${data.domainName} domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter.I would be very glad if you approve my domain registration request.`
}

Thank you very much for consideration. I look forward to hearing from you soon.
`.trim();

  const domainContent = `
Domain Name: ${data.domainName}
Primary Server Name: ${data.primaryNameServer}
Secondary Server Name: ${data.secondaryNameServer}

Sincerely,
`.trim();

  const signatureContent = `
Name: ${data.name}
`.trim();

  const addressContent = `
Address: ${data.address}
`.trim();

  return (
    <div>
      {/* Main Letter Content */}
      <TypeAnimation
        className="text-start lg:text-justify"
        sequence={[letterContent]}
        wrapper="div"
        cursor={false}
        repeat={0}
        speed={99}
        style={{ whiteSpace: "pre-line" }}
      />

      {/* Domain Section */}
      <TypeAnimation
        className="text-start lg:text-justify"
        sequence={[3000, domainContent]}
        wrapper="div"
        cursor={false}
        repeat={0}
        speed={99}
        style={{ whiteSpace: "pre-line", marginTop: "1rem" }}
      />

      {/* Signature Section */}
      <div className="space-y-4 font-semibold text-base">
        <TypeAnimation
          className="text-start lg:text-justify"
          sequence={[4000, signatureContent]}
          wrapper="div"
          cursor={false}
          repeat={0}
          speed={99}
          style={{ whiteSpace: "pre-line", marginTop: "3rem" }}
        />
      </div>

      {/* Address Section */}
      <div>
        <TypeAnimation
          className="text-start lg:text-justify"
          sequence={[5000, addressContent]}
          wrapper="div"
          cursor={false}
          repeat={0}
          speed={99}
          style={{ whiteSpace: "pre-line" }}
        />
      </div>
    </div>
  );
}
