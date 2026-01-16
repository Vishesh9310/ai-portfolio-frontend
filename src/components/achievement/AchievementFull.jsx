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

const collegeAchievementData = [
    { id: 1, name: "Class Representative", img: crshirt, desc: "Class Representative", about: "Elected as Class Representative to act as a bridge between students and faculty. Managed academic coordination, addressed student concerns, and helped organize class-level activities.", date: "Dec 2024" },
    { id: 2, name: "Hackathon", img: hackathonimg1, desc: "Hackathon participation", about: "Participated in a competitive hackathon where I collaborated with a team to design and develop a real-world problem solution under strict time constraints, enhancing teamwork and problem-solving skills.", date: "2024" },
    { id: 3, name: "Technia", img: techniaimg3, desc: "Technia Event", about: "Actively participated in Technia college fest, engaging in technical events that improved my analytical thinking, innovation mindset, and exposure to emerging technologies.", date: "2025" },
    { id: 4, name: "Technia", img: techniaimg4, desc: "Technia Achievement", about: "Recognized for outstanding performance during Technia by contributing to technical activities and demonstrating leadership, coordination, and technical aptitude.", date: "2025" },
    { id: 5, name: "Technia", img: techniaimg6, desc: "Techovation", about: "Participated in the Techovation segment of Technia, where innovative ideas were presented and evaluated, encouraging creativity, teamwork, and practical problem-solving.", date: "2025" },
    { id: 6, name: "Technia", img: techniaimg7, desc: "Techovation Trophy", about: "Awarded the Techovation Trophy at Technia for excellence in innovation and technical execution, reflecting strong conceptual understanding and collaborative effort.", date: "2025" },
    { id: 7, name: "Tradefair", img: tradefairimg4, desc: "Trade Fair", about: "Participated in a trade fair showcasing ideas and projects, gaining practical exposure to presentation skills, market understanding, and real-world applications.", date: "2024" },
    { id: 8, name: "TV9", img: tv9img1, desc: "TV9 Coverage", about: "Featured in TV9 media coverage for participation in a college or technical event, highlighting achievements and contributing to institutional recognition.", date: "2025" },
    { id: 9, name: "Volunteer", img: volunteerimg1, desc: "Volunteer Work", about: "Volunteered in college and social activities, assisting in event management and community initiatives, developing leadership, empathy, and organizational skills.", date: "2024" },
]

const AchievementFull = () => {
    const { id } = useParams()
    const [achievement, setAchievement] = useState(null)

    useEffect(() => {
        setAchievement(collegeAchievementData.find(item => item.id === Number(id)) || null)
    }, [id])

    if (!achievement) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
                Achievement not found
            </div>
        )
    }

    return (
        <section className="min-h-screen py-24 px-4 about-me-body">
            <div className="max-w-5xl mx-auto space-y-6">

                <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-500">
                    {achievement.name}
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-center sm:text-left">
                    <p className="text-gray-300 text-base sm:text-lg">
                        {achievement.desc}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">
                        {achievement.date}
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src={achievement.img}
                        alt={achievement.name}
                        className="w-full max-w-4xl rounded-xl object-contain shadow-lg"
                    />
                </div>

                <p className="text-gray-300 text-base sm:text-lg">
                    {achievement.about}
                </p>

            </div>
        </section>
    )
}

export default AchievementFull;