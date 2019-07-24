import React, { Component } from "react"
import { createUltimatePagination } from "react-ultimate-pagination"

const Button = ({ value, isActive, disabled, onClick }) => (
    <button
        style={isActive ? { color: "blue" } : null}
        onClick={onClick}
        disabled={disabled}
    >
        {value}
    </button>
)

const PaginatedPage = createUltimatePagination({
    itemTypeToComponent: {
        PAGE: Button,
        ELLIPSIS: Ellipsis,
        FIRST_PAGE_LINK: FirstPageLink,
        PREVIOUS_PAGE_LINK: PreviousPageLink,
        NEXT_PAGE_LINK: NextPageLink,
        LAST_PAGE_LINK: LastPageLink
    }
})

function Ellipsis(props) {
    return <button onClick={props.onClick} disabled={props.disabled}>...</button>
}

function FirstPageLink(props) {
    return <button onClick={props.onClick} disabled={props.disabled}>First</button>
}

function PreviousPageLink(props) {
    return <button onClick={props.onClick} disabled={props.disabled}>Previous</button>
}

function NextPageLink(props) {
    return <button onClick={props.onClick} disabled={props.disabled}>Next</button>
}

function LastPageLink(props) {
    return <button onClick={props.onClick} disabled={props.disabled}>Last</button>
}

class DinoPagination extends Component {
    state = {
        page: 1,
        totalPages: 1
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalPages: Math.ceil(nextProps.data.length / 100)
        })
    }
    onPageChang = page => {
        this.setState({ page })
        this.props.getDinoList(page)
    }
    render() {
        const { page, totalPages } = this.state
        return (
            <div className="pagination-wrap">
                <PaginatedPage
                    totalPages={totalPages}
                    currentPage={page}
                    onChange={this.onPageChang}
                />
            </div>
        )
    }
}

export default DinoPagination