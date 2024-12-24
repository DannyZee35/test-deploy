import Image from "next/image";
import { Paperclip } from "lucide-react";
export const QualityReport = () => {
  return (
    <>
      <div className="flex gap-5 flex-col bg-white p-5 my-10">
        <h3 className="font-normal ">Quality Control Report</h3>
        <div className="flex items-center gap-4 ">
      
          <label
            className=" bg-transparent  w-[300px] text-custom-gray border border-x-custom-lightGray font-normal py-2 px-4 rounded cursor-pointer flex items-center  gap-5"
            htmlFor="myfile"
          >
            <Paperclip /> Choose File
            <input type="file" id="myfile" name="myfile" className="hidden" />
          </label>
          <button style={{color:"#1877F2"}}>Upload</button>
        </div>

        <p className="text-[#848282] text-[14px]">
          <strong> Note: </strong>
          For “Fail” quality control report is mandatory
        </p>
      </div>
      <div className="flex  items-center justify-end gap-5 my-10">
      <button className="rounded-lg px-8 p-2 border border-[#E40000] flex items-center justify-between gap-4 w-[165px]" style={{
            backgroundColor: "transparent",
            color: "#E40000"
        }}><Image height={10} width={10} alt={"Cancel Icon"} src={"/cross-icon.svg"}/> Cancel</button>
        <button className="rounded-lg px-8 p-2 w-[165px]" style={{
            backgroundColor: "#265E54",
            color: "white"
        }}>Save</button>
      </div>
    </>
  );
};
