import * as yup from 'yup';
export const shape = {
    dancer: yup.string()
};
const regSchema = yup.object().shape(shape);

export default regSchema;