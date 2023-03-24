import Link from "next/link";
import React from "react";

const Menu = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link href = '/Início'>Início</Link>
                    </li>
                    <li>
                        <Link href = '/Sobre'>Sobre</Link>
                    </li>
                    <li>
                        <Link href = '/Pesquisadores'>Pesquisadores</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu