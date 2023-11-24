// models/user.dao.js

import { pool } from "file:///C:/UMC-Node.js/test_folder/config/db.connect.js";
import { BaseError } from "file:///C:/UMC-Node.js/test_folder/config/error.js";
import { status } from "file:///C:/UMC-Node.js/test_folder/config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID } from "file:///C:/UMC-Node.js/test_folder/src/models/user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();
        console.log(5);
        const [confirm] = await pool.query(confirmEmail, data.email);
        console.log(6);
        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }
        console.log(7);
        const result = await pool.query(insertUserSql, [data.name, data.gender, data.age, data.nickname, data.email, data.coin, data.phone]);

        conn.release();
        console.log(result[0].insertId);
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        console.log('getuser');
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log('user: ', user); // 제대로 가져왔는지 확인

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}