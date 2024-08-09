import { Api } from "./common.controller";

class email_controller extends Api {
  // 인증코드 이메일 요청
  requestAuthCode = async (email) => {
    let body = { email };
    return await this.post(`/email`, body);
  };
}

const EmailController = new email_controller();

export default EmailController;
