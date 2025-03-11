import React, { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    area: "",
    city: "",
    state: "",
    postCode: "",
    school: "",
    grade: "",
    experience: "",
    learningMode: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mandatoryFields = [
      "fullName",
      "dob",
      "gender",
      "email",
      "phone",
      "area",
      "city",
      "state",
      "postCode",
      "grade",
      "experience",
      "learningMode",
    ];

    let isValid = true;
    let errorMessage = "";

    mandatoryFields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        errorMessage = "Please fill out all mandatory fields.";
      }
    });

    if (isValid && !validateEmail(formData.email)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }

    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    } else {
      setErrorMessage("");
    }

    try {
      const response = await fetch(`${BACKEND_URL}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode:"cors",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          fullName: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          area: "",
          city: "",
          state: "",
          postCode: "",
          school: "",
          grade: "",
          experience: "",
          learningMode: "",
        });

        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 3000);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen p-4 sm:p-6 font-robotoFlex">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 sm:p-6 z-50">
          <div className="bg-gray-800 backdrop-blur-md rounded-2xl border border-gray-700 p-6 sm:p-8 shadow-xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-300 mb-6">
              Thank you for Registering, Our Team will contact you via email!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition transform duration-200 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <div className="w-full max-w-4xl bg-gray-800 backdrop-blur-md rounded-2xl border border-gray-700 p-4 sm:p-8 shadow-xl relative">
        <div className="flex justify-center mb-4 sm:mb-6">
          <h1 className="text-indigo-400 font-quicksand font-bold text-3xl sm:text-4xl">
            Roboloom
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Full Name <span className="text-red-500 required-star">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Date of Birth <span className="text-red-500 required-star">*</span>
                </label>
                <div className="relative mt-1 sm:mt-2">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 cursor-pointer appearance-none shadow-md"
                    style={{
                      colorScheme: "dark",
                      WebkitCalendarPickerIndicator: "invert(1)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Gender <span className="text-red-500 required-star">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="" className="text-black">
                    Select Gender
                  </option>
                  <option value="Male" className="text-black">
                    Male
                  </option>
                  <option value="Female" className="text-black">
                    Female
                  </option>
                  <option value="Other" className="text-black">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email Address <span className="text-red-500 required-star">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Phone Number <span className="text-red-500 required-star">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300">
                  Address Details <span className="text-red-500 required-star">*</span>
                </label>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <input
                    type="text"
                    name="area"
                    placeholder="Area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="text"
                    name="postCode"
                    placeholder="Post Code"
                    value={formData.postCode}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  School Name (Optional)
                </label>
                <input
                  type="text"
                  name="school"
                  placeholder="Enter your school name"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Grade/Class <span className="text-red-500 required-star">*</span>
                </label>
                <input
                  type="text"
                  name="grade"
                  placeholder="Enter your grade/class"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Previous Robotics Experience{" "}
                  <span className="text-red-500 required-star">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="" className="text-black">
                    Select Experience
                  </option>
                  <option value="Beginner" className="text-black">
                    Beginner
                  </option>
                  <option value="Intermediate" className="text-black">
                    Intermediate
                  </option>
                  <option value="Advanced" className="text-black">
                    Advanced
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Learning Mode <span className="text-red-500 required-star">*</span>
                </label>
                <select
                  name="learningMode"
                  value={formData.learningMode}
                  onChange={handleInputChange}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 backdrop-blur-sm border border-gray-600 text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 shadow-lg hover:bg-gray-600 transition-all duration-200"
                >
                  <option value="" className="text-black">
                    Select Learning Mode
                  </option>
                  <option value="Self-paced" className="text-black">
                    Self-paced
                  </option>
                  <option value="Live sessions" className="text-black">
                    Live sessions
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}

          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              type="submit"
              className="w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition transform duration-200 ease-in-out"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;