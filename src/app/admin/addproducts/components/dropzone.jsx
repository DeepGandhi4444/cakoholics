"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ images, setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setImages((prevImages) => {
        const newImages = acceptedFiles.filter(
          (file) => !prevImages.some((img) => img.name === file.name)
        );
        return [...prevImages, ...newImages];
      });
    },
    [setImages]
  );

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop images here, or click to select</p>
      </div>

      {/* Image Previews */}
      <div className="flex gap-2 mt-2">
        {images.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className="w-20 h-20 object-cover"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white px-1"
              onClick={() => removeImage(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropzone;
