import React, { useState } from "react";

export default function VendorRegister() {
  const [isOption, setIsOption] = useState(null);
  const [formData,setFormData]=useState(
    {
   primaryContact:{
            salution:"",
            firstName:"",
            lastName:""
        },
        companyName:"",
        displayName:"",
        email:"",
        phoneNumber:{
            phone:"",
            office:""
        },

        billingAddress:{
            doorNum:"",
            streetName:"",
            vilage:"",
            city:"",
            pinCode:""
        },

        shippingAddress:{
            doorNum:"",
            streetName:"",
            vilage:"",
            city:"",
            pinCode:""
        },

        contactPerson:{
            name:"",
            phone:""
        },

        bank:{
            name:"",
            bankName:"",
            ifsc:"",
            account:""
        },

        remarks:""

    }
  )

  const option = [
    "Address",
    "Contact Persons",
    "Bank Details",
    "Custom Fields",
    "Attachment Files",
    "Remarks",
  ];

  const attachment = [
    "Register Form",
    "GST",
    "BANK DETAILS",
    "PANCARD",
    "OTHERS",
  ];

  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData(pre=>({...pre,[name]:value}))
  }

    const handleNestedChange=(e,section)=>{
    const{name,value}=e.target
    setFormData(pre=>({...pre,[section]:{...pre[section],[name]:value}}))
  }

