import { useState } from "react";
import ImageController from "../../apis/image.controller";
import { delayFetch } from "../../utils/delay";

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleChangeImageUpload = async (e) => {
    if (!e.target.files) return;
    let file = e.target.files[0];
    let url;
    try {
      setIsUploading(true);
      let response = await delayFetch({
        fetcherPromise: ImageController.uploadImage({ file }),
        milliseconds: 500,
      });
      url = response.data.imageUrl;
    } catch (e) {
      console.error(e);
    } finally {
      setIsUploading(false);
    }

    return url;
  };

  return { isUploading, handleChangeImageUpload };
};
