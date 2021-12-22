import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router";
import "./Projects.css";
export default function Projects() {
    const params = useParams();
    return params.project ? (
        <Outlet />
    ) : (
        <div>
            <h1>Projects</h1>
            <ul>
                <li>
                    <p>
                        {" "}
                        Summer 2018, I spent six weeks backpacking around South East Asia. I took
                        over 1,000 picures and wanted to build something to interactively share them
                        with people. <Link to="mapapp">
                            {" "}
                            Click here, and I hope you enjoy!{" "}
                        </Link>{" "}
                    </p>
                </li>
                <li>
                    <p>
                        {" "}
                        <a
                            href="https://chrome.google.com/webstore/detail/ref-schedule-sync/pgdajjngmjfhnoghgoddckkikijklaib"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            Ref Schedule Sync
                        </a>
                    </p>
                </li>
            </ul>

            <div>
                <blockquote> Nothing else to see here. Move along.</blockquote>
            </div>
        </div>
    );
}
