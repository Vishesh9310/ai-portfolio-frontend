import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ScrollToTop from "../common/ScrollToTop"
import { fetchCertificates } from "../../services/certificate.api"

const FullCertificate = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const { id } = useParams()

  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const data = await fetchCertificates()
        setCertificates(Array.isArray(data) ? data : [])
      } catch {
        setError("Failed to load certificate")
      } finally {
        setLoading(false)
      }
    }
    loadCertificates()
  }, [])

  if (loading) return <p className="pt-24 text-center">Loading...</p>
  if (error) return <p className="pt-24 text-center text-red-500">{error}</p>

  const certificate = certificates.find(c => c.id === Number(id))

  if (!certificate) {
    return (
      <div className="pt-24 text-center text-red-500 text-xl">
        Certificate not found
      </div>
    )
  }

  return (
    <div className="certificates-body h-fit">
      <div className="pt-24 px-4 max-w-5xl mx-auto space-y-8 pb-10">
        <h1 className="text-3xl font-bold text-purple-600">
          {certificate.name}
        </h1>

        <img
          src={`${BASE_URL}${certificate.img}`}
          alt={certificate.name}
          className="w-full rounded-xl"
        />

        <p className="text-center text-purple-400">
          {certificate.desc}
        </p>

        <p className="text-center text-gray-400">
          {certificate.date}
        </p>

        <ScrollToTop />
      </div>
    </div>
  )
}

export default FullCertificate
