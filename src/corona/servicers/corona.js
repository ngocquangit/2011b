import axios from 'axios'

export const GetDataVirusCorona = async ()=> {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const result = response.status ===200? response.data :[];
    return result;
}

