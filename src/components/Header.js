import {Stack ,Typography} from "@mui/material"
import "./Home.css"
const Header = () => {
    return (
        <div className="container">
         <div className="parent-header">

    <Stack direction="row" spacing={5}>
        <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
            <h4 className="head">Best Sellers</h4>
        </Stack>
        <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
            <h4 className="head">Gift Ideas</h4>
        </Stack>
        <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
            <h4 className="head">Best Sellers</h4>
        </Stack>
        <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
            <h4 className="head">New Releases</h4>
        </Stack>
        <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
            <h4 className="head">Today's deals</h4>
        </Stack>

    </Stack>
    </div> 
    </div>);
}
 
export default Header;