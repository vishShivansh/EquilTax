export default function Career() {
  return (
    <>
      <div className="bg-[#fbf9eb] py-4 mx-auto">
        <div className="mx-auto">
          <div className="flex w-full">
            <h2 className="text-3xl font-bold text-[#30a099] pl-[180px]">
              Career
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-white">
          <div className="mb-6 px-[165px] line-clamp-2">
            <p className="text-gray-700">
              We nurture and cultivate a sense of pride in the work and create
              team leaders. Your growth chart will be governed by well-defined
              transparent policies of the firm. Apply via the form given below
              and meet us for a face-to-face interview.
            </p>
          </div>
          <form className="grid md:grid-cols-2 gap-2 px-[200px]">
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="text"
                id="email"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                name="mobile"
                type="text"
                id="mobile"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full h-10 border border-gray-300 pl-2 rounded-md"
              >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Position you are applying for
              </label>
              <input
                name="position"
                type="text"
                id="position"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Date Of Birth (DD/MM/YYYY){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                name="dob"
                type="text"
                id="dob"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">Highest Qualification</label>
              <input
                name="qualification"
                type="text"
                id="qualification"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">Portfolio Website</label>
              <input
                name="portfolio"
                type="text"
                id="portfolio"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Upload Resume *(Max size 1 MB)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                className="w-full h-10 border border-gray-300 p-1 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">Last Company You Worked For</label>
              <input
                name="lastCompany"
                type="text"
                id="lastCompany"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">Years Of Experience</label>
              <input
                name="experience"
                type="text"
                id="experience"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">
                Reference / Comments / Questions
              </label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="4"
                className="w-full h-16 border border-gray-300 p-3 rounded-md"
              ></textarea>
            </div>
            <div className="col-span-2 text-center mb-6">
              <input
                type="submit"
                name="submit"
                value="Send Application"
                id="submit"
                className="px-10 py-4 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600 cursor-pointer"
                onClick={() => alert("Application Submitted")}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
