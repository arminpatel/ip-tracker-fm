import Title from "./Title"
import Search from "./Search";

const Head = () => {
    return (
        <div className="head">
            <Title text="IP Address Tracker" />
            <Search />
        </div>
    )
}

export default Head;