import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

const Print = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Printer onClick={() => reactToPrintFn()} />
      </div>
      <div ref={contentRef}>
        {children}
      </div>
      <div className="flex justify-center mt-4">
        <Button className="bg-green-500 hover:bg-green-800" onClick={() => reactToPrintFn()} >Download 
        <MdOutlineFileDownload />
        </Button>
      </div>

    </div>
  );
};

export default Print;
