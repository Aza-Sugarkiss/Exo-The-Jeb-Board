import Job from "./Job";
import data from "../assets/data/data.json";

const Jobs = () => {
  return (
    <div className="jobs">
      {data.map((job, index) => {
        return (
          <Job
            key={index}
            title={job.title}
            country={job.country}
            contractType={job.contractType}
            city={job.city}
            className={job.className}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
