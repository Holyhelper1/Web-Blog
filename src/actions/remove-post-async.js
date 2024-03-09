import { setPostData } from './set-post-data';

export const removePostAsync = (requestServer, id) => () => requestServer('removePost', id)
