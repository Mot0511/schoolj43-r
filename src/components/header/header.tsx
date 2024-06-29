'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth <= 991){
            setIsMobile(true)
        }
    })

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <Link href="/" className="navbar-brand fs-3">Электронный дневник</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${!isMobile ? 'd-flex justify-content-end' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link href="/" className="nav-link fs-4">Главная</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/diary" className="nav-link fs-4">Дневник</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/marks/" className="nav-link fs-4">Оценки</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
        
    )
}
export default Header