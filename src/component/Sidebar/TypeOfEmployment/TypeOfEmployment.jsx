import React from "react";
import InputField from "../InputField/InputField.jsx";

const TypeOfEmployment = ({handleChange}) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Type of employment</h4>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>Any
                </label>
                <InputField handleChange={handleChange} value="full-time" name="test" title="Full-time"/>
                <InputField handleChange={handleChange} value="temporary" name="test" title="Temporary"/>
                <InputField handleChange={handleChange} value="part-time" name="test" title="Part-tite"/>
            </div>
        </div>
    )
}

export default TypeOfEmployment;