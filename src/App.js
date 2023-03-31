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
              required: false,
              value: [
                {
                  name: "name",
                  type: "object",
                  required: false,
                  value: [
                    {
                      name: "firstName",
                      type: "string",
                      required: false,
                      value: [],
                    },
                    {
                      name: "lasttName",
                      type: "string",
                      required: false,
                      value: [],
                    },
                  ],
                },
              ],
            },
            { name: "order", type: "string", required: true, value: [] },
            { name: "class", type: "boolean", required: false, value: [] },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
