import "./styles.css";

export const TextImput = ({handleChange,searchValue}) => {
    return(
    <input 
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder='Type your search'
    />
    )
}