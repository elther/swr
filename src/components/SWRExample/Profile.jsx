import axios from 'axios'
import react from 'react'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export default function Profile() {
    const { data, error } = useSWR('/api/user/123', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
}