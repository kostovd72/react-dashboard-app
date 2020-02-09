import apiFetch from '../utils/apiFetch';

export function loadDashboard() {
  return apiFetch(
    'GET',
    { endPoint: 'views' },
  );
}

export function loadDashboardView(id, param) {
  return apiFetch(
    'GET',
    { endPoint: `views/${id}` },
    param,
  );
}

export function loadFilters() {
  return apiFetch(
    'GET',
    { endPoint: 'views/filters' },
  );
}


export function saveGraph(data) {
  if (data.graphId === 0) {
    return apiFetch(
      'POST',
      { endPoint: `views/${data.viewId}/graph` },
      data,
    );
  }
  return apiFetch(
    'PUT',
    { endPoint: `views/${data.viewId}/graph/${data.graphId}` },
    data,
  );
}

export function saveDashboard(data) {
  if (!data.viewId || data.viewId === 0) {
    return apiFetch(
      'POST',
      { endPoint: 'views' },
      data,
    );
  }
  return apiFetch(
    'PUT',
    { endPoint: `views/${data.viewId}` },
    data,
  );
}

export function deleteGraph() {
}

export function loadOptions() {
  return apiFetch(
    'GET',
    { endPoint: 'views/graph/types' },
  );
}
