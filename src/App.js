import FieldEditor from "./FieldEditor";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Field Name and Type</h1>
        <FieldEditor
          data={[
            {
              name: "person",
              type: "object",
              value: [
                {
                  name: "name",
                  type: "object",
                  value: [
                    { name: "firstName", type: "string", value: [] },
                    { name: "lasttName", type: "string", value: [] },
                  ],
                },
              ],
            },
            { name: "order", type: "string", value: [] },
            { name: "class", type: "boolean", value: [] },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
