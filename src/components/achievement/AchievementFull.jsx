import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import crshirt from "../../assets/achievement/cr/ClassRepresentative.jpeg"
import hackathonimg1 from "../../assets/achievement/hackathon/IMG20250916184234.jpg"
import techniaimg3 from "../../assets/achievement/Technia2k25/IMG20250417164324.jpg"
import techniaimg4 from "../../assets/achievement/Technia2k25/IMG20250420082944.jpg"
import techniaimg6 from "../../assets/achievement/Technia2k25/techovation.jpg"
import techniaimg7 from "../../assets/achievement/Technia2k25/techovationtrophy.jpg"
import tradefairimg4 from "../../assets/achievement/tradefair/Screenshot_2025-09-27-12-53-56-34_439a3fec0400f8974d35eed09a31f914.jpg"
import tv9img1 from "../../assets/achievement/tv9/IMG20250328151127.jpg"
import volunteerimg1 from "../../assets/achievement/volunteer/volunteer.jpeg"

const AchievementFull = () => {
    const { id } = useParams()
    const [achievement, setAchievement] = useState(null)

    const collegeAchievementData = [
        { id: 1, name: "Class Representative", img: crshirt, desc: "Class Representative", date: "Dec 2024" },
        { id: 2, name: "Hackathon", img: hackathonimg1, desc: "", date: "" },
        { id: 3, name: "Technia", img: techniaimg3, desc: "", date: "" },
        { id: 4, name: "Technia", img: techniaimg4, desc: "", date: "" },
        { id: 5, name: "Technia", img: techniaimg6, desc: "", date: "" },
        { id: 6, name: "Technia", img: techniaimg7, desc: "", date: "" },
        { id: 7, name: "Tradefair", img: tradefairimg4, desc: "", date: "" },
        { id: 8, name: "TV9", img: tv9img1, desc: "", date: "" },
        { id: 9, name: "Volunteer", img: volunteerimg1, desc: "", date: "" },
    ]

    useEffect(() => {
        const foundAchievement = collegeAchievementData.find(
            item => item.id === Number(id)
        )
        setAchievement(foundAchievement || null)
    }, [id])

    if (!achievement) {
        return (
            <div className="pt-24 text-center text-red-500 text-xl">
                Achievement not found
            </div>
        )
    }

    return (
        <div className="about-me-body">
            <div className="pt-24 px-4 max-w-5xl mx-auto space-y-6">
                <h1 className="text-3xl text-center font-bold text-purple-600">
                    {achievement.name}
                </h1>

                <div className="w-full flex justify-between">
                    <p className="text-gray-300 text-center text-lg">
                        {achievement.desc}
                    </p>

                    <p className="text-gray-400 text-center">
                        {achievement.date}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <img
                        src={achievement.img}
                        alt={achievement.name}
                        className="w-full rounded-xl object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default AchievementFull