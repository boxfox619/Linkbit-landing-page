import axios from 'axios';
import { HOST } from 'util/const';

export const getAccountAddress = async (linkaddress: string, symbol: string) => {
    const res = await axios.get(`${HOST}/link?linkaddress=${linkaddress}&symbol=${symbol}`)
    if (res.status === 200) {
        return res.data.address
    }
}
