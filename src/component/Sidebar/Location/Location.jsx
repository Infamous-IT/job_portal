import React from "react";
import InputField from "../InputField/InputField.jsx";

const Location = ({handleChange}) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Location</h4>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>All
                </label>
                <InputField handleChange={handleChange} value="london" name="test" title="London"/>
                <InputField handleChange={handleChange} value="seattle" name="test" title="Seattle"/>
                <InputField handleChange={handleChange} value="madrid" name="test" title="Madrid"/>
                <InputField handleChange={handleChange} value="boston" name="test" title="Boston"/>
                <InputField handleChange={handleChange} value="san francisco" name="test" title="San Francisco"/>
                <InputField handleChange={handleChange} value="brussels" name="test" title="Brussels"/>
            </div>
        </div>
    )
}

export default Location;