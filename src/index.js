export default (state = {}, action) => {
  const { type } = action;

  const matches = /[\w\/@\-\_]+(REQUEST|RECEIVE|ERROR)/gi.exec(type);

  if (!matches) {
    return Object.assign({}, state);
  }

  let key;
  key = type.match(/(?<=(REQUEST|RECEIVE|FAILURE)_)\w+/) || type.match(/(?<=(REQUEST|RECEIVE|FAILURE)_)\w+(?=(_ERROR))/);

  if (key) {
    const entity = {
      errors: []
    };

    let actionEntity = key[0];

    if (key[0].match(/\w+(?=_ERROR)/)) {
      actionEntity = actionEntity.match(/\w+(?=_ERROR)/)[0];
      actionEntity = actionEntity.toLowerCase();
      entity.isFetching = false;
      entity.isFetched = true;
      entity.errors = state[entity] ? [...state[entity].errors, action.error] : [action.error]
    } else {
      const actionType = key[1];
      actionEntity = actionEntity.toLowerCase();
      if(actionType === 'REQUEST') {
        entity.isFetching = true;
        entity.isFetched = false;
        entity.errors = []
      } else if (actionType === 'RECEIVE') {
        entity.isFetching = false;
        entity.isFetched = true;
        entity.errors = []
      }
    }
    const obj = {}
    obj[actionEntity] = entity
    return Object.assign({}, state, obj);
  }
  return Object.assign({}, state);
};
