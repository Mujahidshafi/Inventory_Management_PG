import React, { useState } from "react";
import Layout from "../components/layout";

function NewFieldRun() {
  const [fields, setFields] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });

  const handleChange = (e, key) => {
    setFields({ ...fields, [key]: e.target.value });
  };

  return (
    <Layout title="New Field Run">
      <div className="h-[80vh] w-full px-8 flex flex-col justify-between">

        <div className="flex h-[20vh]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col flex-1">
              <span className="mb-1 font-medium text-gray-700">Field Lot Number</span>
              <input
                type="text"
                value={fields[`field${i}`]}
                onChange={(e) => handleChange(e, `field${i}`)}
                placeholder={`Enter value ${i}`}
                className="w-[50vh] px-2 py-1 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        <div className="flex h-[60vh]">
          {[4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col flex-1">
              <span className="mb-1 font-medium text-gray-700">Field Lot Number</span>
              <input
                type="text"
                value={fields[`field${i}`]}
                onChange={(e) => handleChange(e, `field${i}`)}
                placeholder={`Enter value ${i}`}
                className="w-[50vh] px-2 py-1 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default NewFieldRun;
