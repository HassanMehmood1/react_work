import React from "react";
import WebcamCapture from "./components/Webcam";
import axios from "axios";
import { margin } from "@mui/system";
// import { createGlobalState } from "react-hooks-global-state";

function App() {
  const url = "/login";
  const [imgSrc, setImgSrc] = React.useState(null);

  // const [setData, data] = createGlobalState({
  //   name: "",
  //   password: "",
  //   image: ""
  // })

  const [data, setData] = React.useState({
    name: "",
    password: "",
    image: "",
  });

  // formData.append("image", imgSrc)
  // console.log(formData)

  const handleOnCapturePhoto = (img) => {
    setImgSrc(img);
    // console.log(img);
    // console.log(imgSrc)
    // setData({...data, name:img.target.name, password: img.target.password, image:img})

    const newData = { ...data };
    // newData[e.target.id] = e.target.value
    newData["image"] = img;
    setData((pre) => ({ ...pre, image: img }));
    // console.log(data)
    // console.log(newData)
    // console.log(img)
  };

  function handle(e) {
    const newData = { ...data };
    // console.log(data)
    // console.log(newData)
    // data['name'] = e.target.name
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data)
    // console.log(newData);
  }

  function submit(e) {
    console.log("Here iss satte ", data);
    var formData = new FormData();
    formData.append("name", data.name);
    formData.append("password", data.password);
    formData.append("image", data.image);
    console.log("calling submit fun", formData);

    // return;
    e.preventDefault();
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div className="pt-20">
      <div className="mt-10 max-w-xs">
        <form
        // onSubmit={(e) => submit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"/>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            onChange={(e) => handle(e)}
            value={data.name}
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            onChange={(e) => handle(e)}
            value={data.password}
            placeholder="******************"
          />
          <p className=" text-xs italic">Please choose a password.</p>
        </div>
        <div
          // id="image"
          // name="image"
          // onChange={(e) => handle(e)}
          // value={data.image}
          className="flex items-center justify-between"
        >
          <WebcamCapture onCapture={handleOnCapturePhoto} />
          {imgSrc && <img src={imgSrc} />}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => submit(e)}
          >
            Sign In
          </button>
        </div>
        {/* </form> */}
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Facial Recognition. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
