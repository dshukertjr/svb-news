import Link from "next/link";
import Router from "next/router";

export default function Header({ userSignedIn, username, karma, goto, pageName, label }) {
    return (
        <table className="header-wrapper">
            <tbody>
                <tr>
                    <td className="header-logo">
                        <Link href="/">
                            <a>
                                <img src="/svbnews.png" />
                            </a>
                        </Link>
                    </td>
                    <td className="header-links">
                        <span className="header-links-items">
                            <b className="header-links-name">
                                <Link href="/">SVB News Hub</Link>
                            </b>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
