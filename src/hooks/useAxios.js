import React from "react";

export default function useAxios(configObj) {
    
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;

    const [response, setResponse] = React.useState([{}]);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const controller = new AbortController();

    const fetchData = async () => {
        try{
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: controller.signal
            })
            // console.log(res);
            setResponse(res.data);
        }catch (err) {
            // console.log(err.message);
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }


    React.useEffect( () => {
        
        fetchData();
        //useEffect cleanup function
        //return () => controller.abort();
        
    }, [])

    return [response, loading, error];
}