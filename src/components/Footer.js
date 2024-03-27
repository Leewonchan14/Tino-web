import React from 'react';

function Footer({...rest}) {
    return (
        <div className={"my-16"}>
            <span>개인정보처리방침</span>
            <span className={"ml-4"}>서비스 이용약관</span>
        </div>
    );
}

export default Footer;