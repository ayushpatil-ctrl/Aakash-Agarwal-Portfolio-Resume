import { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { ProfileData, EducationItem, ExperienceItem, MUNItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  education: EducationItem[];
  experiences: ExperienceItem[];
  munItems: MUNItem[];
}

export default function ResumeModal({
  isOpen,
  onClose,
  profile,
  education,
  experiences,
  munItems,
}: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawResumeText = `
AAKASH AGARWAL
MALE, 18 YRS
${profile.email} | ${profile.phone}

SUMMARY
${profile.summary}

EDUCATION
1. CBSE Class XII (2026) - Seth Anandram Jaipuria School, Ghaziabad - 93.4%
   - Achieved a score of 96/100 in Chemistry in CBSE Class XII Board Examination
2. CBSE Class X (2024) - Seth Anandram Jaipuria School, Ghaziabad - 94.8%
   - Achieved a score of 99/100 in Computer Science and Social Studies in CBSE Class X Board Examination

WORK EXPERIENCE
1. BENNETT UNIVERSITY SUMMER INTERSHIP - ON SITE
   - Selected for a pre-college summer internship, collaborating directly with university faculty and peers on complex academic projects.
   - Assisted with research, data organization, and presentation preparation, strengthening analytical and teamwork skills.
   - Developed strong organizational and communication abilities in a higher-education environment, demonstrating early readiness for campus leadership.

2. MASS MEDIA AND JOURNALISM INTERNSHIP AT BENNETT UNIVERSITY - ON SITE
   - Selected for a rigorous winter mass media program, gaining hands-on experience in content creation, interviewing, and journalistic writing.
   - Developed strong storytelling and public relations skills directly applicable to student outreach and campus engagement initiatives.
   - Strengthened public speaking and investigative skills, learning to gather community feedback and communicate complex information clearly.

MUN VITAE
Secretariat Experience:
- JMUNC'25 - Senior Advisor
- JMUNC'25 - Convenor Treasurer
- JMUNC'24 - Head of Delegate Affairs

Executive Board Experience:
- PRUMUN'24 - Rapporteur (UNHRC)

Team Work Experience:
- TEDXSAJSV'23 - Finance
- JMUNC'23 - Delegate Affairs
- MUNC'22 - Marketing
- COMIC CON'22 - Event Management

Delegate Experiences:
- SAJSMUN'24 (Lucknow) - Delegate
- SAJMUN'24 (Kanpur) - Delegate
- AISMUN'22 - Delegate
- JMUNC'21 - Delegate
- JMUNC'20 - Delegate
- JMUNC'19 - Delegate

KEY SKILLS
- Leadership
- Public Relations Skill
- Communication
- Event Management
- Problem-Solving
- Time Management
- Negotiation Skills
- Adaptability
`;

    navigator.clipboard.writeText(rawResumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white"
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-300 overflow-hidden my-8 print:my-0 print:border-none print:shadow-none"
      >
        {/* Modal Toolbar (hidden in print) */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-serif-display font-bold text-base">
              Aakash Agarwal · Official Curriculum Vitae
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Verified PDF Transcript
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-resume-btn"
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="copy-all-resume-btn"
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Text
                </>
              )}
            </button>

            <button
              id="close-resume-modal-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div id="printable-resume-body" className="p-8 sm:p-12 font-sans max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300 mb-6">
            <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-slate-900 mb-1">
              {profile.name}
            </h1>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">
              MALE, 18 YRS
            </div>
            <div className="text-sm font-medium text-slate-700 flex flex-wrap justify-center items-center gap-3">
              <span>{profile.email}</span>
              <span className="text-slate-400">|</span>
              <span>{profile.phone}</span>
            </div>
          </div>

          {/* SUMMARY Section */}
          <div className="mb-6">
            <div className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-1 px-3 mb-2.5">
              SUMMARY
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* EDUCATION Section */}
          <div className="mb-6">
            <div className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-1 px-3 mb-3">
              EDUCATION
            </div>

            {/* Exact Table from Resume */}
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-xs text-left border border-slate-800 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-800 font-bold text-slate-900 uppercase">
                    <th className="p-2 border-r border-slate-800">Name of Course</th>
                    <th className="p-2 border-r border-slate-800 text-center">Year of Passing</th>
                    <th className="p-2 border-r border-slate-800">Name of Institute</th>
                    <th className="p-2 text-center">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="p-2 font-medium border-r border-slate-800">CBSE Class XII</td>
                    <td className="p-2 text-center border-r border-slate-800">2026</td>
                    <td className="p-2 border-r border-slate-800">Seth Anandram Jaipuria School, Ghaziabad</td>
                    <td className="p-2 text-center font-bold">93.4%</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium border-r border-slate-800">CBSE Class X</td>
                    <td className="p-2 text-center border-r border-slate-800">2024</td>
                    <td className="p-2 border-r border-slate-800">Seth Anandram Jaipuria School, Ghaziabad</td>
                    <td className="p-2 text-center font-bold">94.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              <li>Achieved a score of 99/100 in Computer Science and Social Studies in CBSE Class X Board Examination</li>
              <li>Achieved a score of 96/100 in Chemistry in CBSE Class XII Board Examination</li>
            </ul>
          </div>

          {/* WORK EXPERIENCE Section */}
          <div className="mb-6">
            <div className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-1 px-3 mb-3">
              WORK EXPERIENCE
            </div>

            {/* Internship 1 */}
            <div className="mb-4">
              <h3 className="font-bold text-xs uppercase text-slate-900 tracking-wide mb-1">
                BENNETT UNIVERSITY SUMMER INTERNSHIP – ON SITE
              </h3>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                <li>Selected for a pre-college summer internship, collaborating directly with university faculty and peers on complex academic projects.</li>
                <li>Assisted with research, data organization, and presentation preparation, strengthening analytical and teamwork skills.</li>
                <li>Developed strong organizational and communication abilities in a higher-education environment, demonstrating early readiness for campus leadership.</li>
              </ul>
            </div>

            {/* Internship 2 */}
            <div className="mb-4">
              <h3 className="font-bold text-xs uppercase text-slate-900 tracking-wide mb-1">
                MASS MEDIA AND JOURNALISM INTERNSHIP AT BENNETT UNIVERSITY – ON SITE
              </h3>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                <li>Selected for a rigorous winter mass media program, gaining hands-on experience in content creation, interviewing, and journalistic writing.</li>
                <li>Developed strong storytelling and public relations skills directly applicable to student outreach and campus engagement initiatives.</li>
                <li>Strengthened public speaking and investigative skills, learning to gather community feedback and communicate complex information clearly.</li>
              </ul>
            </div>
          </div>

          {/* MUN VITAE Section */}
          <div className="mb-6">
            <div className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-1 px-3 mb-3">
              MUN VITAE
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-800">
              <div>
                <h4 className="font-bold underline mb-1">Secretariat Experience</h4>
                <ul className="space-y-0.5 ml-2">
                  <li>• JMUNC'25 – Senior Advisor</li>
                  <li>• JMUNC'25 – Convenor Treasurer</li>
                  <li>• JMUNC'24 – Head of Delegate Affairs</li>
                </ul>

                <h4 className="font-bold underline mt-3 mb-1">Executive Board Experience</h4>
                <ul className="space-y-0.5 ml-2">
                  <li>• PRUMUN'24 – Rapporteur (UNHRC)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold underline mb-1">Team Work Experience</h4>
                <ul className="space-y-0.5 ml-2">
                  <li>• TEDxSAJSV'23 – Finance</li>
                  <li>• JMUNC'23 – Delegate Affairs</li>
                  <li>• MUNC'22 – Marketing</li>
                  <li>• COMIC CON'22 – Event Management</li>
                </ul>

                <h4 className="font-bold underline mt-3 mb-1">Delegate Experiences</h4>
                <ul className="space-y-0.5 ml-2">
                  <li>• SAJSMUN'24 (Lucknow) – Delegate</li>
                  <li>• SAJMUN'24 (Kanpur) – Delegate</li>
                  <li>• AISMUN'22 – Delegate</li>
                  <li>• JMUNC'21, '20, '19 – Delegate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* KEY SKILLS Section */}
          <div>
            <div className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-1 px-3 mb-2.5">
              KEY SKILLS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-800">
              <div className="space-y-1">
                <div>• Leadership</div>
                <div>• Public Relations Skill</div>
              </div>
              <div className="space-y-1">
                <div>• Communication</div>
                <div>• Event Management</div>
              </div>
              <div className="space-y-1">
                <div>• Problem-Solving</div>
                <div>• Time Management</div>
              </div>
              <div className="space-y-1">
                <div>• Negotiation Skills</div>
                <div>• Adaptability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
