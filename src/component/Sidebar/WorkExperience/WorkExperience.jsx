import React from "react";
import InputField from "../InputField/InputField.jsx";

const WorkExperience = ({handleChange}) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Work experience</h4>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>Any experience
                </label>
                <InputField handleChange={handleChange} value="intership" name="test" title="Intership"/>
                <InputField handleChange={handleChange} value="work remotely" name="test" title="Work remotely"/>
            </div>
        </div>
    )
}

export default WorkExperience;