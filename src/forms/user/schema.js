import * as yup from 'yup';
export const shape = {
    login: yup.string().required(),
    password: yup.string(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    patronymic: yup.string().required(),
    gender: yup.string().oneOf(['М', 'Ж']).required(),
    age_group: yup.string().oneOf(['L1', 'L2']).required()
};
const regSchema = yup.object().shape(shape);

export default regSchema;