export const signinResponseDTO = (user) => {
    return {
    'name': user[0].name,
    'gender': user[0].gender,
    'age': user[0].age,
    'nickname': user[0].nickname,
    'email': user[0].email,
    'coin' : user[0].coin,
    'phone': user[0].phone
    };
}