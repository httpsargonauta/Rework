import instance from "./axios-instance";

export const getDataApi = (endpoint) => {
    return instance.get(endpoint).then((response) => {
        return response.data;
    }).catch(err => {
        console.log(err);
        return err;
    })
}

export const postDataApi = (endpoint, data) => {
    return instance.post(endpoint, data).then((response) => {
        return response.data;
    }).catch(err => {
        console.log(err);
        return err;
    })
}

export const putDataApi = (endpoint, data) => {
    return instance.put(endpoint, data).then((response) => {
        return response.data;
    }).catch(err => {
        console.log(err);
        return err;
    })
}