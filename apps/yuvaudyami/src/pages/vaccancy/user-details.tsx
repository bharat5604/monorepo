import React from "react";
import { Section } from "../../components/Layout";

type Props = {};

function UserDetails({}: Props) {
  return (
    <div className="my-12">
      <Section>
        <div className="grid grid-cols-12 my-12 gap-4">
          <div className="col-span-6 shadow-sm border border-gray-200 rounded-md overflow-hidden">
            <p className="bg-gray-100 text-xl font-semibold px-4 py-2 border-b border-gray-300">
              Select a Job you want to apply for
            </p>
            <div className="p-4">
              <div className="col-span-6 sm:col-span-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-3 shadow-sm focus:border-dark focus:outline-none focus:ring-dark sm:text-lg"
                >
                  <option>Please Select</option>
                  <option>Job1</option>
                  <option>Job2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-6 shadow-sm border border-gray-200 rounded-md overflow-hidden">
            <p className="bg-gray-100 text-xl font-semibold px-4 py-2 border-b border-gray-300">
              Select State you want to apply for
            </p>
            <div className="p-4">
              <div className="col-span-6 sm:col-span-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-3 shadow-sm focus:border-dark focus:outline-none focus:ring-dark sm:text-lg"
                >
                  <option>Please Select</option>
                  <option>Job1</option>
                  <option>Job2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-12 shadow-sm border border-gray-200 rounded-md overflow-hidden">
            <p className="bg-gray-100 text-xl font-semibold px-4 py-2 border-b border-gray-300">
              Address Details
            </p>
            <div className="p-4 space-y-4">
              <div>
                <label htmlFor="about" className="block font-medium text-gray-700">
                  Address / पता
                </label>
                <div className="mt-2">
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State / राज्य
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-4">
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                    District / जिला
                  </label>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-4">
                  <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
                    Pin Code / पिन कोड
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    id="pinCode"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 shadow-sm border border-gray-200 rounded-md overflow-hidden">
            <p className="bg-gray-100 text-xl font-semibold px-4 py-2 border-b border-gray-300">
              Personal Details
            </p>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name / पहला नाम
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name / आखरी नाम
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                    {`Father's Name / पिता का नाम`}
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                    {`Mother's Name / माता का नाम`}
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    id="motherName"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number / फोन नंबर
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                    Date of Birth / जन्म तिथि
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-12">
                  <label htmlFor="emailId" className="block text-sm font-medium text-gray-700">
                    Email / ई - मेल
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    id="emailId"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-6">
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">Gender</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="male"
                          name="gender"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="male"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="female"
                          name="gender"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="female"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="other"
                          name="gender"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="other"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-6">
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">
                      Religion
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="hindu"
                          name="religion"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="hindu"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Hindu / हिंदू
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="muslim"
                          name="religion"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="muslim"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Muslim / मुस्लिम
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sikh"
                          name="religion"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="sikh"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Sikh / सीख
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="christian"
                          name="religion"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="christian"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Christian / इसाई
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="category"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Category /जाति
                  </label>
                  <select
                    id="category"
                    name="category"
                    autoComplete="category"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-3 shadow-sm focus:border-dark focus:outline-none focus:ring-dark sm:text-lg"
                  >
                    <option>Category</option>
                    <option>Job1</option>
                    <option>Job2</option>
                  </select>
                </div>
                <div className="col-span-12">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Experience / अनुभव
                  </label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border px-4 py-2 border-gray-300 shadow-sm outline-none focus:border-dark focus:ring-dark"
                  />
                </div>
                <div className="col-span-12">
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">
                      Do you want to job Outside India? / बाहर देश में काम करना चाहते है?
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="yes"
                          name="location"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="yes"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="no"
                          name="location"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="no"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-12">
                  <fieldset>
                    <legend className="sr-only">Qulification Details</legend>
                    <div className="text-xl font-semibold text-gray-900" aria-hidden="true">
                      Qulification Details
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="junior"
                            name="junior"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="junior" className="font-medium text-gray-700">
                            Junior Secondary(8th)
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="secondary"
                            name="secondary"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="secondary" className="font-medium text-gray-700">
                            Secondary(10th)
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="seniorSecondary"
                            name="seniorSecondary"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="seniorSecondary" className="font-medium text-gray-700">
                            Senior Secondary(12th)
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="graduate"
                            name="graduate"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="graduate" className="font-medium text-gray-700">
                            Graduate
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="postGraduate"
                            name="postGraduate"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="postGraduate" className="font-medium text-gray-700">
                            Post Graduate
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-12">
                  <legend className="sr-only">Qulification Details</legend>
                  <div className="text-xl font-semibold text-gray-900" aria-hidden="true">
                    Documentation Details
                  </div>
                  <div className="mt-4 space-y-1">
                    <label className="block font-semibold text-gray-700">Signature</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <label className="block font-semibold text-gray-700">Signature</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="signature"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a signature</span>
                            <input
                              id="signature"
                              name="signature"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <label className="block font-semibold text-gray-700">Photograph</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="photograph"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a photograph</span>
                            <input
                              id="photograph"
                              name="photograph"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <label className="block font-semibold text-gray-700">Aadhar Card Front</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="aadharFront"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="aadharFront"
                              name="aadharFront"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <label className="block font-semibold text-gray-700">Aadhar Card Back</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="aadharBack"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="aadharBack"
                              name="aadharBack"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-dark py-2 px-4 font-medium text-white shadow-sm hover:bg-dark/95 focus:outline-none focus:ring-2 focus:ring-dark/90 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </Section>
    </div>
  );
}

export default UserDetails;
