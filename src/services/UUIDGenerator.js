import { v4 } from 'uuid';
const generateUUID = v4;
export const generate = () => generateUUID();
export default generateUUID;