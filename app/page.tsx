"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  Code,
  Database,
  Server,
  Globe,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Package,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const skills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Laravel",
    "Docker",
    "ASP.NET",
    "JavaScript",
    "PHP",
    "C++",
    "Java",
    "Dart",
    "HTML",
    "CSS",
    "Git",
    "API Development",
    "Database Design",
    "Flutter",
    "Trello",
    "Odoo",
    "MySQL",
    "Redis",
    "JWT Authentication",
    "Firebase",
    "Sanctum",
    "PHPUnit",
    "Composer",
    "Excel Export",
    "Passport.js",
    "Google OAuth",
    "Multer",
    "bcrypt",
    "Voice Processing",
    "Entity Framework",
    "Bootstrap",
    "SQL Server",
  ]

  const experiences = [
    {
      title: "Backend Developer (Freelance)",
      company: "Self-Employed | Remote",
      period: "2022 – Present",
      description:
        "Deliver high-performance backend solutions for international clients using Node.js, Laravel, and cloud technologies. Architect and optimize RESTful APIs with authentication (JWT/OAuth), middleware pipelines, and database integrations. Lead full development cycles from requirement analysis to deployment and DevOps configurations.",
      technologies: ["Node.js", "Laravel", "MongoDB", "MySQL", "Docker", "JWT", "OAuth", "Redis", "Express"],
    },
    {
      title: "Web Developer (Freelance)",
      company: "Creatives Group | Remote",
      period: "2020 – 2021",
      description:
        "Built and maintained client websites with custom CMS features using Laravel, PHP, and JavaScript. Developed responsive web solutions including sports club and restaurant websites with focus on user experience and performance optimization.",
      technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    }
  ]

  const projects = [
    {
      title: "BeautyCenter – Web Application for Beauty Salon Management",
      year: "January 2023 – March 2023",
      description:
        "Developed a comprehensive web application for beauty salon management with responsive dashboard interface and robust backend functionality.",
      type: "ASP.NET Full-Stack Development",
      role: "Dashboard & Backend Developer (Branch: mona – Collaborative Project)",
      technologies: ["ASP.NET", "C#", "HTML", "CSS", "SQL Server", "Entity Framework", "Bootstrap"],
      fullDescription: `Developed a responsive dashboard interface that allows salon administrators to manage appointments, services, and client data efficiently.

Implemented core backend functionalities using ASP.NET MVC and C#, ensuring clean separation of concerns and scalable architecture.

Utilized Entity Framework as an ORM to streamline database operations, enabling efficient data access through LINQ and reducing SQL boilerplate.

Integrated SQL Server for structured data storage and retrieval, with secure and optimized queries.

Designed the UI using Bootstrap, ensuring mobile responsiveness and a clean, intuitive layout.

Organized the codebase into modular components (e.g., Services, Clients, Appointments), improving maintainability and readability.

Collaborated with a teammate to ensure seamless integration between frontend and backend, focusing on user experience and system reliability.`,
      packages: [
        { name: "Entity Framework", purpose: "Simplifies database interactions using LINQ and C# models" },
        { name: "Bootstrap", purpose: "Enables responsive and visually appealing UI design" },
        { name: "ASP.NET MVC", purpose: "Provides structured application architecture (Model-View-Controller)" },
        { name: "System.Data.SqlClient", purpose: "Facilitates direct communication with SQL Server" },
        { name: "Microsoft.AspNetCore.Mvc", purpose: "Manages routing, controllers, and HTTP responses" },
      ],
      github: "https://github.com/Yihea20/BeautyCenter.git",
    },
    {
      title: "restApi-blog – RESTful API for Blog Management",
      year: "April 2023 – May 2023",
      description:
        "Built a RESTful API using Node.js, Express, and MongoDB to manage blog posts with full CRUD operations, image uploads, and secure authentication.",
      type: "Node.js Backend Development",
      role: "Backend Developer (Branch: mona – Solo Project)",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Multer",
        "bcryptjs",
        "dotenv",
        "Validator",
      ],
      fullDescription: `Developed a modular and scalable RESTful API for blog post management using Node.js and Express.js.

Implemented full CRUD operations for blog posts, including creation, editing, deletion, and retrieval.

Integrated image upload functionality using Multer, allowing users to attach visual content to their posts.

Used JWT for secure user authentication and route protection, ensuring only authorized access to sensitive endpoints.

Applied bcryptjs to hash user passwords before storing them in MongoDB, enhancing data security.

Utilized Mongoose to define schemas and interact with MongoDB efficiently using LINQ-like queries.

Managed environment variables securely with dotenv, separating configuration from code.

Validated incoming data using Validator to maintain data integrity and prevent malformed requests.

Organized the codebase into clear modules (controllers, models, routers, middleware), improving readability and maintainability.`,
      packages: [
        {
          name: "Express.js",
          purpose: "Handles routing and middleware for the API",
        },
        {
          name: "Mongoose",
          purpose: "Provides schema-based modeling and MongoDB interaction",
        },
        {
          name: "Multer",
          purpose: "Enables image upload and file handling",
        },
        {
          name: "jsonwebtoken (JWT)",
          purpose: "Secures routes with token-based authentication",
        },
        {
          name: "bcryptjs",
          purpose: "Encrypts user passwords before database storage",
        },
        {
          name: "dotenv",
          purpose: "Manages environment variables securely",
        },
        {
          name: "Validator",
          purpose: "Validates user input to ensure data integrity",
        },
      ],
      link: "https://github.com/Mona664/restApi-blog",
    },
    {
      title: "Voice-to-Text Notes App",
      year: "June 2025 – Present",
      description:
        "Building the backend for a voice-to-text notes app that helps users capture thoughts when writing isn't possible.",
      type: "Node.js Backend Development",
      role: "Backend Developer",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Passport.js",
        "Google OAuth",
        "JWT",
        "Multer",
        "bcryptjs",
        "dotenv",
        "express-validator",
        "cors",
        "nodemon",
      ],
      fullDescription: `Developed RESTful APIs for voice recording, transcription, and note management with full CRUD operations.

Integrated Google OAuth authentication using Passport.js for secure user login.

Implemented middleware for validation, file handling, and error management.

Used Multer for handling audio file uploads and JWT for route protection.

Containerized the backend using Docker for scalable deployment.`,
      packages: [
        { name: "express", purpose: "Handles routing and middleware for the API" },
        { name: "mongoose", purpose: "Interacts with MongoDB using schema-based models" },
        { name: "passport", purpose: "Authentication middleware for Node.js" },
        { name: "passport-google-oauth20", purpose: "Google OAuth strategy for Passport.js" },
        { name: "jsonwebtoken", purpose: "Token-based authentication for secure routes" },
        { name: "bcryptjs", purpose: "Encrypts user passwords before database storage" },
        { name: "multer", purpose: "Handles file uploads (e.g., voice recordings)" },
        { name: "dotenv", purpose: "Manages environment variables securely" },
        { name: "express-validator", purpose: "Validates incoming request data" },
        { name: "cors", purpose: "Enables cross-origin resource sharing" },
        { name: "nodemon", purpose: "Auto-restarts server during development" },
      ],
    },
    {
      title: "E-Commerce Platform",
      year: "June 2025 – Present",
      description:
        "Training-based Laravel project for building a full-featured e-commerce platform with advanced backend features.",
      type: "Laravel Backend Development",
      role: "Laravel Developer (Training-Based)",
      technologies: ["Laravel", "MySQL", "Docker", "Redis", "JWT", "PHP", "Composer", "PHPUnit"],
      fullDescription: `Designed RESTful APIs for managing Products, Merchants, Captains, Users, and Orders.

Implemented role-based access control and activity logging.

Configured custom .env environment with Redis/Memcached caching, email logging, JWT authentication, and database sessions.

Used Docker for containerization and PHPUnit for backend testing.`,
      packages: [
        { name: "Laravel", purpose: "Framework for building scalable web applications" },
        { name: "JWT", purpose: "Token-based authentication for secure API access" },
        { name: "Redis", purpose: "Caching and session management" },
        { name: "Composer", purpose: "Dependency management for PHP packages" },
        { name: "PHPUnit", purpose: "Unit testing for Laravel backend logic" },
        { name: "MySQL", purpose: "Relational database for structured data storage" },
        { name: "Docker", purpose: "Containerization for consistent development environments" },
      ],
    },
    {
      title: "Dhad Platform",
      year: "April 2025 – June 2025",
      description:
        "Contributed to the backend of Dhad, an educational platform offering personalized learning and live lessons.",
      type: "Laravel Backend Development",
      role: "Laravel Developer (Freelancer)",
      technologies: ["Laravel", "MySQL", "Redis", "Excel Export", "PHP"],
      fullDescription: `Developed backend features to convert student registration requests into structured Excel files.

Configured environment settings for performance optimization.

Collaborated with the team to support diagnostic assessments and live interactive lessons.

Used Redis for caching and Laravel Excel for exporting structured data.`,
    },
    {
      title: "School Management System",
      year: "2021",
      description: "Built a school management application to facilitate tracking student records and attendance.",
      type: "Full-Stack Development",
    },
  ]

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mona Soliman</h1>
              <p className="text-lg text-gray-600 mt-1">Back-end Developer</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+936-994366844</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mona.mohammad.soliman@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Damascus, Syria</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    A results-driven Back-end Developer with 2 years of experience in designing and implementing
                    scalable and efficient web applications. Proficient in Node.js, Express, MongoDB, Laravel, and
                    ASP.NET. Possessing strong problem-solving and analytical skills, with a deep understanding of data
                    structures and algorithms.
                  </p>
                 <div className="flex flex-wrap gap-3">
                    <a href="/MonaSoliman.pdf" download className="flex gap-2">
                    <Button variant="secondary" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download CV
                    </Button>
                  </a>
                    <a
                      href="https://www.linkedin.com/in/mona-soliman-34577b1b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-2"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="lg:w-64">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Experience</span>
                        <span className="font-semibold">2+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Projects</span>
                        <span className="font-semibold">8+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Technologies</span>
                        <span className="font-semibold">15+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Competencies */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                Key Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Database Design & Optimization",
                  "API Development and Integration",
                  "Server-Side Development",
                  "Version Control (Git)",
                  "Test-Driven Development",
                  "Excellent Communication Skills",
                  "Agile Methodologies",
                  "Problem Solving and Debugging",
                  "Performance Optimization",
                ].map((competency, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">{competency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-4 top-12 w-px h-full bg-gray-200"></div>
                    )}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                        <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-700 mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {exp.github && (
                          <Link
                            href={exp.github}
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                          >
                            <Github className="w-4 h-4" />
                            View Repository
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Featured Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 p-4 sm:p-6 overflow-hidden">
                   <CardHeader className="p-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg mb-2 break-words">
                              {project.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mb-2 w-full">

                            <Badge variant="outline" className="break-words max-w-full">{project.year}</Badge>
                            {project.role && (
                              <Badge variant="secondary" className="break-words max-w-full">
                                {project.role}
                              </Badge>
                            )}
                          </div>

                            <CardDescription className="font-medium text-blue-600 break-words">
                              {project.type}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{project.description}</p>

                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {project.fullDescription && (
                        <>
                          <Button
                            variant="ghost"
                            onClick={() => toggleProject(index)}
                            className="mb-4 p-0 h-auto font-medium text-blue-600 hover:text-blue-800"
                          >
                            {expandedProject === index ? (
                              <>
                                Show Less <ChevronUp className="w-4 h-4 ml-1" />
                              </>
                            ) : (
                              <>
                                Read More <ChevronDown className="w-4 h-4 ml-1" />
                              </>
                            )}
                          </Button>

                          {expandedProject === index && (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                                <div className="prose prose-sm max-w-none">
                                  {project.fullDescription.split("\n\n").map((paragraph, pIndex) => (
                                    <p key={pIndex} className="mb-3 text-gray-700 leading-relaxed">
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>

                                {project.packages && (
                                  <div className="mt-6">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                      <Package className="w-4 h-4" />
                                      Key Packages & Libraries Used
                                    </h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                        <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
                                          <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-800 border-b border-gray-200">
                                              Package / Library
                                            </th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-800 border-b border-gray-200">
                                              Purpose
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {project.packages.map((pkg, pkgIndex) => (
                                            <tr key={pkgIndex} className="hover:bg-gray-50 transition-colors">
                                              <td className="px-4 py-3 font-mono text-sm text-blue-600 border-b border-gray-100">
                                                {pkg.name}
                                              </td>
                                              <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                                                {pkg.purpose}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              GitHub Repository
                            </a>
                          </Button>
                        )}
                        {project.link && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              GitHub Repository
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Education & Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Information Technology Engineering</h3>
                    <p className="text-gray-600">Damascus University</p>
                    <p className="text-sm text-gray-500">Software Engineering</p>
                  </div>
                  <Badge variant="outline">2019 - 2024</Badge>
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Scientific Bachelor's Degree Certificate</h3>
                    <p className="text-gray-600">Damascus</p>
                  </div>
                  <Badge variant="outline">2019</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Arabic</span>
                  <Badge>Native</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">English</span>
                  <Badge variant="secondary">Professional</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd
                like to discuss potential collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <a
                  href="https://www.linkedin.com/in/mona-soliman-34577b1b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2"
                >
                  <Button variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Mona Soliman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
