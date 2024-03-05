import React, { useEffect, useState } from "react";

const Playground = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emptyAttachment, setEmptyAttachment] = useState(true);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      console.log(event.target.files);
    }
    // validateSelectedFile()
  };

  const validateSelectedFile = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    // for file limit
    const fileSizeKiloBytes = selectedFile.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than maximum limit");
      setIsSuccess(false);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
  };

  useEffect(() => {
    if (selectedFile != null) {
      validateSelectedFile();
      setEmptyAttachment(false);
    } else {
      // setIsSuccess(true);
      setEmptyAttachment(true);
    }
  }, [selectedFile]);

  return (
    <div className="App-container">
      <label
        htmlFor="dropzone-file"
        className="relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
      >
        <input
          id="dropzone-file"
          type="file"
          className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer text-sm font-semibold text-gray-500 dark:text-gray-400"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            aria-hidden="true"
            className="mb-3 h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
            strokeLinejoin
          </svg>
          <p className="text-md mb-2 font-semibold text-gray-500 dark:text-gray-400">
            Upload Files (optional)
          </p>

          <br />
          {isSuccess ? (
            <p className="text-sm font-semibold text-green-600">
              Validation successful
            </p>
          ) : emptyAttachment ? (
            ""
          ) : (
            <p className="text-sm font-semibold text-red-600">
              &nbsp;{errorMsg}&nbsp;
            </p>
          )}
          {/* <p className="text-sm text-red font-semibold">
            &nbsp;{errorMsg}&nbsp;
          </p> */}
          <br />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PDF or JPG (MAX. 5MB)
          </p>
        </div>
      </label>

      {isSuccess || emptyAttachment ? (
        <button
          type="submit"
          className="bg-transparent rounded-md py-2 px-6 border border-black mb-12  hover:bg-red-900 hover:text-white"
        >
          Submit
        </button>
      ) : (
        <button
          disabled
          type="submit"
          className="bg-transparent rounded-md py-2 px-6 border border-neutral-400 text-neutral-400 mb-12"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Playground;