const handleSubmit=(e)=>{

}

  return (
    <div>
      <h1>New Vendor</h1>

      {/* Primary Deatails */}
      <form className="w-full" action={handleSubmit}>
        <div className="w-1/2 p-4 ">
          <div className="flex  p-2 gap-2 ">
            <p className="w-2/6"> Primary Contact</p>
            <div className="flex justify-center items-center gap-2 w-4/6">
              <select
                name="salution"
                value={formData.primaryContact.salution}
                className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-[20%] text-center"
                onChange={(e)=>handleNestedChange(e,"primaryContact")}
              >
                <option value=""></option>
                <option value="">Mr.</option>
                <option value="">Mrs.</option>
                <option value="">Ms.</option>
                <option value="">Miss</option>
                <option value="">Dr.</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="w-[40%] outline-none bg-white rounded-lg border border-gray-300 p-2"
                name="firstName"
                value={formData.primaryContact.firstName}
                onChange={(e)=>handleNestedChange(e,"primaryContact")}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[40%] outline-none bg-white rounded-lg border border-gray-300 p-2"
                name="lastName"
                value={formData.primaryContact.lastName}
                onChange={(e)=>handleNestedChange(e,"primaryContact")}                
              />
            </div>
          </div>

          <div className="flex  p-2 gap-2 ">
            <p className="w-2/6"> Company name</p>
            <input
              type="text"
              className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="flex  p-2 gap-2 ">
            <p className="w-2/6"> Display name</p>
            <input
              type="text"
              className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}              
            />
          </div>

          <div className="flex  p-2 gap-2 ">
            <p className="w-2/6"> Email Address</p>
            <input
              type="email"
              className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
              name="email"
              value={formData.email}
              onChange={handleChange}               
            />
          </div>

          <div className="flex  p-2 gap-2 ">
            <p className="w-2/6"> Phone Number</p>
            <div className="flex w-4/6  gap-4">
              <input
                type="phone"
                placeholder="Phone"
                className="w-1/2 bg-white rounded-lg border outline-none border-gray-300 p-2 "
                name="phone"
                value={formData.phoneNumber.phone}
                onChange={(e)=>handleNestedChange(e,"phoneNumber")}  
              />
              <input
                type="phone"
                placeholder="Offices"
                className="w-1/2 bg-white rounded-lg border outline-none border-gray-300 p-2 "
                name="office"
                value={formData.phoneNumber.office}
                onChange={(e)=>handleNestedChange(e,"phoneNumber")} 
              />
            </div>
          </div>
        </div>

          {/* Tabs */}
          <div className="flex gap-4 pl-4">
            {option.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p
                  className={`py-2 cursor-pointer ${
                    isOption === item ? "text-blue-500" : ""
                  }`}
                  onClick={() => setIsOption(item)}
                >
                  {item}
                </p>

                <div
                  className={`w-full h-2px transition-all duration-300
            ${isOption === item ? "bg-blue-500" : "bg-transparent"}
          `}
                />
              </div>
            ))}
          </div>

          <hr className="w-1/2 mx-4 my-3 border-gray-300" />

          {/* Content */}
          {isOption === "Address" && (
            <div className="p-4 w-full flex">
              <div className="p-4 w-1/2 ">
                <h1 className="text-center ">Billing Address</h1>
                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Door.No</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="doorNum"
                    value={formData.billingAddress.doorNum}
                    onChange={(e)=>handleNestedChange(e,"billingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Street Name</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="streetName"
                    value={formData.billingAddress.streetName}
                    onChange={(e)=>handleNestedChange(e,"billingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Village</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="vilage"
                    value={formData.billingAddress.vilage}
                    onChange={(e)=>handleNestedChange(e,"billingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">City</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="city"
                    value={formData.billingAddress.city}
                    onChange={(e)=>handleNestedChange(e,"billingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Pin Code</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="pinCode"
                    value={formData.billingAddress.pinCode}
                    onChange={(e)=>handleNestedChange(e,"billingAddress")}
                  />
                </div>
              </div>

              <div className="p-4 w-1/2 ">
                <h1 className="text-center ">Shipping Address</h1>
                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Door.No</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                     name="doorNum"
                    value={formData.shippingAddress.doorNum}
                    onChange={(e)=>handleNestedChange(e,"shippingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Street Name</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="streetName"
                    value={formData.shippingAddress.streetName}
                    onChange={(e)=>handleNestedChange(e,"shippingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Village</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="vilage"
                    value={formData.shippingAddress.vilage}
                    onChange={(e)=>handleNestedChange(e,"shippingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">City</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="city"
                    value={formData.shippingAddress.city}
                    onChange={(e)=>handleNestedChange(e,"shippingAddress")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Pin Code</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="pinCode"
                    value={formData.shippingAddress.pinCode}
                    onChange={(e)=>handleNestedChange(e,"shippingAddress")}
                  />
                </div>
              </div>

              
            </div>
          )}

          {isOption === "Contact Persons" && (
            <div className="p-4 w-full flex">
              <div className="p-4 w-1/2 ">
                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Person 1</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    placeholder="Name"
                    name="name"
                    value={formData.contactPerson.name}
                    onChange={(e)=>handleNestedChange(e,"contactPerson")}
                  />
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.contactPerson.phone}
                    onChange={(e)=>handleNestedChange(e,"contactPerson")}
                  />
                </div>

              </div>
            </div>
          )}

          {isOption === "Bank Details" && (
            <div className="p-4 w-full flex">
              <div className="p-4 w-1/2 ">
                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Account Holder Name</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="name"
                    value={formData.bank.name}
                    onChange={(e)=>handleNestedChange(e,"bank")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">Bank Name</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="bankName"
                    value={formData.bank.bankName}
                    onChange={(e)=>handleNestedChange(e,"bank")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">IFSC NO</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="ifsc"
                    value={formData.bank.ifsc}
                    onChange={(e)=>handleNestedChange(e,"bank")}
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <p className="w-2/6">ACCOUNT NO</p>
                  <input
                    type="text"
                    className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
                    name="account"
                    value={formData.bank.account}
                    onChange={(e)=>handleNestedChange(e,"bank")}
                  />
                </div>
              </div>
            </div>
          )}

          {isOption === "Remarks" && (
            <div className="p-4 w-full flex">
              <div className="p-4 w-1/2 ">
                <p>
                  Remarks <span> (For Internal Use)</span>
                </p>
                <textarea
                  className="border border-gray-300 rounded-lg w-full"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          )}

          {isOption === "Attachment Files" && (
            <div className="p-4 w-full flex">
              <div className="p-4 w-full  text-center flex gap-4 overflow-y-auto ">
                {attachment.map((item, index) => (
                  <div key={index}>
                    <div className="w-32 h-32 border border-dashed flex justify-center items-center rounded-lg ">
                      <input type="file" id="uploadFile" className="hidden" />
                      <label htmlFor="uploadFile"> +</label>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-center items-center py-4">
            <button onClick={handleSubmit} className="bg-blue-500 rounded-lg px-4 text-white cursor-pointer hover:bg-blue-200 hover:text-black ">
              Save
            </button>
            <button className="bg-green-500 rounded-lg px-4 text-white cursor-pointer hover:bg-green-200 hover:text-black">
              Cancel
            </button>
          </div>
      
      </form>
    </div>
  );
}


