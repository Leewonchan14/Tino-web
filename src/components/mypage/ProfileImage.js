import Skeleton from "react-loading-skeleton";
import { useEffect, useRef } from "react";

export const ProfileImage = ({ isFetching, profileImageURL }) => {
  const imageInputRef = useRef(null);

  return (
    <div className={"w-32 flex flex-col gap-3 text-xl"}>
      <ImageWithSkeleton
        isFetching={isFetching}
        profileImageURL={profileImageURL}
      />
      <ChangeImageButtonWithSkeleton
        isFetching={isFetching}
        imageInputRef={imageInputRef}
      />
      <div className={"w-full px-4 mobile:px-0"}></div>
    </div>
  );
};

const ImageWithSkeleton = ({ isFetching, profileImageURL }) => {
  if (isFetching) {
    return (
      <div className={"w-32 h-32"}>
        <Skeleton width={"100%"} height={"100%"} circle={true} />
      </div>
    );
  }
  return (
    <img
      className={
        "float-left w-full border-[1px] rounded-full shadow-lg object-cover"
      }
      src={profileImageURL}
    />
  );
};

const ChangeImageButtonWithSkeleton = ({ isFetching, imageInputRef }) => {
  if (isFetching) {
    return <Skeleton containerClassName={"w-full text-3xl"} />;
  }

  return (
    <button
      className={"w-full py-1 bg-primary-600 rounded-lg text-white font-bold"}
      onClick={() => {
        imageInputRef.current.click();
      }}
    >
      사진변경
      <input
        ref={imageInputRef}
        className={"hidden"}
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={(...e) => {
          console.log(e);
        }}
      />
    </button>
  );
};
