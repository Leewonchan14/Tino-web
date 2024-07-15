import { Api } from "./common.controller";

class ImageController extends Api {
  // 이미지 업로드
  uploadImage = async ({ file }) => {
    // return await delayFetch({
    //   fetcherPromise: Promise.resolve({
    //     data: {
    //       url: URL.createObjectURL(file),
    //     },
    //   }),
    //   milliseconds: 500,
    // });

    return await this.post(
      "/Image",
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // const formData = new FormData();
    // formData.append("file", file);
    // console.log(formData);
    // return await this.post("/Image", {
    //   data: formData,
    //   // data: { file },
    //   content_type: "multipart/form-data",
    // });
  };
}

export default new ImageController();
