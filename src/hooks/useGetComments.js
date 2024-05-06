import CommentController from "../api/comment.controller";
import {useState} from "react";

const useGetComments = ({gameId}) => {
    const [comments, setComments] = useState([{
        "reviewId": 224,
        "reviewContent": "테스트",
        "star": 0,
        "helpful": 0,
        "dateTime": "2024-01-14T17:48:05.414",
        "user": {
            "userId": "1",
            "nickname": "nick 1",
            "email": "test1@test.com",
            "profileImageURL": "https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png",
            "parentMajor": "컴퓨터공학부",
            "major": "컴퓨터공학과",
            "role": "USER"
        },
        "gameId": 51
    }])



    const findAllComments = async ({gameId}) => {
        return await
            CommentController.findAll({gameId});
    }

}