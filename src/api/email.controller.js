import {Api} from "./common.controller";

class email_controller extends Api {

    // 인증코드 이메일 요청
    requestAuthCode = async (email) => {
        let data = {email}
        console.log(data);
        return await this.post(`/email`, {data: data});
    };
}

const EmailController = new email_controller()

export default EmailController;
