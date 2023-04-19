import React, { useState } from 'react';

interface LookupTable {
  [key: string]: number[];
}

const lookupTable: LookupTable = {
  Equipment_Other: [1, 0, 0],
  Equipment_Raw: [0, 1, 0],
  Equipment_Wraps: [0, 0, 1],
  Sex_M: [1],
  Sex_F: [0],
};

export const JSXForm = () => {
  const [Equipment, setEquipment] = useState<string>('');
  const [Sex, setSex] = useState<string>('');
  const [Age, setAge] = useState<number>(0);
  const [BodyweightKg, setBodyweightKg] = useState<number>(0);
  const [Best3SquatKg, setBest3SquatKg] = useState<number>(0);
  const [Best3DeadliftKg, setBest3DeadliftKg] = useState<number>(0);
  const [prediction, setPrediction] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedInput1 = lookupTable[Equipment];
    const encodedInput2 = lookupTable[Sex];

    console.log(encodedInput1);
    console.log(encodedInput2);
    // Call the API with the encoded input data...

    // const preservationList: number[] = encodedInput1;
    // const samplescollectedList: number[] = encodedInput2;
    const [Equipment_Other, Equipment_Raw, Equipment_Wraps] = encodedInput1;
    const [Sex_M] = encodedInput2;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Age: Age,
        BodyweightKg: BodyweightKg,
        Best3SquatKg: Best3SquatKg,
        Best3DeadliftKg: Best3DeadliftKg,
        Equipment_Raw: Equipment_Raw,
        Equipment_Wraps: Equipment_Wraps,
        Sex_M: Sex_M,
      }),
    };

    const response = await fetch(
      'https://ayzd9v80wd.execute-api.us-east-1.amazonaws.com/Active/teach-yo-self',
      requestOptions,
    );

    let responseJson = await response.json();
    if (response.status === 200) {
      setPrediction(responseJson.prediction);
    } else {
      setPrediction('Some error occured');
    }
    console.log(prediction);
  };

  return (
    <>
      <h3>
        Please enter your personal details to see your predicted bench max
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          Equipment in use:<br></br>
          <select
            value={Equipment}
            onChange={(e) => setEquipment(e.target.value)}
          >
            <option value="">-- Please select an option --</option>
            <option value="Equipment_Raw">No extra equipment</option>
            <option value="Equipment_Wraps">Wraps</option>
            <option value="Equipment_Other">Other Equipment</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Samples Collected:<br></br>
          <select value={Sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">-- Please select an option --</option>
            <option value="samplescollected_true">Yes</option>
            <option value="samplescollected_false">No</option>
          </select>
        </label>
        <br />
        <br></br>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br />

      <div className="">
        {prediction ? <p>{prediction}</p> : 'Please Submit a Prediction'}
      </div>
    </>
  );
};
