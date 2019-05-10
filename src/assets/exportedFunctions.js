export function updateTaskCounter(data, status) {
  const completed = {};

  Object.keys(data).forEach(area => {
    completed[area] = data[area].reduce(
      ([done, total], v) => [v.done ? ++done : done, ++total],
      [0, 0],
    );
  });

  return {[status]: completed};
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

export function persistState({
  data,
  alltaskData,
  currentProfile,
  playthroughCollapse,
}) {
  localStorage.setItem(
    'playthroughChecklist',
    JSON.stringify(
      storageUpdateHelper(data, currentProfile, 'playthroughChecklist'),
    ),
  );
  localStorage.setItem(
    'alltaskChecklist',
    JSON.stringify(
      storageUpdateHelper(alltaskData, currentProfile, 'alltaskChecklist'),
    ),
  );
  localStorage.setItem('currentProfile', currentProfile);
  localStorage.setItem('collapse1', JSON.stringify(playthroughCollapse));
}

export function storageUpdateHelper(data, currentProfile, checklistName) {
  const tempObj = {};

  Object.keys(data).forEach(section => {
    tempObj[section] = data[section].reduce((obj, value) => {
      obj[value.id] = value.done;
      return obj;
    }, {});
  });

  return {
    ...JSON.parse(localStorage.getItem(checklistName)),
    [currentProfile]: tempObj,
  };
}

export function loadMergeData(parsedSourceObj, checklistName, profileName) {
  const loadedObj = JSON.parse(localStorage.getItem(checklistName))[
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
  console.log(temp);

  temp[profile] = {
    ...collapseObj[profile],
    ...isOpenObj,
  };

  return temp;
}
