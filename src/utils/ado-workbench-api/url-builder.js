import defaultConfig from './config';

function buildUrl(endpoint, params = {}, customConfig = {}) {
  const config = getConfig(customConfig);
  let url = buildBaseUrl(config, endpoint, params);
  url = addQueryParams(url, params, config);

  console.log('GENERATED URL:', url)

  return url;
}

function buildBaseUrl(config, endpoint) {
  let url = `${config.endpoint}/${config.apiVersion}`;

  url += endpoint;
  return url;
}


function addQueryParams(url, params) {
  let queryParams = ``;

  if (params.query) {
    const serializedParams = serializeQueryParams(params.query);
    if (serializedParams) {
      queryParams += `&${serializedParams}`;
    }
  }

  return `${url}?${queryParams}`;
}


function getConfig(customConfig) {
    return { ...defaultConfig, ...customConfig };
}

function serializeQueryParams(params) {
  const query = [];
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      query.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    }
  }
  return query.join('&');
}

export default buildUrl;
