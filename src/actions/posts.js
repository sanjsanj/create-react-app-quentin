export const types = {
  CREATE: "POST_CREATE",
  DELETE: "POST_DELETE",
  UPDATE: "POST_UPDATE",
}

export const actions = {
  create(message, author) {
    return{
      type: types.CREATE,
      message,
      author,
    };
  },
  delete(id) {
    return {
      type: types.DELETE,
      id,
    };
  },
  update(id, message) {
    return {
      type: types.UPDATE,
      id,
      message,
    };
  },
};
