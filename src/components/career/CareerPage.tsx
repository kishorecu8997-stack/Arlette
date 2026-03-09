import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { careers } from "../../data/careers";
import "./career.css";

function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const { onApplyClick } = useOutletContext() as { onApplyClick: () => void };

  const departments = ["All", ...Array.from(new Set(careers.map((c) => c.department)))];

  const filteredCareers =
    selectedDepartment === "All"
      ? careers
      : careers.filter((c) => c.department === selectedDepartment);

  return (
    <section className="career-page">
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
            <article key={job.id} className="career-page__card">
              <div>
                <h2>{job.title}</h2>
                <p>{job.location} - {job.type}</p>
              </div>
              <button className="apply-button hover-effect" onClick={onApplyClick}>Apply</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerPage;
