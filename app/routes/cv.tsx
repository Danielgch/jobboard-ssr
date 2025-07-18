// app/routes/cv.tsx
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Daniel Giraldo - CV" }
    ];
};

export default function CVPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-900">
            <h1 className="text-4xl font-bold mb-2">Daniel Giraldo Chaverra</h1>
            <p className="text-sm text-gray-600">Medellín, Colombia · danielgiraldoch@gmail.com · +57 304 480 8517</p>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                <p>
                    Software Engineer with over 5 years of experience in frontend and backend development. Expert in React, TypeScript,
                    Node.js, and GraphQL. Passionate about clean architecture, agile collaboration, and building impactful digital experiences.
                </p>
            </section>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, Python</li>
                    <li><strong>Frontend:</strong> React, Next.js, Angular, Tailwind CSS</li>
                    <li><strong>Backend:</strong> Node.js, Express, GraphQL, REST</li>
                    <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</li>
                    <li><strong>Testing:</strong> Jest, Mocha, Selenium</li>
                    <li><strong>DevOps:</strong> Docker, GitHub, CI/CD, Prometheus, Datadog</li>
                </ul>
            </section>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

                <div className="mb-6 p-4 bg-white shadow rounded">
                    <h3 className="font-bold text-lg">SoftServe – Intermediate Software Engineer</h3>
                    <p className="text-sm text-gray-600">Oct 2022 – Jun 2025 | Medellín, Colombia</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Designed backend services for millions of users at Yum! Brands.</li>
                        <li>Developed GraphQL APIs, validations, and monitoring with Prometheus.</li>
                        <li>Collaborated using Scrum and CI/CD pipelines.</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white shadow rounded">
                    <h3 className="font-bold text-lg">Globant – Jr Advanced Web UI Engineer</h3>
                    <p className="text-sm text-gray-600">Jul 2021 – Jan 2022</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Built internal training applications using Node.js and React.</li>
                        <li>Integrated GraphQL and MongoDB in various tools.</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white shadow rounded">
                    <h3 className="font-bold text-lg">Source Meridian – Software Developer</h3>
                    <p className="text-sm text-gray-600">May 2019 – Jul 2021</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Created reusable UI components and improved UX in agile sprints.</li>
                        <li>Tech stack included React.js, Material UI, and MySQL.</li>
                    </ul>
                </div>
            </section>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Bachelor&apos;s in Software Engineering</strong>, Tecnológico de Antioquia (2013 – 2019)</li>
                    <li><strong>Technologist in Systems</strong>, Tecnológico de Antioquia (2013 – 2016)</li>
                    <li><strong>Technician in Systems</strong>, Tecnológico de Antioquia (2013 – 2016)</li>
                </ul>
            </section>
        </div>
    );
}