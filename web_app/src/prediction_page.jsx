import { useState } from 'react';
import axios from 'axios';

// interface FormData {
//   preservation_1: number;
//   preservation_2: number;
//   preservation_3: number;
//   preservation_4: number;
//   samplescollected_true: number;
// }

// interface ApiResponse {
//   success: boolean;
//   message: string;
// }

function MyForm() {
  const [preservation_1, setpreservation_1] = useState(0);
  const [preservation_2, setpreservation_2] = useState(0);
  const [preservation_3, setpreservation_3] = useState(0);
  const [preservation_4, setpreservation_4] = useState(0);
  const [samplescollected_true, setsamplescollected_true] = useState(0);
  const [message, setMessage] = useState('');

  //   let res = await fetch(
  //     'https://mummysupervised23.is404.net/predict-wrapping',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         preservation_1: preservation_1,
  //         preservation_2: preservation_2,
  //         preservation_3: preservation_3,
  //         preservation_4: preservation_4,
  //         samplescollected_true: samplescollected_true,
  //       }),
  //     },
  //   );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        'https://mummysupervised23.is404.net/predict-wrapping',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            preservation_1: preservation_1,
            preservation_2: preservation_2,
            preservation_3: preservation_3,
            preservation_4: preservation_4,
            samplescollected_true: samplescollected_true,
          }),
        },
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setpreservation_1(0);
        setpreservation_2(0);
        setpreservation_3(0);
        setpreservation_4(0);
        setsamplescollected_true(0);
        setMessage(resJson.prediction);
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={preservation_1}
          placeholder="Name"
          onChange={(e) => setpreservation_1(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          value={preservation_2}
          placeholder="Name"
          onChange={(e) => setpreservation_2(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          value={preservation_3}
          placeholder="Name"
          onChange={(e) => setpreservation_3(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          value={preservation_4}
          placeholder="Name"
          onChange={(e) => setpreservation_4(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          value={samplescollected_true}
          placeholder="Name"
          onChange={(e) => setsamplescollected_true(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default MyForm;
