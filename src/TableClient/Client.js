import axios from "axios";

export async function getCountObjects(){
    const url = 'http://localhost:5001/api/v1/tableCount';
    const response = await axios.get(url);
    if (response.status === 200) {
        return response.data;
    }
    else {
        throw Error(response, response.status);
    }
}

export async function getObjects(){
    const url = `http://localhost:5001/api/v1/table?start=0&count=50`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response.data;
    }
    else {
        throw Error(response, response.status);
    }
}