import React, { useState } from "react";

export default function PhotoCard({ photo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const randomHeight =
    photo.height || `${Math.floor(Math.random() * (400 - 200 + 1)) + 200}px`;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photo.imageUrl;
    link.download = photo.title || "downloaded-image";
    link.click();
  };

  return (
    <div className="bg-white p-3 shadow-lg rounded-lg break-inside-avoid mb-4">
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full rounded-lg object-cover cursor-pointer"
        style={{
          height: randomHeight,
        }}
        onClick={handleImageClick}
      />

      {/* Modal for Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-full overflow-hidden">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="max-w-full max-h-[80vh] object-contain mb-4"
            />
            <div className="flex justify-center gap-5">
              <button
                onClick={handleDownload}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Open
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
