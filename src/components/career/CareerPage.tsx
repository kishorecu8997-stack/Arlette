import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "Mechanical Design Engineer",
    department: "Engineering",
    mode: "On-site",
    type: "Full-time",
    description: "Design and develop mechanical systems and components using CAD software."
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    mode: "Remote",
    type: "Full-time",
    description: "Lead the visual design of new industrial products from concept to production."
  },
  {
    id: 3,
    title: "CAD Technician",
    department: "Engineering",
    mode: "On-site",
    type: "Contract",
    description: "Create technical drawings and plans for manufacturing and construction."
  },
  {
    id: 4,
    title: "CAM Programmer",
    department: "Manufacturing",
    mode: "On-site",
    type: "Full-time",
    description: "Develop and optimize CNC programs for precision machining operations."
  }
];

function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const { onApplyClick } = useOutletContext() as { onApplyClick: () => void };

  const departments = ["All", ...Array.from(new Set(jobData.map((c) => c.department)))];

  const filteredCareers =
    selectedDepartment === "All"
      ? jobData
      : jobData.filter((c) => c.department === selectedDepartment);

  return (
    <section className="bg-[#f8f8f8] pb-[20px]">
      <div className="mx-auto w-[min(1720px,calc(100%-100px))] bg-white max-xl:w-[calc(100%-32px)]">
        <div className="px-[46px] pt-[24px] pb-[10px] max-xl:px-[18px]">
          <p className="m-0 text-[15px] text-gray-700">/ Career</p>
          <div className="mt-[14px] grid grid-cols-[520px_1fr] items-start gap-[30px] max-xl:grid-cols-1 max-xl:gap-[10px]">
            <h2 className="m-0 max-w-[400px] text-[clamp(42px,4vw,58px)] leading-[1.14] text-gray-900 max-xl:max-w-full max-xl:text-[clamp(34px,8vw,44px)]">
              BE PART OF OUR MISSION
            </h2>
            <p className="mt-[10px] max-w-[600px] leading-[1.85] text-gray-500">
              Sustainable, visionary steel solutions that serve customers and communities, 
              people and planet.Sustainable, visionary steel solutions that 
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-[14px] bg-[#070f36] px-[46px] py-[18px] max-xl:px-[18px]">
          {departments.map((department, index) => (
            <button
              key={`${department}-${index}`}
              className={`cursor-pointer rounded-full border border-[#eef2ff] bg-transparent py-[6px] px-[18px] text-[13px] transition-colors ${
                selectedDepartment === department
                  ? "bg-white text-gray-900"
                  : "text-gray-50 hover:bg-white/10"
              }`}
              type="button"
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="px-[46px] pt-[16px] pb-[20px] max-xl:px-[18px]">    
          {filteredCareers.map((job) => (
            <article
              key={job.id}
              className="mb-4 flex items-center justify-between rounded-[10px] border border-gray-200 bg-white p-6 px-7 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] max-md:flex-col max-md:items-start max-md:gap-4"
            >
              <div>
                <h3 className="mb-2 font-medium text-gray-900 text-[clamp(20px,1.5vw,24px)]">{job.title}</h3>
                <p className="mb-4 leading-[1.62] text-gray-600 text-[clamp(14px,0.9vw,17px)]">{job.description}</p>
                <div className="flex gap-2.5">
                  <span className="rounded-full bg-gray-100 py-1 px-3.5 font-medium text-gray-700 text-[clamp(12px,0.75vw,13px)]">{job.mode}</span>
                  <span className="rounded-full bg-gray-100 py-1 px-3.5 font-medium text-gray-700 text-[clamp(12px,0.75vw,13px)]">{job.type}</span>
                </div>
              </div>
              <div>
                <button className="cursor-pointer border-none bg-none py-2 text-base font-medium text-gray-900 transition-opacity duration-200 ease-in-out hover:underline hover:opacity-60 hover:underline-offset-4" onClick={onApplyClick}>
                  Apply ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerPage;
