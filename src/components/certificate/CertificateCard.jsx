import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const CertificateCard = ({ certificate }) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    return (
        <div className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all cursor-pointer h-fit" onClick={() => setActivecertificate(certificate)}>
            <div className="certificate-body h-full w-full card rounded-2xl overflow-hidden flex flex-col">
                <NavLink to={`/certificates/${certificate.id}`} >
                    <img src={`${BASE_URL}${certificate.img}`} alt={certificate.img.alt} className="h-52 w-full object-cover" />
                    <div className="p-4 flex-1 space-y-2">
                        <h3 className="text-center font-bold italic text-lg orbitron">{certificate.name}</h3>
                        <p className="text-sm">{certificate.desc}</p>
                        <p className="orbitron text-sm">{certificate.date}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default CertificateCard;