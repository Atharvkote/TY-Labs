import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const Images = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = () => {
    const url = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 10000)}`;
    setImageUrl(url);
    // imageUrl ?
    //   toast.success("Image fetched successfully!")
    //   : toast.success("Failed To Fetch Image !!");
  };

  useEffect(() => {
    fetchImage();
    const interval = setInterval(fetchImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Random Image</h2>
      <p className="news-sub">Get a Random Images Every 5 sec</p>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Random"
          className="image"
        />
      ) : (
       <div className="news-sub">No Image Found</div>
      )}
    </div>
  );
};

export default Images;
