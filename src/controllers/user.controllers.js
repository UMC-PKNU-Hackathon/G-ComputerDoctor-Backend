import { response } from 'file:///C:/UMC-Node.js/test_folder/config/response.js';
import { status } from 'file:///C:/UMC-Node.js/test_folder/config/response.status.js';
import { joinUser } from 'file:///C:/UMC-Node.js/test_folder/src/services/user.service.js';

export const userSignin = async (req, res, next) => {
    const signIn = req.body;
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", signIn); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const userLogin = async (req, res, next) => {
    const logIn = req.body;
    console.log("로그인을 요청하였습니다!");
    console.log("body:", logIn); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}