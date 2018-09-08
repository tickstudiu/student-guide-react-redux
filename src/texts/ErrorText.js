export const errorPasswordConfirm = () => {
    return {
        th: 'กรุณากรอกรหัสผ่านให้ตรงกัน',
        en: 'password and password Confirm must same'
    }
};

export const selectRegisterError = (message) => {
    switch (message) {
        case 'name or email or phone or username or password not found':
            return errorInputRegisterIsRequired();
        case 'Bad Request':
            return errorIshaveUserinDatabase();
        default:
            return '';
    }
};

export const errorInputRegisterIsRequired = () => {
    return {
        th: 'ชื่อหรืออีเมลล์หรือโทรศัพท์หรือชื่อผู้ใช้หรือรหัสผ่านที่ไม่พบ',
        en: 'name or email or phone or username or password not found'
    }
};

export const errorIshaveUserinDatabase = () => {
    return {
        th: 'ข้อมูลของท่านซ้ำ',
        en: 'your information is same'
    }
};

export const selectLoginError = (message) => {
    switch (message) {
        case 'username or password not found':
            return errorInputLoginIsRequired();
        case 'Unauthorized':
            return errorUnAuth();
        default:
            return '';
    }
};

export const errorInputLoginIsRequired = () => {
    return {
        th: 'กรุณากรอกชื่อผู้ใช้งาน หรือ รหัสผ่าน',
        en: 'username or password is Required'
    }
};

export const errorUnAuth = () => {
    return {
        th: 'ชื่อผู้ใช้งาน หรือ รหัสผ่านผิดพลาด',
        en: 'username or password incorrect'
    }
};