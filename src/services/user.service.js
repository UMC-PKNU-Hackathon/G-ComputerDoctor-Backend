import { BaseError } from "file:///C:/UMC-Node.js/test_folder/config/error.js";
import { status } from "file:///C:/UMC-Node.js/test_folder/config/response.status.js";
import { signinResponseDTO } from "file:///C:/UMC-Node.js/test_folder/src/dtos/user.response.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "file:///C:/UMC-Node.js/test_folder/src/models/user.dao.js";

export const joinUser = async (body) => {

    const joinUserData = await addUser({
        'name': body.name,
        'gender': body.gender,
        'age': body.age,
        'nickname': body.nickname,
        'email': body.email,
        'coin' : body.coin,
        'phone': body.phone
    });
    
    console.log(3, joinUserData);
    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return signinResponseDTO(await getUser(joinUserData));
    }
}

export const loginUser = async (body) => {

    const loginUserData = await 
}