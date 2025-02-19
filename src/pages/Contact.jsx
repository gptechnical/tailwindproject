import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Minimum 2 characters").max(30, "Maximum 30 characters").required("Username is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().required("Message is required").min(10, "Must be at least 10 characters"),
    }),
    onSubmit: (values, {resetForm}) => {
         console.log("Contact Data:", values);
         alert("Contact form successful!");
         resetForm();
    },
  });

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
           <h2 className='text-2xl font-bold text-center text-gray-700'>Contact Us</h2>
             <form onSubmit={formik.handleSubmit} className='mt-4'>
              <div className='mb-4'>
                <label htmlFor="" className='block text-sm font-medium text-gray-600'>
                  Username
                </label>
                <input 
                type="text" 
                name='name'
                placeholder='Enter your username' 
                className={`w-full p-2 mt-1 border rounded ${
                  formik.touched.name && formik.errors.name
                  ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className='text-xs text-red-500 mt-1'>{formik.errors.name}</p>
                )}
              </div>

              <div className='mb-4'>
                <label htmlFor="" className='block text-sm font-medium text-gray-600'>
                  Email
                </label>
                <input 
                type="email"
                name='email'
                placeholder='Enter your email'
                className={`w-full p-2 mt-1 border rounded ${
                  formik.touched.email && formik.errors.email
                  ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("email")}
                 />
                  {formik.touched.email && formik.errors.email && (
                  <p className='text-xs text-red-500 mt-1'>{formik.errors.email}</p>
                )}
              </div>
              <div className='mb-4'>
                  <label htmlFor="" className='block text-sm font-medium text-gray-600'>Message</label>
                  <textarea name="message" id="message" 
                  className={`w-full p-2 mt-1 border rounded ${
                    formik.touched.message && formik.errors.message
                    ? "border-red-500" : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("message")}
                  >

                  </textarea>
                  {formik.touched.message && formik.errors.message && (
                  <p className='text-xs text-red-500 mt-1'>{formik.errors.message}</p>
                )}
              </div>
              <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-950 rounded hover: bg-red-950"
              >
                Send
              </button>
             </form>
        </div>
      </div>
    </>
  )
}

export default Contact
