import { MetaFunction } from "@remix-run/node";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import experience from "~/data/experience.json";
import skills from "~/data/skills.json";
import education from "~/data/education.json";

export const meta: MetaFunction = () => {
    return [
        { title: "Daniel Giraldo - CV" }
    ];
};

export default function CVPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-900">
            <img
                src="/images/daniel_giraldo.jpg"
                alt="Daniel Giraldo Chaverra"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
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
                    {skills.map((skill) => (
                        <li key={skill.label}>
                            <strong>{skill.label}:</strong> {skill.items.join(", ")}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                <div className="space-y-4">
                    {experience.map((job) => (
                        <Disclosure key={job.company} defaultOpen={job.defaultOpen}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none">
                                        <span>{job.company} – {job.title}</span>
                                        <ChevronUpIcon className={`h-5 w-5 transform ${open ? 'rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-gray-700">
                                        <p className="text-sm text-gray-600 mb-2">{job.dates} | {job.location}</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {job.responsibilities.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </section>

            <section className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <ul className="list-disc pl-5 space-y-1">
                    {education.map((edu) => (
                        <li key={edu.degree}>
                            <strong>{edu.degree}</strong>, {edu.institution} ({edu.years})
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}