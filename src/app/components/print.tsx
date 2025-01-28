import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

const Print = ({ children,isGenerating }: { children: React.ReactNode, isGenerating:boolean }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="relative">
      <div ref={contentRef}>{children}</div>
      {isGenerating && (
      <div className="absolute top-10 right-2 z-10 -translate-y-full">
        <Printer
         className="cursor-pointer"  onClick={() => reactToPrintFn()} />
      </div>
      )}
      <div className="absolute right-24 z-20 md:right-60 -translate-y-20 lg:-translate-y-14 lg:right-52 xl:right-80">
        <Button
        disabled={!isGenerating}
          className="bg-green-500 hover:bg-green-800"
          onClick={() => reactToPrintFn()}
        >
          Download
          <MdOutlineFileDownload  className={isGenerating?"animate-bounce":""} />
        </Button>
      </div>
    </div>
  );
};

export default Print;
