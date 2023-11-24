// models/user.sql.js

export const insertUserSql = "INSERT INTO user (name, gender, age, nickname, email, coin, phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE id = ?";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";


// "SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
// + "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
// + "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";