export const checkLanguage = (Text) => {
    const lang = getLanguage();
    switch (lang) {
        case 'th':
            return Text.th;
        case 'en' :
            return Text.en;
    }
};

export const getLanguage = () => {
    return localStorage.getItem('language');
};

export const setDefaultLanguage = () => {
    return localStorage.setItem('language', 'en');
};

export const saveLanguageToStorage = (lang) => {
    localStorage.setItem('language', lang);
};