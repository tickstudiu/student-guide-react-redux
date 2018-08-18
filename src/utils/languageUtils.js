export const checkLanguage = (lang, Text) => {
    switch (lang) {
        case 'th':
            return Text.th;
        case 'en' :
            return Text.en;
        default :
            return Text.en;
    }
};

export const getLanguage = () => {
    return localStorage.getItem('language');
};

export const saveLanguageToStorage = (lang) => {
    localStorage.setItem('language', lang);
};

export const setDefaultLanguage = () => {
    return localStorage.setItem('language', 'en');
};