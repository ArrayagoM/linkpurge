const URL_TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  '_ga',
  'ref',
  's_cid',
  'mc_eid',
  '_hsenc',
  'yclid',
  'igshid',
  'src_id',
  'aff_id',
];

/**
 * Limpia un URL eliminando parámetros de seguimiento conocidos y reporta lo eliminado.
 * @param {string} urlString El URL sucio.
 * @returns {object} { cleanedUrl, originalUrl, removedParams, error }
 */
function cleanURL(urlString) {
  const response = {
    cleanedUrl: null,
    originalUrl: urlString.trim(),
    removedParams: [],
    error: null,
  };

  if (!urlString || typeof urlString !== 'string' || urlString.trim() === '') {
    response.error = 'ERROR: Cadena de URL vacía o inválida.';
    return response;
  }

  try {
    const urlObj = new URL(urlString.trim());
    const paramsToKeep = new URLSearchParams();

    for (const [key, value] of urlObj.searchParams.entries()) {
      if (URL_TRACKING_PARAMS.includes(key.toLowerCase())) {
        response.removedParams.push(`${key}=${value}`);
      } else {
        paramsToKeep.append(key, value);
      }
    }

    urlObj.search = paramsToKeep.toString();
    response.cleanedUrl = urlObj.href;

    return response;
  } catch (e) {
    response.error = 'ERROR: Asegúrate de que has pegado un URL válido.';
    return response;
  }
}
