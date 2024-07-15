import Skeleton from "react-loading-skeleton";
import { useRef } from "react";
import { useGetUser } from "../../hooks/header/useGetUser";
import { USER_OBJECT_KEY } from "../../utils/userConverter";
import { useImageUpload } from "../../hooks/image/useImageUpload";

export const ProfileImage = ({
  imageUrl,
  isActiveInput,
  handleOnChange,
}) => {
  let { isUploading, handleChangeImageUpload } = useImageUpload();

  return (
    <div className={"w-32 flex flex-col gap-3 text-xl"}>
      <ImageWithSkeleton
        imageUrl={imageUrl}
        isUploading={isUploading}
      />
      <ChangeImageButtonWithSkeleton
        isActiveInput={isActiveInput}
        isUploading={isUploading}
        handleChangeImageUpload={handleChangeImageUpload}
        handleOnChange={handleOnChange}
      />
      <div className={"w-full px-4 mobile:px-0"}></div>
    </div>
  );
};

const ImageWithSkeleton = ({ imageUrl, isUploading }) => {
  let { isFetching } = useGetUser();
  const renderImage = () => {
    if (isFetching || isUploading) {
      return (
        <Skeleton width={"100%"} height={"100%"} circle={true} />
      );
    }

    return (
      <img
        className={
          "float-left w-full h-full border-[1px] rounded-full shadow-lg object-cover"
        }
        src={imageUrl}
        alt={""}
      />
    );
  };

  return <div className={"w-32 h-32"}>{renderImage()}</div>;
};

const ChangeImageButtonWithSkeleton = ({
  isActiveInput,
  isUploading,
  handleOnChange,
  handleChangeImageUpload,
}) => {
  const imageInputRef = useRef(null);

  const onChangeInput = async (e) => {
    let url = await handleChangeImageUpload(e);
    if (!url) return;
    handleOnChange(USER_OBJECT_KEY.PROFILE_IMAGE_URL, url);
  };

  return (
    <>
      <button
        disabled={isUploading}
        className={`w-full font-G_MARKET h-10 text-lg bg-primary-600 rounded-lg text-white font-bold 
        ${isActiveInput ? "block" : "hidden"}
        ${isUploading && "blur-md"}
        `}
        onClick={() => imageInputRef.current.click()}
      >
        사진변경
      </button>
      <input
        ref={imageInputRef}
        className={"hidden"}
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="profileImageURL"
        onChange={onChangeInput}
      />
    </>
  );
};
