import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export function Layout() {

    return <div><header>
        <h1>Notes example</h1>
    </header>
        <nav>
            <ul>
                <li><Link to="/">All Notes</Link></li>
                <li><Link to="create">New note</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
}