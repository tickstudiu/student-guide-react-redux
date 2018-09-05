import { toast } from 'react-toastify';

export const errorNotify = (errorMsg) => {
    return toast.error(errorMsg);
};