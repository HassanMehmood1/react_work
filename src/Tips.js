import React from "react";

function App() {
  return (
    <div className="pt-20">
      <div>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Tips
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <ol>
                  <li>Keep the Display clean</li>
                  <li>Your face should stand out</li>
                  <li>Keep an optimal distance</li>
                  <li>Be still</li>
                  <li>Don't reposition your face</li>
                  <li>Avoid thinngs that fever your face and eyes</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
