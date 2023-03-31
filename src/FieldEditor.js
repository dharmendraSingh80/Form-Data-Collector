import React, { useState } from "react";

const FieldEditor = ({ data }) => {
  const [fields, setFields] = useState(data);

  //this function will handle name change
  const handleNameChange = (event, index) => {
    const { value } = event.target;
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index].name = value;
      return newFields;
    });
  };

  //this function will handle type change
  const handleTypeChange = (event, index) => {
    const { value } = event.target;
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index].type = value;
      return newFields;
    });
  };

  //this function will handle required change
  const handleRequiredChange = (event, index) => {
    const { checked } = event.target;
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index].required = checked;
      return newFields;
    });
  };

  //this function will use for to add new field
  const handleAddField = () => {
    setFields((prevFields) => [
      ...prevFields,
      { name: "", type: "string", required: false, value: [] },
    ]);
  };

  // this function will use for to delete any field
  const handleDeleteField = (index) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields.splice(index, 1);
      return newFields;
    });
  };

  // this function will render each field
  const renderField = (field, index) => {
    return (
      <div key={index}>
        <input
          type="text"
          value={field.name}
          onChange={(e) => handleNameChange(e, index)}
        />
        <select value={field.type} onChange={(e) => handleTypeChange(e, index)}>
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="object">Object</option>
        </select>

        <label className="switch">
          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) => handleRequiredChange(e, index)}
          />

          <span className="slider"></span>
        </label>

        <button onClick={() => handleDeleteField(index)}>Delete Field</button>

        {/*---- if field type is Object it will nested itself for adding new field in it----- */}
        {field.value && field.type === "object" && (
          <FieldEditor data={field.value} />
        )}
      </div>
    );
  };

  //for consoling data for every level of nesting
  const handleSave = () => {
    console.log(fields);
  };

  return (
    <div>
      {fields.map(renderField)}
      <button className="btn" onClick={handleAddField}>
        Add Field
      </button>
      <button className="btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default FieldEditor;
