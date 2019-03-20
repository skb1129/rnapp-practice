const logModuleInfo = (source = '') => {
  const modules = require.getModules();
  const moduleIds = Object.keys(modules);
  const loadedModuleNames = moduleIds
    .filter(moduleId => modules[moduleId].isInitialized)
    .map(moduleId => modules[moduleId].verboseName);
  const waitingModuleNames = moduleIds
    .filter(moduleId => !modules[moduleId].isInitialized)
    .map(moduleId => modules[moduleId].verboseName);
  const bigModuleId = moduleIds.find(moduleId => modules[moduleId].verboseName.includes('TheHugeModule'))
  source && console.log('FROM', source);
  console.log('loaded:',loadedModuleNames.length,'waiting:',waitingModuleNames.length);
  console.log(modules[bigModuleId].verboseName, modules[bigModuleId].isInitialized ? 'is Loaded' : 'is Waiting');
};

export default logModuleInfo;