const Search = ({ search, handleChange }) => {
    return (
        <div>
            find countries <input value={search} onChange={handleChange} />
        </div>
    )
}

export default Search