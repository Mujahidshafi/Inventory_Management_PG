import React from "react";
import "../App.css";
import Layout from "../components/layout";

function transfer() {

    return (
        <Layout title="Transfer">
            <span>Content
                <div className="absolute top-[300px] left-[70px] p-4">
                <form className="max-w-sm mx-auto">
                    <label htmlFor="locations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer From</label>
                        <select id="locations"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Location</option>
                            <option value="l1">Location 1</option>
                            <option value="l2">Location 2</option>
                            <option value="l3">Location 3</option>
                            <option value="l4">Location 4</option>
                        </select>
                </form>
                </div>
                <div className="absolute top-[300px] left-[250px] p-4">
                <form className="max-w-sm mx-auto">
                    <label htmlFor="locations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer To</label>
                        <select id="locations" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><option selected>Choose a Location</option>
                            <option value="l1">Location 1</option>
                            <option value="l2">Location 2</option>
                            <option value="l3">Location 3</option>
                            <option value="l4">Location 4</option>
                        </select>
                </form>
                </div>
                <div className="absolute top-[300px] left-[430px] p-4">
                    <label for="Weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                    <input type="text" id="weight" class="bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0lb" required />
                </div>
                <div className="absolute top-[300px] left-[620px] p-4">
                    <form className="max-w-[8rem] mx-auto">
                        <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                            clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <input type="time" id="time"
                                className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                min="09:00" max="18:00" value="00:00" required/>
                            </div>
                    </form>
                </div>
                <div className="absolute top-[300px] left-[770px] p-4">
                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select date:</label>
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <input datepicker id="default-datepicker" type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Select date"/>
                    </div>
                </div>
            </span>
        </Layout>
    );
}

export default transfer;