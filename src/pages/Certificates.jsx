import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { fetchProjects } from '../services/project.api';
import ScrollToTop from '../components/common/ScrollToTop';
import CertificateCard from '../components/certificate/CertificateCard';
import { fetchCertificates } from '../services/certificate.api';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    const loadCertificate = async () => {
      try {
        const data = await fetchCertificates();
        setCertificates(Array.isArray(data) ? data : []);

      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    loadCertificate();
  }, []);

  if (loading) return <p>Loading Certificate...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2 className="block text-cyan-300 tracking-widest uppercase text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-center p-20">
        All Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
      <ScrollToTop />
    </>
  )
}

export default Certificates;