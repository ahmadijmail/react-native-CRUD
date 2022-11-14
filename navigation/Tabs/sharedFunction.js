const getRouteName = (navigation) => {
  let screenName = navigation.getState()?.routes[0]?.state?.routes;
  try {
    return screenName[screenName.length - 1].name || 'home';
  } catch (e) {
    return e;
  }
};

export { getRouteName };
