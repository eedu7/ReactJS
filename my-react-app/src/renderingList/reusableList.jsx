/* eslint-disable */
import "./list.css"
import PropTypes from "prop-types";

function List(props) {
    const itemList = props.items;

    const listItems = itemList.map(
        item => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>
    )
    return (
        <>
            <h3 className="list-category">{props.category}</h3>
            <uL className="list-item">
                {listItems}
            </uL>
        </>
    )

}

List.propTypes = {
    "category": PropTypes.string,
    "items": PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.number, "name": PropTypes.string, "calories": PropTypes.number
    }))
}

List.defaultProps = {
    "category": "Category",
    "items": []

}


export default List;