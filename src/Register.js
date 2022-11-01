import React, { useState } from "react";
import axios from "axios";


function App() {

  // var bodyFormData = new FormData();
  // bodyFormData.append('firstName', 'Freed');
  // let data = {"firstName": "Hassan Mehmood"}

  // axios({
  //   method: "POST",
  //   url: "http://localhost:5000/add",
  //   data: data,
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then(function (response) {
  //     //handle success
  //     console.log(response);
  //   })
  //   .catch(function (response) {
  //     //handle error
  //     console.log(response);
  //   });


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("http://localhost:5000/add", {
  //       method: "POST",
  //       body: {
  //         name: name,
  //         email: email,
  //         // mobileNumber: mobileNumber,
  //       },
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setName("");
  //       setEmail("");
  //       // setMessage("User created successfully");
  //     } else {
  //       // setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  // let initialState = {
  //   name: "LearnBestCoding",
  //   email: "abc@learnbestcoding.com"
  // }
  // const [name, setName] = useState(initialState)
  // const [response, setResponse] = useState()

  // const submitForm = (e) => {
  //   e.preventDefault()
  //   axios.post(`http://localhost:5000/add`, name)
  //   .then((response) => {
  //     setResponse(response.data)
  //     console.log(response.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  // const onChangeHandler = (event) => {
  //   const {name, value} = event
  //     setName((prev) => {
  //       return {...prev, [name]: value}
  //     })
  // }

  // const [firstName, setFName] = useState("");
  // const [eMail, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [Age, setAge] = useState("");

  // // const [firstName, setFName] = useState("");
  // useEffect(() => {
  //   console.log(firstName);
  // }, [firstName, eMail, gender, Age]);
  // const handleSumbit = async (e) => {
  //   e.preventDefault();
  //   console.log(firstName);
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT fefege...'
  //   }
    
  //   let user = {
  //     "firstName": "firstName",
  //     "eMail": "eMail"
  //   };
  //   user = JSON.stringify(user);
  //   await axios.post(`http://localhost:5000/add`, user, {
  //     headers: headers
  //   });
  // };
const url = "/reg"

const [data, setData] = useState({
  name: "",
  email: "",
  password: "",
  gender: "",
  age: "",
  file: ""
})

var formData = new FormData();
formData.append("name", data.name);
formData.append("email", data.email);
formData.append("password", data.password);
formData.append("gender", data.gender);
formData.append("age", data.age);
formData.append("file", data.file);


function submit(e){
  e.preventDefault();
  axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
  .then(res => {
    console.log(res.data)
  })
}

function handle(e){
  const newData={...data}
  newData[e.target.id] = e.target.value
  setData(newData)
  console.log(newData)
}

function handleFile(e){
  const newData={...data}
  newData[e.target.id] = e.target.files[0]
  setData(newData)
  console.log(newData)
}
  return (
    <div className="pt-20">
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-blue-500">
                Facial Recognition Registeration
              </h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form onSubmit={(e) => submit(e)}> 
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  User Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => handle(e)}
                    value={data.name} 
                    // onChange={(e) => setName(e.target.value)}
                    // onChange={(e) => onChangeHandler(e.target)}

                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => handle(e)}
                    value={data.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => handle(e)}
                    value={data.password}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Gender
                </label>
                <div className="relative w-full lg:max-w-sm">
                  <select id="gender"
                  name="gender"
                    onChange={(e) => handle(e)}
                    value={data.gender} 
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Age
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={(e) => handle(e)}
                    value={data.age}
                    // onChange={(e) => setAge(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <input
                  type="file"
                  // name="file"
                  id="file"
                  onChange={handleFile}
                  // value={data.file}
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  placeholder="Upload Picture"
                />
              </div>
              <div className="flex items-center justify-end mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
