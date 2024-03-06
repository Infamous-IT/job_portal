import React from "react";
import Location from "./Location/Location.jsx";
import Salary from "./Salary/Salary.jsx";
import JobPostingData from "./JobPostingData/JobPostingData.jsx";
import WorkExperience from "./WorkExperience/WorkExperience.jsx";
import TypeOfEmployment from "./TypeOfEmployment/TypeOfEmployment.jsx";

const Sidebar = ({handleChange, handleClick}) => {


    return (
        <div className="space-y-5">
            <h3 className="text-lg font-bold mb-2">Filters</h3>

            <Location handleChange={handleChange}/>
            <Salary handleChange={handleChange} handleClick={handleClick}/>
            <JobPostingData handleChange={handleChange}/>
            <WorkExperience handleChange={handleChange}/>
            <TypeOfEmployment handleChange={handleChange}/>
        </div>
    )
}

export default Sidebar;