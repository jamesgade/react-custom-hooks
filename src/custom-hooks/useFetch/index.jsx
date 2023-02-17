import useFetch from './useFetch'

const URL = 'https://jsonplaceholder.typicode.com/users'

const UseFetchExample = () => {
    const { data, loading, error } = useFetch(URL);

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR: {error}</p>
    return (
        <div>
            <h3>useFetch - fetch data from api</h3>
            {data && data.map(item => (
                <div key={item.id}>
                    <h5>{item.name}</h5>
                </div>
            ))}
        </div>
    )
}

export default UseFetchExample;
