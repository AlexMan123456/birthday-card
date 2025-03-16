import { Pagination, PaginationItem } from "@mui/material"
import { Link } from "react-router-dom";

function Navigation(){
    return <Pagination
        count={4}
        renderItem={(item) => {
            return (
                <PaginationItem
                    component={Link}
                    to={`/card/${item.page}`}
                    {...item}
                />
            )
        }}
    />
}

export default Navigation