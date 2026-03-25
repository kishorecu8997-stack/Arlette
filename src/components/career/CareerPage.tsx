import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./career.css";

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
    <section className="career-page">
      <style>
        {`
          .career-job-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 28px;
            margin-bottom: 16px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .career-job-row:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
            border-color: transparent;
          }
          .career-job-row__left h3 {
            margin: 0 0 8px 0;
            font-size: clamp(20px, 1.5vw, 24px);
            font-weight: 500;
            color: #111827;
          }
          .career-job-row__desc {
            margin: 0 0 16px 0;
            font-size: clamp(14px, 0.9vw, 17px);
            color: #4b5563;
            line-height: 1.62;
          }
          .career-job-row__tags {
            display: flex;
            gap: 10px;
          }
          .career-job-tag {
            padding: 4px 14px;
            background: #f3f4f6;
            color: #374151;
            font-size: clamp(12px, 0.75vw, 13px);
            border-radius: 9999px;
            font-weight: 500;
          }
          .career-apply-btn {
            background: none;
            border: none;
            color: #111827;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            padding: 8px 0;
            transition: opacity 0.2s ease;
          }
          .career-apply-btn:hover {
            opacity: 0.6;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
          @media (max-width: 768px) {
            .career-job-row {
              flex-direction: column;
              align-items: flex-start;
              gap: 16px;
            }
          }
        `}
      </style>
      <div className="career-page__container">
        <div className="career-page__hero">
          <p className="career-page__crumb">/ Career</p>
          <div className="career-page__hero-grid">
            <h2>BE PART OF OUR MISSION</h2>
            <p>
              Sustainable, visionary steel solutions that serve customers and communities, 
              people and planet.Sustainable, visionary steel solutions that 
            </p>
          </div>
        </div>

        <div className="career-page__chips">
          {departments.map((department, index) => (
            <button
              key={`${department}-${index}`}
              className={
                selectedDepartment === department
                  ? "career-page__chip active"
                  : "career-page__chip"
              }
              type="button"
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="career-page__list">
          {filteredCareers.map((job) => (
            <article key={job.id} className="career-job-row">
              <div className="career-job-row__left">
                <h3>{job.title}</h3>
                <p className="career-job-row__desc">{job.description}</p>
                <div className="career-job-row__tags">
                  <span className="career-job-tag">{job.mode}</span>
                  <span className="career-job-tag">{job.type}</span>
                </div>
              </div>
              <div className="career-job-row__right">
                <button className="career-apply-btn" onClick={onApplyClick}>
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
