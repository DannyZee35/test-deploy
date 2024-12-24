import InputField from "@/components/quality-assurance-components/InputComponent"
import TextAreaField from "@/components/quality-assurance-components/TextAreaComponent"
import { Input } from "@/components/ui/input"


export const SupplierDetails=()=>{
    
    return(
        <>
        <div className="flex flex-col gap-5 bg-white p-5 my-10">

        <h3 className="font-normal ">Supplier Details</h3>
        <p className="text-[#848282]">Enter Supplier information here</p>
        <div className=" flex gap-5 flex-col">
            <div className="flex justify-between gap-5">
            <Input placeholder="Ahmed Wakil" type="text"/>
            <Input placeholder="Ahmed Wakil"  type="email"/>

            </div>
            <div className="flex justify-between gap-5">
            <Input placeholder="Ahmed Wakil" type="number"/>
            <Input placeholder="Ahmed Wakil"  type="number"/>

            </div>
            <div className="flex justify-between gap-5">
            <TextAreaField placeholder="67848891001-10"  type="text"/>
            <TextAreaField placeholder="House 78, Street 45 Karchi, Pakistan"  type="text"/>

            </div>
        </div>
        <p className="text-[#848282] text-[14px]">
           
           <strong> Important: </strong>
           Supplier Details are auto-filled when selecting the supplier
        </p>
        </div>
        </>
    )
}