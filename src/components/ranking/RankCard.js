const RankCard = ({rank, picture, score, text}) => {
    return (
        <article className={"w-full h-20 py-2 flex flex-row items-center border-b border-gray-200"}>
            <span className={"font-bold text-center text-gray-500 w-[15%]"}>{rank}</span>
            <div className={"w-[35%] h-full flex"}>
                <picture
                    className={"flex h-16 w-16 rounded-full border-2 bg-white overflow-clip"}>
                    <img draggable={false} src={picture} alt={"logo"}
                         className={"h-full object-cover"}/>
                </picture>
                <span className={"flex ml-4 items-center text-gray-500 line-clamp-1"}>{text}</span>
            </div>
            <span className={"flex w-[50%] justify-center text-gray-500"}>{score}</span>
        </article>
    );
}
export default RankCard;