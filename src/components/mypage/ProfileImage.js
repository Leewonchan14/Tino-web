import Skeleton from "react-loading-skeleton";
import { useRef } from "react";
import { imageFileToUrl } from "../../utils/image";
import { useGetUser } from "../../hooks/header/useGetUser";
import { USER_OBJECT_KEY } from "../../utils/userConverter";

export const ProfileImage = ({ imageUrl, handleOnChange }) => {
  return (
    <div className={"w-32 flex flex-col gap-3 text-xl"}>
      <ImageWithSkeleton imageUrl={imageUrl} />
      <ChangeImageButtonWithSkeleton
        handleOnChange={handleOnChange}
      />
      <div className={"w-full px-4 mobile:px-0"}></div>
    </div>
  );
};

const ImageWithSkeleton = ({ imageUrl }) => {
  let { isFetching } = useGetUser();
  const renderImage = () => {
    if (isFetching) {
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

const ChangeImageButtonWithSkeleton = ({ handleOnChange }) => {
  let { isFetching } = useGetUser();
  const imageInputRef = useRef(null);

  if (isFetching) {
    return <Skeleton containerClassName={"w-full text-3xl"} />;
  }

  const handleChangeImage = () => {
    let file = imageInputRef.current.files[0];
    handleOnChange(
      USER_OBJECT_KEY.PROFILE_IMAGE_URL,
      imageFileToUrl(file)
    );
  };

  return (
    <>
      <button
        className={
          "w-full font-G_MARKET h-10 text-lg bg-primary-600 rounded-lg text-white font-bold"
        }
        onClick={() => imageInputRef.current.click()}
      >
        사진변경
      </button>
      <input
        ref={imageInputRef}
        className={"hidden"}
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profileImageURL"
        onChange={handleChangeImage}
      />
    </>
  );
};
