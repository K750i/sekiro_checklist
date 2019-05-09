export function updateTaskCounter(data) {
  const completed = {};

  Object.keys(this.state.data).forEach(area => {
    completed[area] = this.state.data[area].reduce(
      ([done, total], v) => [v.done ? ++done : done, ++total],
      [0, 0],
    );
  });

  return {completionStatus: completed};
}

export function toggleCheckbox(data, id, section) {
  data[section].map(item => {
    if (item.id === id) {
      item.done = !item.done;
    }
    return item;
  });

  return data;
}

export function persistState({data, currentProfile, playthroughCollapse}) {
  localStorage.setItem(
    'playthroughChecklist',
    JSON.stringify(storageUpdateHelper(data, currentProfile)),
  );
  localStorage.setItem('currentProfile', currentProfile);
  localStorage.setItem('collapse1', JSON.stringify(playthroughCollapse));
}

export function storageUpdateHelper(data, currentProfile) {
  const tempObj = {};

  Object.keys(data).forEach(section => {
    tempObj[section] = data[section].reduce((obj, value) => {
      obj[value.id] = value.done;
      return obj;
    }, {});
  });

  return {
    ...JSON.parse(localStorage.getItem('playthroughChecklist')),
    [currentProfile]: tempObj,
  };
}

export function loadMergeData(parsedSourceObj, profileName) {
  const loadedObj = JSON.parse(localStorage.getItem('playthroughChecklist'))[
    profileName
  ];

  const merged = {};
  Object.keys(parsedSourceObj).forEach(section => {
    merged[section] = parsedSourceObj[section].map((obj, i) =>
      loadedObj[section].hasOwnProperty(obj.id)
        ? {...obj, done: loadedObj[section][obj.id]}
        : obj,
    );
  });

  return merged;
}

export function collapseSection(collapseObj, profile, isOpenObj) {
  const temp = {...collapseObj};

  temp[profile] = {
    ...collapseObj[profile],
    ...isOpenObj,
  };

  return temp;
}
