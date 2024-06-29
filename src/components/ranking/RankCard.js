const RankCard = ({ rank, picture, score, text }) => {
  return (
    <tr className={"w-full h-22 items-center border-b border-gray-200"}>
      <td className={"text-center w-24"}>{rank}</td>
      <td className={""}>
        <div className={"flex items-center"}>
          <picture
            className={
              "flex h-16 w-16 rounded-full border-2 bg-white overflow-clip"
            }
          >
            <img
              draggable={false}
              src={picture}
              alt={"logo"}
              className={"object-cover"}
            />
          </picture>
          {text}
        </div>
      </td>
      <td
        className={
          "flex flex-col h-16 items-center justify-center line-clamp-2 text-center"
        }
      >
        {score}
      </td>
    </tr>
  );
};
export default RankCard;
