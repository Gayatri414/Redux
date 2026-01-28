import React from "react";

const ResultCard = ({ item, activeTab }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">

      {/* PHOTO CARD */}
      {activeTab === "photos" && (
        <img
          src={item.urls?.small}
          alt="result"
          className="w-full h-52 object-cover"
        />
      )}

      {/* VIDEO CARD */}
      {activeTab === "videos" && (
        <video
          src={item.video_files?.[0]?.link}
          controls
          className="w-full h-52 object-cover"
        />
      )}

      {/* INFO BAR */}
      <div className="p-3 text-sm text-gray-300">
        {activeTab === "photos" ? (
          <p>By: {item.user?.name}</p>
        ) : (
          <p>Duration: {item.duration}s</p>
        )}
      </div>

    </div>
  );
};

export default ResultCard;
