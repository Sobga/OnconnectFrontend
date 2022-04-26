export const handleResponse = (response: Response, returnEmptyBody: boolean = false) => {
     if (!response.ok) {
      const error = { ...response, status: response.status, statusText: response.statusText };
      return Promise.reject(error);
    }
    return response.text().then(function (text: any) {
      return text ? JSON.parse(text) : undefined;
    });
  };