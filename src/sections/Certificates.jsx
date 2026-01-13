import React, { useState, useEffect } from 'react'
import CertificateCard from '../components/certificate/CertificateCard'
import { fetchCertificates } from '../services/certificate.api';
import { Link } from 'react-router-dom';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const data = await fetchCertificates();
        setCertificates(Array.isArray(data) ? data : []);

      } catch (err) {
        setError("Failed to load Certificates");
      } finally {
        setLoading(false);
      }
    };

    loadCertificates();
  }, []);

  if (loading) return <p>Loading Certificates...</p>;
  if (error) return <p>{error}</p>;

  const topThreeCertificates = certificates.slice(0,3);


  return (
    <div className='h-fit py-10 projects-body'>
      <h2 id="certifications" className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">Certificates</h2>
      <div className='flex justify-between px-24 orbitron mb-10'>
        <h2 className="text-2xl font-bold">Top Three Certificates</h2>
        <Link to='/certificates' className='text-xl'>Show More</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
        {topThreeCertificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}

export default Certificates