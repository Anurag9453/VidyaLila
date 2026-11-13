"use client";

import React, { useState, use, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lightbulb,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Languages,
  AlertCircle,
  Flag,
  ShieldCheck,
  X,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Zap,
  Eye,
  EyeOff,
  Calculator,
  Bookmark,
  Bot,
  MessageSquare,
  Lock,
  Unlock,
  LogIn,
  UserPlus,
} from "lucide-react";
import { DoubtDrawer } from "@/components/DoubtDrawer";
import { QuestionReference } from "@/lib/discussions-data";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";

/**
 * Calculates remaining marks for a single 10-mark question based on wrong attempts:
 * - 0 wrong attempts: 10 marks
 * - 1 wrong attempt (-5 marks): 5 marks
 * - 2 wrong attempts (-3 marks): 2 marks
 * - 3+ wrong attempts (minimum floor): 2 marks
 */
function getQuestionMarks(wrongAttempts: number): number {
  if (wrongAttempts <= 0) return 10;
  if (wrongAttempts === 1) return 5;
  return 2; // At least 2 marks guaranteed
}

const VOCABULARY_TERMS = new Set([
  "constant",
  "constants",
  "variable",
  "variables",
  "algebraic expression",
  "algebraic expressions",
  "term",
  "terms",
  "coefficient",
  "coefficients",
  "like terms",
  "unlike terms",
  "monomial",
  "monomials",
  "binomial",
  "binomials",
  "trinomial",
  "trinomials",
  "polynomial",
  "polynomials",
  "degree",
  "degree of a polynomial",
  "zero polynomial",
  "constant polynomial",
  "linear polynomial",
  "quadratic polynomial",
  "cubic polynomial",
  "biquadratic polynomial",
  "zeroes of a polynomial",
  "zero of a polynomial",
  "zeroes",
  "roots",
  "remainder theorem",
  "factor theorem",
  "factorisation",
  "factorization",
  "factors",
  "factor",
  "hcf",
  "highest common factor",
  "grouping",
  "splitting the middle term",
  "middle term",
  "identity",
  "identities",
  "algebraic identities",
  "standard form",
  "division algorithm",
  "dividend",
  "divisor",
  "quotient",
  "remainder",
  "equation",
  "equations",
  "perfect square",
  "perfect squares",
  "coordinate geometry",
  "cartesian coordinates",
  "cartesian plane",
  "coordinate system",
  "coordinate axes",
  "x-axis",
  "y-axis",
  "origin",
  "ordered pair",
  "ordered pairs",
  "abscissa",
  "ordinate",
  "quadrant",
  "quadrants",
  "linear equation",
  "linear equations",
  "linear equation in two variables",
  "solution",
  "solutions",
  "infinitely many solutions",
  "collinear",
  "intercept",
  "axiom",
  "axioms",
  "postulate",
  "postulates",
  "theorem",
  "theorems",
  "proposition",
  "propositions",
  "proof",
  "proofs",
  "undefined terms",
  "line segment",
  "ray",
  "concurrent lines",
  "coplanar",
  "non-collinear",
  "incidence axioms",
  "contradiction",
  "proof by contradiction",
  "hypothesis",
  "universal truth",
  "parallel postulate",
  "acute angle",
  "acute angles",
  "right angle",
  "right angles",
  "obtuse angle",
  "obtuse angles",
  "straight angle",
  "reflex angle",
  "reflex angles",
  "complete angle",
  "angle bisector",
  "complementary",
  "complementary angles",
  "supplementary",
  "supplementary angles",
  "adjacent angles",
  "linear pair",
  "vertically opposite angles",
  "transversal",
  "corresponding angles",
  "alternate interior angles",
  "alternate exterior angles",
  "consecutive interior angles",
  "co-interior angles",
  "triangle",
  "triangles",
  "tribhuj",
  "vertex",
  "vertices",
  "side",
  "sides",
  "scalene",
  "scalene triangle",
  "isosceles",
  "isosceles triangle",
  "equilateral",
  "equilateral triangle",
  "perimeter",
  "parimaap",
  "triangle inequality",
  "hypotenuse",
  "median",
  "medians",
  "centroid",
  "altitude",
  "altitudes",
  "orthocentre",
  "orthocenter",
  "circumcentre",
  "circumcenter",
  "incentre",
  "incenter",
  "perpendicular bisector",
  "perpendicular bisectors",
  "circumcircle",
  "incircle",
  "angle sum property",
  "exterior angle",
  "exterior angles",
  "interior opposite angles",
  // Class 9 Physics Vocabulary Terms
  "physical quantity",
  "fundamental quantity",
  "derived quantity",
  "si unit",
  "least count",
  "vernier callipers",
  "screw gauge",
  "zero error",
  "parallax error",
  "significant figures",
  "density",
  "relative density",
  "reference point",
  "scalar",
  "vector",
  "distance",
  "displacement",
  "speed",
  "velocity",
  "average speed",
  "average velocity",
  "acceleration",
  "retardation",
  "uniform circular motion",
  "balanced forces",
  "unbalanced forces",
  "inertia",
  "friction",
  "static friction",
  "sliding friction",
  "rolling friction",
  "momentum",
  "impulse",
  "conservation of momentum",
  "universal law of gravitation",
  "free fall",
  "mass",
  "weight",
  "weightlessness",
  "thrust",
  "pressure",
  "pascal's law",
  "atmospheric pressure",
  "barometer",
  "upthrust",
  "buoyancy",
  "archimedes' principle",
  "law of floatation",
  "work",
  "joule",
  "kinetic energy",
  "potential energy",
  "mechanical energy",
  "power",
  "watt",
  "kilowatt-hour",
  "mechanical advantage",
  "velocity ratio",
  "efficiency",
  "fulcrum",
  "moment of force",
  "principle of moments",
  "lever",
  "pulley",
  "inclined plane",
  "heat",
  "temperature",
  "thermal expansion",
  "anomalous expansion",
  "specific heat capacity",
  "heat capacity",
  "calorimetry",
  "latent heat",
  "conduction",
  "convection",
  "radiation",
  "longitudinal wave",
  "transverse wave",
  "compression",
  "rarefaction",
  "wavelength",
  "frequency",
  "time period",
  "amplitude",
  "echo",
  "reverberation",
  "loudness",
  "pitch",
  "timbre",
  "ultrasound",
  "infrasound",
  "sonar",
  "cochlea",
]);

function isVocabularyTerm(word: string): boolean {
  const normalized = word.toLowerCase().replace(/[:.,!?()]/g, "").trim();
  if (VOCABULARY_TERMS.has(normalized)) return true;
  for (const term of VOCABULARY_TERMS) {
    if (
      normalized === term ||
      normalized.startsWith(term + " ") ||
      normalized.endsWith(" " + term)
    ) {
      return true;
    }
  }
  return false;
}

function splitTableRow(rowStr: string): string[] {
  let content = rowStr.trim();
  if (content.startsWith("|")) content = content.slice(1);
  if (content.endsWith("|")) content = content.slice(0, -1);

  const cells: string[] = [];
  let current = "";
  let inCode = false;

  for (let idx = 0; idx < content.length; idx++) {
    const ch = content[idx];
    const prev = idx > 0 ? content[idx - 1] : "";

    if (ch === "`" && prev !== "\\") {
      inCode = !inCode;
      current += ch;
    } else if (ch === "|" && !inCode && prev !== "\\") {
      cells.push(current.trim().replace(/\\\|/g, "|"));
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current.trim().replace(/\\\|/g, "|"));
  return cells;
}

function renderInlineMarkdown(
  text: string,
  isVocabFirstCol?: boolean
): React.ReactNode {
  if (!text) return null;

  if (isVocabFirstCol) {
    const cleanWord = text.replace(/\*\*/g, "").trim();
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-violet-100 border border-violet-300 text-violet-900 font-black text-xs sm:text-sm shadow-xs">
        <Sparkles className="h-3.5 w-3.5 text-violet-600 shrink-0" />
        <span>{cleanWord}</span>
      </span>
    );
  }

  // Tokenize by inline code `...`, bold **...**, and markdown links [...](...)
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return tokens.map((token, i) => {
    if (!token) return null;

    if (token.startsWith("[") && token.endsWith(")")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        if (linkUrl.endsWith(".md") || linkUrl.includes(".md")) {
          return <span key={i}>{linkText}</span>;
        }
        return (
          <a
            key={i}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline font-semibold hover:text-indigo-800"
          >
            {linkText}
          </a>
        );
      }
    }

    if (token.startsWith("`") && token.endsWith("`") && token.length > 2) {
      const codeContent = token.slice(1, -1);
      return (
        <code
          key={i}
          className="mx-0.5 font-mono text-xs sm:text-sm bg-slate-100 text-purple-700 px-1.5 py-0.5 rounded-md border border-slate-200 font-bold"
        >
          {codeContent}
        </code>
      );
    }

    if (token.startsWith("**") && token.endsWith("**") && token.length > 4) {
      const inner = token.slice(2, -2).trim();

      // Highlight Key Math Vocabulary in rich Violet / Purple
      if (isVocabularyTerm(inner)) {
        return (
          <span
            key={i}
            className="mx-0.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-100/90 border border-violet-300/80 text-violet-950 font-black text-xs sm:text-sm shadow-2xs"
            title="Key Vocabulary Term"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 shrink-0"></span>
            {inner}
          </span>
        );
      }

      // Highlight Mathematical Expressions / Values / Formulas in Indigo Mono
      const isMathExpression =
        /[=+\-×÷^²³]/.test(inner) ||
        /^₹\s*\d+/.test(inner) ||
        /^[a-z]\s*\(.+\)/i.test(inner) ||
        /^[0-9]+[a-z]+/i.test(inner);

      if (isMathExpression) {
        return (
          <span
            key={i}
            className="mx-0.5 font-mono font-bold text-xs sm:text-sm text-indigo-950 bg-indigo-50/90 border border-indigo-200/80 px-1.5 py-0.5 rounded-md"
          >
            {inner}
          </span>
        );
      }

      // Regular bold emphasis
      return (
        <strong
          key={i}
          className="font-extrabold text-slate-900 bg-amber-100/60 px-1 rounded"
        >
          {inner}
        </strong>
      );
    }

    return token;
  });
}

function FormattedStudyBody({
  text,
  isVocabSection,
  isConstructions,
}: {
  text: string;
  isVocabSection?: boolean;
  isConstructions?: boolean;
}) {
  if (!text) return null;
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Code block ```
    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div
          key={`code-${i}`}
          className="rounded-2xl bg-slate-900 text-amber-200 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-sm my-3"
        >
          <pre>{codeLines.join("\n")}</pre>
        </div>
      );
      continue;
    }

    // Markdown Table | ... |
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim().startsWith("|") &&
        lines[i].trim().endsWith("|")
      ) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const rows = tableLines
        .filter((r) => !/^\|[\s\-:|]+\|$/.test(r))
        .map((r) => splitTableRow(r));

      if (rows.length > 0) {
        const header = rows[0];
        const bodyRows = rows.slice(1);
        const isVocabTable =
          isVocabSection ||
          header.some((h) =>
            /shabd|word|vocabulary|shabdon/i.test(h)
          );

        // When it's a Vocabulary Table, render each item as a Word Card:
        // 1. Pehle Word
        // 2. Fir Definition / Matlab
        // 3. And then uske neeche Example(s)
        if (isVocabTable) {
          elements.push(
            <div key={`vocab-cards-${i}`} className="space-y-3.5 my-4">
              {bodyRows.map((row, rIdx) => {
                const rawWord = row[0] || "";
                const cleanWord = rawWord.replace(/\*\*/g, "").trim();
                const definition = row[1] || "";
                const examples = row.slice(2);

                return (
                  <div
                    key={rIdx}
                    className="rounded-2xl bg-white border-2 border-violet-200/90 hover:border-violet-300 shadow-[0_2px_12px_-2px_rgba(124,58,237,0.06)] p-5 sm:p-6 transition-all space-y-3"
                  >
                    {/* 1. Pehle Word */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-violet-100 border border-violet-300 text-violet-950 font-black text-base sm:text-lg shadow-2xs">
                        <Sparkles className="h-4 w-4 text-violet-600 shrink-0" />
                        <span>{cleanWord}</span>
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-lg border border-violet-200/60">
                        Term #{rIdx + 1}
                      </span>
                    </div>

                    {/* 2. Fir Definition / Matlab */}
                    {definition && (
                      <div className="space-y-1 pt-0.5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                          Matlab (Meaning):
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                          {renderInlineMarkdown(definition)}
                        </p>
                      </div>
                    )}

                    {/* 3. And then uske neeche Example(s) */}
                    {examples.length > 0 &&
                      examples.some((ex) => ex.trim().length > 0) && (
                        <div className="pt-2 border-t border-slate-100 space-y-2">
                          {examples.map((ex, exIdx) => {
                            if (!ex.trim()) return null;
                            const colHeader = header[2 + exIdx] || "Example";
                            return (
                              <div
                                key={exIdx}
                                className="rounded-xl bg-emerald-50/90 border border-emerald-200 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-emerald-950 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2.5"
                              >
                                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md shrink-0 w-fit">
                                  {colHeader}
                                </span>
                                <span className="font-mono text-emerald-900 leading-relaxed font-bold">
                                  {renderInlineMarkdown(ex)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          );
          continue;
        }

        // Standard Data / Comparison Tables
        elements.push(
          <div
            key={`table-${i}`}
            className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm my-3 bg-white"
          >
            <table className="min-w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-100/90 text-slate-900 font-black border-b-2 border-slate-200">
                <tr>
                  {header.map((cell, cIdx) => (
                    <th key={cIdx} className="px-4 py-3 sm:px-5 sm:py-3.5">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-indigo-50/40 transition-colors even:bg-slate-50/50"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-4 py-3 sm:px-5 sm:py-3.5 font-medium text-slate-700 leading-relaxed"
                      >
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Horizontal Rule ---
    if (/^---+$/.test(trimmed)) {
      elements.push(
        <hr key={`hr-${i}`} className="my-6 border-t-2 border-slate-200" />
      );
      i++;
      continue;
    }

    // Subheading ###
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h4
          key={`h4-${i}`}
          className="flex items-center gap-2 text-base sm:text-lg font-black text-indigo-950 pt-4 pb-1 border-b border-indigo-100"
        >
          <span className="h-4 w-1.5 rounded-full bg-indigo-600 shrink-0"></span>
          <span>{renderInlineMarkdown(trimmed.replace(/^###\s+/, ""))}</span>
        </h4>
      );
      i++;
      continue;
    }

    // Blockquote >
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }

      const firstLine = quoteLines[0] || "";
      const figMatch = firstLine.match(/\*\*Figure\s+(\d+\.\d+)\*\*/i);
      let figSvgElement: React.ReactNode = null;
      if (figMatch && isConstructions) {
        const figKey = figMatch[1].replace(".", "-");
        const svgSrc = `/diagrams/constructions/con-${figKey}.svg`;
        figSvgElement = (
          <div key={`fig-img-${i}`} className="my-4 flex flex-col items-center">
            <img
              src={svgSrc}
              alt={`Figure ${figMatch[1]}`}
              loading="lazy"
              className="w-full max-w-[600px] h-auto rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all"
            />
          </div>
        );
      }

      elements.push(
        <div key={`quote-wrapper-${i}`} className="my-2.5">
          {figSvgElement}
          <div
            className="rounded-2xl border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50/90 via-purple-50/30 to-white px-5 py-4 text-xs sm:text-sm font-semibold text-indigo-950 space-y-1 shadow-2xs"
          >
            <div className="flex items-center gap-1.5 text-indigo-700 font-black text-xs uppercase tracking-wider mb-1">
              {figMatch ? (
                <>
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span>{isConstructions ? "Construction Diagram Caption" : "Diagram Caption"}</span>
                </>
              ) : (
                <>
                  <Lightbulb className="h-3.5 w-3.5 shrink-0" />
                  <span>Important Insight</span>
                </>
              )}
            </div>
            {quoteLines.map((ql, qIdx) => (
              <p key={qIdx} className="leading-relaxed">
                {renderInlineMarkdown(ql)}
              </p>
            ))}
          </div>
        </div>
      );
      continue;
    }

    // Unordered or Ordered List
    if (/^([-*]|\d+\.)\s+/.test(trimmed)) {
      const isOrdered = /^\d+\.\s+/.test(trimmed);
      const listItems: Array<{ num: number; text: string } | string> = [];
      while (i < lines.length && /^([-*]|\d+\.)\s+/.test(lines[i].trim())) {
        const lineText = lines[i].trim();
        if (isOrdered) {
          const m = lineText.match(/^(\d+)\.\s+(.*)$/);
          if (m) {
            listItems.push({ num: parseInt(m[1], 10), text: m[2] });
          } else {
            listItems.push({
              num: listItems.length + 1,
              text: lineText.replace(/^\d+\.\s+/, ""),
            });
          }
        } else {
          listItems.push(lineText.replace(/^[-*]\s+/, ""));
        }
        i++;
      }

      if (isOrdered) {
        elements.push(
          <ol key={`list-${i}`} className="space-y-2.5 pl-1 text-sm sm:text-base font-medium text-slate-700 my-2">
            {(listItems as Array<{ num: number; text: string }>).map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3 leading-relaxed">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs shrink-0 mt-0.5">
                  {item.num}
                </span>
                <span className="flex-1">{renderInlineMarkdown(item.text)}</span>
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`list-${i}`} className="space-y-2 pl-1 text-sm sm:text-base font-medium text-slate-700 my-2">
            {(listItems as string[]).map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="h-2 w-2 rounded-full bg-indigo-500 shrink-0 mt-2"></span>
                <span className="flex-1">{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
      }
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed sm:leading-7"
      >
        {renderInlineMarkdown(trimmed)}
      </p>
    );
    i++;
  }

  return <div className="space-y-3">{elements}</div>;
}

type SectionType = "STORY" | "VOCABULARY" | "MISTAKES" | "RECAP" | "PRACTICE" | "LESSON";

function detectSectionType(heading: string, index?: number): SectionType {
  const h = heading.toLowerCase();
  if (
    index === 1 &&
    !h.includes("naye shabd") &&
    !h.includes("vocabulary") &&
    !h.startsWith("part ")
  ) {
    return "STORY";
  }
  if (
    h.includes("kahani") ||
    h.includes("story") ||
    h.includes("auto wale") ||
    h.includes("thali") ||
    h.includes("khet") ||
    h.includes("khilone") ||
    h.includes("ice-cream") ||
    h.includes("chai-samose") ||
    h.includes("laddoo") ||
    h.includes("ramesh ke plot") ||
    h.includes("diwali") ||
    h.includes("fruit") ||
    h.includes("carpenter") ||
    h.includes("priya ke tiles")
  ) {
    return "STORY";
  }
  if (
    h.includes("naye shabd") ||
    h.includes("vocabulary") ||
    h.includes("shabd") ||
    h.includes("terms to know")
  ) {
    return "VOCABULARY";
  }
  if (
    h.includes("galti") ||
    h.includes("galtiyan") ||
    h.includes("mistake") ||
    h.includes("pitfall") ||
    h.includes("bachke rehna")
  ) {
    return "MISTAKES";
  }
  if (
    h.includes("recap") ||
    h.includes("summary") ||
    h.includes("ek nazar mein") ||
    h.includes("wrap-up") ||
    h.includes("teeno ka rishta") ||
    h.includes("decision guide") ||
    h.includes("poora tarika")
  ) {
    return "RECAP";
  }
  if (
    h.includes("practice question") ||
    h.includes("abhyas") ||
    h.includes("practice")
  ) {
    return "PRACTICE";
  }
  return "LESSON";
}

function StudySectionCard({
  section,
  index,
  isHinglish,
  isConstructions,
}: {
  section: {
    heading: string;
    headingHinglish?: string;
    body: string;
    bodyHinglish?: string;
    formulaOrTip?: string;
    formulaOrTipHinglish?: string;
  };
  index: number;
  isHinglish: boolean;
  isConstructions?: boolean;
}) {
  const [showAnswers, setShowAnswers] = useState(false);

  const headingText =
    isHinglish && section.headingHinglish
      ? section.headingHinglish
      : section.heading;
  const bodyText =
    isHinglish && section.bodyHinglish ? section.bodyHinglish : section.body;
  const tipText =
    isHinglish && section.formulaOrTipHinglish
      ? section.formulaOrTipHinglish
      : section.formulaOrTip;

  const sectionType = detectSectionType(headingText, index);

  // Check if heading has a Part prefix like "Part A: ..." or "Method 1: ..."
  const partMatch = headingText.match(/^(Part\s+[A-Z0-9]+|Method\s+\d+):\s*(.+)$/i);
  const partBadge = partMatch ? partMatch[1] : null;
  const cleanHeading = partMatch ? partMatch[2] : headingText;

  // Split practice questions if it contains answers
  const isPractice = sectionType === "PRACTICE";
  const hasAnswers = isPractice && /###\s*Answers/i.test(bodyText);
  const [questionsPart, answersPart] = hasAnswers
    ? bodyText.split(/###\s*Answers/i)
    : [bodyText, ""];

  return (
    <div
      id={`study-section-${index}`}
      className={`scroll-mt-28 rounded-3xl p-6 sm:p-8 transition-all ${
        sectionType === "STORY"
          ? "bg-gradient-to-br from-amber-50/80 via-orange-50/30 to-white border-2 border-amber-200/90 shadow-[0_4px_20px_-4px_rgba(245,158,11,0.08)]"
          : sectionType === "VOCABULARY"
          ? "bg-gradient-to-br from-violet-50/80 via-purple-50/30 to-white border-2 border-violet-200/90 shadow-[0_4px_20px_-4px_rgba(124,58,237,0.08)]"
          : sectionType === "MISTAKES"
          ? "bg-gradient-to-br from-rose-50/80 via-red-50/20 to-white border-2 border-rose-200 shadow-[0_4px_20px_-4px_rgba(244,63,94,0.08)]"
          : sectionType === "RECAP"
          ? "bg-gradient-to-br from-emerald-50/80 via-teal-50/30 to-white border-2 border-emerald-200 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.08)]"
          : sectionType === "PRACTICE"
          ? "bg-gradient-to-br from-indigo-50/60 via-sky-50/20 to-white border-2 border-indigo-200/90 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.08)]"
          : "bg-white border-2 border-slate-200/90 hover:border-slate-300 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)]"
      }`}
    >
      {/* Card Header Banner with Section Badge */}
      <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
        {sectionType === "STORY" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Real-Life Kahani (Story Hook)
          </span>
        )}
        {sectionType === "VOCABULARY" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-900 border border-violet-300 text-xs font-black uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5 text-violet-600" />
            Naye Shabd (Key Vocabulary Bank)
          </span>
        )}
        {sectionType === "MISTAKES" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-300 text-xs font-black uppercase tracking-wider">
            <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
            Common Pitfalls (Bachke Rehna!)
          </span>
        )}
        {sectionType === "RECAP" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5 text-emerald-600" />
            Quick Recap & Cheatsheet
          </span>
        )}
        {sectionType === "PRACTICE" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 text-xs font-black uppercase tracking-wider">
            <Calculator className="h-3.5 w-3.5 text-indigo-600" />
            Self-Practice Questions & Solutions
          </span>
        )}
        {partBadge && (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-indigo-800 border border-indigo-200 text-xs font-black uppercase tracking-wider">
            {partBadge}
          </span>
        )}
      </div>

      {/* Section Title */}
      <h3
        className={`text-xl sm:text-2xl font-black mb-4 tracking-tight ${
          sectionType === "STORY"
            ? "text-amber-950"
            : sectionType === "VOCABULARY"
            ? "text-violet-950"
            : sectionType === "MISTAKES"
            ? "text-rose-950"
            : sectionType === "RECAP"
            ? "text-emerald-950"
            : sectionType === "PRACTICE"
            ? "text-indigo-950"
            : "text-slate-900"
        }`}
      >
        {cleanHeading}
      </h3>

      {/* Body Content */}
      <div className="space-y-4 text-slate-700">
        <FormattedStudyBody
          text={hasAnswers ? questionsPart : bodyText}
          isVocabSection={sectionType === "VOCABULARY"}
          isConstructions={isConstructions}
        />

        {/* Interactive Answer Reveal for Practice Questions */}
        {hasAnswers && (
          <div className="pt-4 mt-6 border-t border-indigo-200/70">
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 transition shadow-sm cursor-pointer"
            >
              {showAnswers ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showAnswers ? "Hide Detailed Solutions" : "Reveal Step-by-Step Solutions"}</span>
            </button>

            {showAnswers && (
              <div className="mt-4 rounded-2xl bg-emerald-50/90 border-2 border-emerald-300 p-5 sm:p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-black text-sm sm:text-base border-b border-emerald-200 pb-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Step-by-Step Solutions & Answer Key</span>
                </div>
                <FormattedStudyBody text={answersPart} isConstructions={isConstructions} />
              </div>
            )}
          </div>
        )}

        {/* Tip / Formula Callout */}
        {tipText && (
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/90 p-4 sm:p-5 text-xs sm:text-sm font-bold text-amber-950 flex items-start gap-3 shadow-xs mt-4">
            <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block">
                Pro Tip & Shortcut
              </span>
              <span>{tipText}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * High-craft SVG visual concept diagrams for core units where geometric / structural visualization is required.
 */
function UnitVisualDiagram({ unitId }: { unitId: string }) {
  // 1. Unit 1 Polynomials: Anatomy of an Expression & Term
  if (unitId === "u-9math-poly-1") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Anatomy of an Expression & Term
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Kiraya formula (Auto meter) vs Algebraic Term structure
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Visual Diagram
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Auto Fare Model */}
          <div className="rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
              <span className="uppercase tracking-wider font-black text-[11px]">
                Real-Life Auto Fare Expression
              </span>
              <span className="font-mono text-slate-500">Kiraya = 30 + 12x</span>
            </div>

            <div className="rounded-xl bg-amber-50/90 border border-amber-200 p-4 text-center">
              <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 tracking-wide">
                <span className="text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-lg border border-amber-300">
                  ₹30
                </span>
                <span className="text-slate-400 mx-2">+</span>
                <span className="text-indigo-800 bg-indigo-100/90 px-2 py-0.5 rounded-lg border border-indigo-300">
                  12
                </span>
                <span className="text-violet-800 bg-violet-100/90 px-2 py-0.5 rounded-lg border border-violet-300 ml-1">
                  x
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-start gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-amber-900 font-black">₹30 (Constant):</strong> Fixed base fare jo meter down hote hi lagta hai (kabhi nahi badalta).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-600 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-violet-900 font-black">x (Variable):</strong> Kitne kilometre gaye (1 km, 5 km, 10 km... badalta rehta hai).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-indigo-900 font-black">12 (Coefficient):</strong> Har km ka multiplier rate (₹12 per km).
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Anatomy of Term */}
          <div className="rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
              <span className="uppercase tracking-wider font-black text-[11px]">
                Anatomy of a Term (-7x³)
              </span>
              <span className="font-mono text-slate-500">Sign • Coeff • Base • Power</span>
            </div>

            <div className="rounded-xl bg-violet-50/90 border border-violet-200 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 tracking-wide inline-flex items-center">
                <span className="text-rose-600 bg-rose-100/80 px-2 py-0.5 rounded-lg border border-rose-300">
                  -
                </span>
                <span className="text-indigo-900 bg-indigo-100/80 px-2.5 py-0.5 rounded-lg border border-indigo-300 mx-1">
                  7
                </span>
                <span className="text-violet-900 bg-violet-100/90 px-2.5 py-0.5 rounded-lg border border-violet-300">
                  x
                </span>
                <sup className="text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded-md border border-emerald-300 text-sm -top-3">
                  3
                </sup>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-700 pt-1">
              <div className="rounded-lg bg-rose-50 border border-rose-200 p-2 text-rose-950">
                <span className="block font-black text-rose-700 uppercase tracking-wider text-[10px]">
                  Sign
                </span>
                Negative (-)
              </div>
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-2 text-indigo-950">
                <span className="block font-black text-indigo-700 uppercase tracking-wider text-[10px]">
                  Coefficient
                </span>
                Numerical 7
              </div>
              <div className="rounded-lg bg-violet-50 border border-violet-200 p-2 text-violet-950">
                <span className="block font-black text-violet-700 uppercase tracking-wider text-[10px]">
                  Variable Base
                </span>
                Letter x
              </div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2 text-emerald-950">
                <span className="block font-black text-emerald-700 uppercase tracking-wider text-[10px]">
                  Exponent / Power
                </span>
                Power = 3
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Unit 4 Polynomials: Degrees as Dimensions
  if (unitId === "u-9math-poly-4") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Degree of Polynomial = Geometric Dimensions
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Point (0D) → Line (1D) → Square (2D) → Cube (3D)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Geometric Model
          </span>
        </div>

        {/* Responsive Grid of 4 Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Degree 0: Constant */}
          <div className="rounded-2xl bg-white border-2 border-slate-200 p-4 text-center space-y-2.5 shadow-2xs">
            <div className="h-20 flex items-center justify-center bg-slate-50 rounded-xl">
              <div className="h-4 w-4 rounded-full bg-slate-700 shadow-sm" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                0-Dimension (Point)
              </span>
              <h5 className="font-extrabold text-sm text-slate-900">Constant (Deg 0)</h5>
              <p className="font-mono text-xs text-indigo-700 font-bold mt-1">P(x) = 5 (x⁰ = 1)</p>
            </div>
          </div>

          {/* Degree 1: Linear */}
          <div className="rounded-2xl bg-white border-2 border-indigo-200 p-4 text-center space-y-2.5 shadow-2xs">
            <div className="h-20 flex items-center justify-center bg-indigo-50/50 rounded-xl px-4">
              <div className="w-full flex items-center">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                <div className="flex-1 h-1 bg-indigo-600" />
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">
                1-Dimension (Line)
              </span>
              <h5 className="font-extrabold text-sm text-indigo-950">Linear (Deg 1)</h5>
              <p className="font-mono text-xs text-indigo-700 font-bold mt-1">Length = x</p>
            </div>
          </div>

          {/* Degree 2: Quadratic */}
          <div className="rounded-2xl bg-white border-2 border-amber-200 p-4 text-center space-y-2.5 shadow-2xs">
            <div className="h-20 flex items-center justify-center bg-amber-50/50 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-amber-400/80 border-2 border-amber-600 flex items-center justify-center text-xs font-mono font-bold text-amber-950">
                x²
              </div>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                2-Dimension (Area)
              </span>
              <h5 className="font-extrabold text-sm text-amber-950">Quadratic (Deg 2)</h5>
              <p className="font-mono text-xs text-amber-800 font-bold mt-1">Area = x × x</p>
            </div>
          </div>

          {/* Degree 3: Cubic */}
          <div className="rounded-2xl bg-white border-2 border-violet-200 p-4 text-center space-y-2.5 shadow-2xs">
            <div className="h-20 flex items-center justify-center bg-violet-50/50 rounded-xl">
              {/* Isometric 3D Cube SVG */}
              <svg className="h-14 w-14" viewBox="0 0 60 60" fill="none">
                <path d="M30 6 L52 18 L30 30 L8 18 Z" fill="#c4b5fd" stroke="#6d28d9" strokeWidth="1.5" />
                <path d="M8 18 L30 30 L30 54 L8 42 Z" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" />
                <path d="M30 30 L52 18 L52 42 L30 54 Z" fill="#a78bfa" stroke="#6d28d9" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-violet-700 block">
                3-Dimension (Volume)
              </span>
              <h5 className="font-extrabold text-sm text-violet-950">Cubic (Deg 3)</h5>
              <p className="font-mono text-xs text-violet-800 font-bold mt-1">Volume = x³</p>
            </div>
          </div>
        </div>

        <p className="text-xs font-medium text-slate-600 leading-relaxed text-center bg-white/80 rounded-xl p-2.5 border border-slate-100">
          💡 <strong>Yaad rakhne ka tarika:</strong> Dimension 1 = Line (Degree 1), Dimension 2 = Area (Degree 2), Dimension 3 = Solid Volume (Degree 3).
        </p>
      </div>
    );
  }

  // 3. Unit 7 Polynomials: Division & Remainder Machine
  if (unitId === "u-9math-poly-7") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-emerald-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Flow: Polynomial Division Machine & Factor Theorem
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Dividend = Divisor × Quotient + Remainder
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Algorithm Flowchart
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Step 1: Input & Division */}
          <div className="rounded-2xl bg-white border border-indigo-100 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">
              1. The Division Setup
            </span>
            <div className="rounded-xl bg-indigo-50/80 p-3 font-mono text-xs space-y-1 font-bold text-indigo-950">
              <p>Dividend: P(x)</p>
              <p>Divisor: (x - a)</p>
              <p className="text-indigo-600 pt-1 border-t border-indigo-200">
                P(x) = (x - a)q(x) + r
              </p>
            </div>
            <p className="text-xs text-slate-600">
              Divisor degree 1 hai, toh remainder hamesha ek <strong>constant number (r)</strong> hoga.
            </p>
          </div>

          {/* Step 2: Remainder Theorem Shortcut */}
          <div className="rounded-2xl bg-white border border-amber-200 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
              2. Remainder Shortcut ⚡
            </span>
            <div className="rounded-xl bg-amber-50/90 p-3 font-mono text-xs space-y-1 font-bold text-amber-950 text-center">
              <p className="text-sm font-black text-amber-900">Remainder = P(a)</p>
              <p className="text-[11px] text-amber-700">Put x = a in P(x)</p>
            </div>
            <p className="text-xs text-slate-600">
              Long division kiye bina seedha x = a rakhkar Remainder mil jata hai!
            </p>
          </div>

          {/* Step 3: Factor Theorem Decision */}
          <div className="rounded-2xl bg-white border border-emerald-200 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
              3. Factor Theorem Check ✅
            </span>
            <div className="rounded-xl bg-emerald-50/90 p-3 font-mono text-xs space-y-1 font-bold text-emerald-950 text-center">
              <p className="text-xs font-black">Is Remainder == 0?</p>
              <span className="inline-block mt-1 text-[11px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full">
                YES ➔ (x - a) is a Factor!
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Agar P(a) = 0 aa jaye, to (x - a) uska pakka factor hai!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 4. Unit 4 Factorisation: Geometric Proof of a² - b²
  if (unitId === "u-9math-fact-4") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Geometric Proof: a² - b² = (a - b)(a + b)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Carpenter ki Kahani: Square se Rectangle banane ka visual
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Geometric Proof
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Visual SVG Diagram */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center justify-center">
            <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto">
              {/* Big Square a x a */}
              <rect x="20" y="20" width="130" height="130" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
              <text x="80" y="75" fill="#312e81" fontSize="13" fontWeight="bold" textAnchor="middle">
                Area = a²
              </text>
              {/* Cutout Corner Square b x b */}
              <rect x="90" y="90" width="60" height="60" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeDasharray="4" />
              <text x="120" y="125" fill="#9f1239" fontSize="11" fontWeight="bold" textAnchor="middle">
                Cut b²
              </text>

              {/* Arrow */}
              <path d="M 165 85 L 195 85" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* Rearranged Rectangle: (a+b) x (a-b) */}
              <rect x="205" y="45" width="100" height="80" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
              <text x="255" y="85" fill="#14532d" fontSize="11" fontWeight="bold" textAnchor="middle">
                (a - b) × (a + b)
              </text>
            </svg>
          </div>

          {/* Explanation steps */}
          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-indigo-50/80 border border-indigo-200 p-3">
              <span className="font-black text-indigo-950 block text-xs">
                1. Bada square side 'a' (Area = a²)
              </span>
              Uske ek kone se chhota square 'b' (Area = b²) kaat kar nikaal diya.
            </div>

            <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3">
              <span className="font-black text-amber-950 block text-xs">
                2. Bacha hua L-shaped tukda
              </span>
              Bache hue hisse ka area seedha <strong>a² - b²</strong> hai.
            </div>

            <div className="rounded-xl bg-emerald-50/80 border border-emerald-200 p-3">
              <span className="font-black text-emerald-950 block text-xs">
                3. Tukdon ko rectangle mein joda
              </span>
              L-shape ko do pattiyon mein kaat kar aage-peeche joda, toh rectangle bana jiski lambai <strong>(a + b)</strong> aur chaudai <strong>(a - b)</strong> aayi!
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-amber-300 tracking-wide">
          📐 a² - b² = (a + b)(a - b)
        </div>
      </div>
    );
  }

  // 5. Unit 5 Factorisation: Priya ke Tiles (Area Model for Quadratic Trinomials)
  if (unitId === "u-9math-fact-5") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-emerald-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Area Model: Priya ke Tiles (x² + 4x + 3)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Quadratic Trinomial ko Rectangle mein assemble karna
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            Tiles Area Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Visual SVG Tile Grid */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center space-y-2">
            <svg viewBox="0 0 240 180" className="w-full max-w-[240px] h-auto">
              {/* Width label: x + 3 */}
              <text x="120" y="15" fill="#4338ca" fontSize="12" fontWeight="bold" textAnchor="middle">
                Length = (x + 3)
              </text>

              {/* Big tile x² */}
              <rect x="30" y="25" width="90" height="90" fill="#c7d2fe" stroke="#4338ca" strokeWidth="2" />
              <text x="75" y="75" fill="#312e81" fontSize="14" fontWeight="bold" textAnchor="middle">
                x²
              </text>

              {/* 3 vertical strips 3x */}
              <rect x="120" y="25" width="25" height="90" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="145" y="25" width="25" height="90" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="170" y="25" width="25" height="90" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="157" y="75" fill="#854d0e" fontSize="12" fontWeight="bold" textAnchor="middle">
                3x
              </text>

              {/* 1 horizontal strip 1x */}
              <rect x="30" y="115" width="90" height="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="75" y="132" fill="#854d0e" fontSize="11" fontWeight="bold" textAnchor="middle">
                1x
              </text>

              {/* 3 small unit tiles */}
              <rect x="120" y="115" width="25" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <rect x="145" y="115" width="25" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <rect x="170" y="115" width="25" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <text x="157" y="132" fill="#14532d" fontSize="11" fontWeight="bold" textAnchor="middle">
                3
              </text>

              {/* Height label: x + 1 */}
              <text x="15" y="90" fill="#4338ca" fontSize="11" fontWeight="bold" textAnchor="middle" transform="rotate(-90 15 90)">
                (x + 1)
              </text>
            </svg>
          </div>

          {/* Explanation */}
          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-indigo-50/80 border border-indigo-200 p-3">
              <span className="font-black text-indigo-950 block text-xs">
                Tiles ka Jod (Area):
              </span>
              1 Badi tile (x²) + 4 pattiyan (4x) + 3 chhoti tiles (3) = <strong>x² + 4x + 3</strong>
            </div>

            <div className="rounded-xl bg-emerald-50/80 border border-emerald-200 p-3">
              <span className="font-black text-emerald-950 block text-xs">
                Rectangle ke Dimensions:
              </span>
              Farsh ki lambai <strong>(x + 3)</strong> nikli aur chaudai <strong>(x + 1)</strong> nikli.
            </div>

            <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3">
              <span className="font-black text-amber-950 block text-xs">
                Factorisation ka Asal Matlab:
              </span>
              Kisi trinomial ko factorise karna = tiles ko ek complete rectangle mein set karna!
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-emerald-300 tracking-wide">
          📐 x² + 4x + 3 = (x + 1)(x + 3)
        </div>
      </div>
    );
  }

  // 6. Unit 1 Coordinate Geometry: The Cartesian Plane & Axes
  if (unitId === "u-9math-coord-1") {
    return (
      <div className="rounded-3xl border-2 border-sky-200/90 bg-gradient-to-br from-sky-50/60 via-white to-indigo-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-600 text-white font-black text-xs shadow-xs">
              📍
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: The Cartesian Coordinate Plane
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                René Descartes' Discovery: x-axis, y-axis & Origin (0, 0)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/80 px-2.5 py-1 rounded-full">
            Cartesian Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* SVG Vector Coordinate Axes */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 280 200" className="w-full max-w-[260px] h-auto">
              {/* Grid lines */}
              <line x1="20" y1="100" x2="260" y2="100" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="140" y1="180" x2="140" y2="20" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Axis labels */}
              <text x="265" y="104" fill="#0369a1" fontSize="12" fontWeight="bold">x</text>
              <text x="14" y="104" fill="#64748b" fontSize="12" fontWeight="bold">x'</text>
              <text x="144" y="16" fill="#0369a1" fontSize="12" fontWeight="bold">y</text>
              <text x="144" y="195" fill="#64748b" fontSize="12" fontWeight="bold">y'</text>

              {/* Origin */}
              <circle cx="140" cy="100" r="4.5" fill="#dc2626" />
              <text x="122" y="116" fill="#dc2626" fontSize="11" fontWeight="bold">O(0,0)</text>

              {/* Example Point (3, 2) */}
              <circle cx="200" cy="60" r="5" fill="#4338ca" />
              <line x1="200" y1="100" x2="200" y2="60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="140" y1="60" x2="200" y2="60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3" />
              <text x="208" y="58" fill="#312e81" fontSize="12" fontWeight="bold">P(3, 2)</text>

              {/* Step indicator */}
              <text x="170" y="115" fill="#4338ca" fontSize="10" fontWeight="bold">3 right</text>
              <text x="205" y="85" fill="#4338ca" fontSize="10" fontWeight="bold">2 up</text>
            </svg>
          </div>

          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-sky-50 border border-sky-200 p-3">
              <span className="font-black text-sky-950 block text-xs">
                Horizontal Line = x-axis
              </span>
              Origin se <strong>Right = Positive (+)</strong>, <strong>Left = Negative (−)</strong>.
            </div>

            <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3">
              <span className="font-black text-indigo-950 block text-xs">
                Vertical Line = y-axis
              </span>
              Origin se <strong>Upar = Positive (+)</strong>, <strong>Neeche = Negative (−)</strong>.
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <span className="font-black text-amber-950 block text-xs">
                Ordered Pair (x, y) = Location
              </span>
              Pehle x (kitna left/right chale), phir y (kitna upar/neeche chadhna hai).
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-sky-300 tracking-wide">
          📍 Origin = (0, 0) • Any Point = (x, y)
        </div>
      </div>
    );
  }

  // 7. Unit 2 Coordinate Geometry: The 4 Quadrants
  if (unitId === "u-9math-coord-2") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              🧭
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Model: The Four Quadrants & Sign Rules
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Abscissa (x) aur Ordinate (y) ke signs
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Quadrant Map
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Quadrant II */}
          <div className="rounded-2xl bg-indigo-50/70 border-2 border-indigo-200 p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-indigo-900 uppercase tracking-wider">
                Quadrant II (Top-Left)
              </span>
              <span className="font-mono font-black text-xs bg-indigo-200/90 text-indigo-950 px-2 py-0.5 rounded-md">
                (−, +)
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700">
              x is Negative (−), y is Positive (+)
            </p>
            <p className="font-mono text-xs text-indigo-800 font-bold">
              Example: (−4, 9), (−2, 5)
            </p>
          </div>

          {/* Quadrant I */}
          <div className="rounded-2xl bg-emerald-50/70 border-2 border-emerald-200 p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-emerald-900 uppercase tracking-wider">
                Quadrant I (Top-Right)
              </span>
              <span className="font-mono font-black text-xs bg-emerald-200/90 text-emerald-950 px-2 py-0.5 rounded-md">
                (+, +)
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700">
              Both x & y are Positive (+)
            </p>
            <p className="font-mono text-xs text-emerald-800 font-bold">
              Example: (3, 5), (6, 2)
            </p>
          </div>

          {/* Quadrant III */}
          <div className="rounded-2xl bg-rose-50/70 border-2 border-rose-200 p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-rose-900 uppercase tracking-wider">
                Quadrant III (Bottom-Left)
              </span>
              <span className="font-mono font-black text-xs bg-rose-200/90 text-rose-950 px-2 py-0.5 rounded-md">
                (−, −)
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700">
              Both x & y are Negative (−)
            </p>
            <p className="font-mono text-xs text-rose-800 font-bold">
              Example: (−3, −8), (−1, −4)
            </p>
          </div>

          {/* Quadrant IV */}
          <div className="rounded-2xl bg-amber-50/70 border-2 border-amber-200 p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-amber-900 uppercase tracking-wider">
                Quadrant IV (Bottom-Right)
              </span>
              <span className="font-mono font-black text-xs bg-amber-200/90 text-amber-950 px-2 py-0.5 rounded-md">
                (+, −)
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700">
              x is Positive (+), y is Negative (−)
            </p>
            <p className="font-mono text-xs text-amber-800 font-bold">
              Example: (5, −3), (2, −7)
            </p>
          </div>
        </div>

        <p className="text-xs font-medium text-slate-600 leading-relaxed text-center bg-white/80 rounded-xl p-2.5 border border-slate-100">
          💡 <strong>Abscissa</strong> = x-coordinate (left/right) • <strong>Ordinate</strong> = y-coordinate (up/down).
        </p>
      </div>
    );
  }

  // 8. Unit 3 Coordinate Geometry: Points on Coordinate Axes
  if (unitId === "u-9math-coord-3") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              📍
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Points on the Coordinate Axes
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                x-axis par y = 0 aur y-axis par x = 0
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Axes Rules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="rounded-2xl bg-white border border-sky-200 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 block">
              1. Points on x-axis
            </span>
            <div className="rounded-xl bg-sky-50 p-3 font-mono text-center font-bold text-sky-950">
              <span className="text-base font-black">(x, 0)</span>
              <p className="text-xs font-normal text-sky-800 mt-1">hamesha y = 0 hota hai</p>
            </div>
            <p className="text-xs text-slate-600">
              Example: (5, 0), (−7, 0). Equation of x-axis: <strong>y = 0</strong>.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-violet-200 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-violet-700 block">
              2. Points on y-axis
            </span>
            <div className="rounded-xl bg-violet-50 p-3 font-mono text-center font-bold text-violet-950">
              <span className="text-base font-black">(0, y)</span>
              <p className="text-xs font-normal text-violet-800 mt-1">hamesha x = 0 hota hai</p>
            </div>
            <p className="text-xs text-slate-600">
              Example: (0, 4), (0, −3). Equation of y-axis: <strong>x = 0</strong>.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-200 p-4 space-y-2 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
              3. The Golden Rule
            </span>
            <div className="rounded-xl bg-amber-50 p-3 font-mono text-center font-bold text-amber-950">
              <span className="text-sm font-black">No Quadrant!</span>
              <p className="text-xs font-normal text-amber-800 mt-1">Border par hain</p>
            </div>
            <p className="text-xs text-slate-600">
              Axes par baithe points kisi bhi quadrant mein nahi hote!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 9. Unit 1 Linear Equations: ax + by + c = 0
  if (unitId === "u-9math-lineq-1") {
    return (
      <div className="rounded-3xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-xs shadow-xs">
              📈
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Standard Form & Infinitely Many Solutions
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                ax + by + c = 0 (Two variables x and y)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            Equation Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-emerald-200 p-5 space-y-3 shadow-xs">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
              General / Standard Form
            </span>
            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <span className="font-mono text-xl sm:text-2xl font-black text-emerald-950 tracking-wide">
                ax + by + c = 0
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              Yahan <strong>a</strong> aur <strong>b</strong> dono ek saath 0 nahi ho sakte (a² + b² ≠ 0). Do variables <strong>x</strong> aur <strong>y</strong> dono ki degree 1 hoti hai.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-teal-200 p-5 space-y-3 shadow-xs">
            <span className="text-[11px] font-black uppercase tracking-wider text-teal-700 block">
              Infinitely Many Solutions (Anginat Hal)
            </span>
            <div className="rounded-xl bg-teal-50 p-3 space-y-1 text-xs font-mono font-bold text-teal-950">
              <p>For x + y = 5:</p>
              <p className="text-teal-800">x=0 ➔ y=5 ➔ (0, 5)</p>
              <p className="text-teal-800">x=1 ➔ y=4 ➔ (1, 4)</p>
              <p className="text-teal-800">x=2 ➔ y=3 ➔ (2, 3)</p>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              x ki har ek value ke liye y milta hai, isiliye do variables wali equation ke <strong>infinite solutions</strong> hote hain!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 10. Unit 2 Linear Equations: Straight Line Graph
  if (unitId === "u-9math-lineq-2") {
    return (
      <div className="rounded-3xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-xs shadow-xs">
              📈
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Graph of a Linear Equation = Straight Line
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Saare solutions ek hi seedhi line par aate hain
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            Graph Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* SVG Vector Straight Line Graph */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 260 180" className="w-full max-w-[240px] h-auto">
              {/* Axes */}
              <line x1="20" y1="140" x2="240" y2="140" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="160" x2="60" y2="20" stroke="#0f172a" strokeWidth="2" />
              <text x="245" y="144" fill="#0f172a" fontSize="11" fontWeight="bold">x</text>
              <text x="64" y="18" fill="#0f172a" fontSize="11" fontWeight="bold">y</text>

              {/* Straight Line 3x + 2y = 12 */}
              <line x1="30" y1="35" x2="210" y2="155" stroke="#16a34a" strokeWidth="2.5" />

              {/* Point on y-axis (0, 6) */}
              <circle cx="60" cy="55" r="4.5" fill="#dc2626" />
              <text x="70" y="55" fill="#991b1b" fontSize="10" fontWeight="bold">(0, 6)</text>

              {/* Point (2, 3) */}
              <circle cx="120" cy="95" r="4.5" fill="#2563eb" />
              <text x="130" y="95" fill="#1e40af" fontSize="10" fontWeight="bold">(2, 3)</text>

              {/* Point on x-axis (4, 0) */}
              <circle cx="180" cy="140" r="4.5" fill="#dc2626" />
              <text x="175" y="156" fill="#991b1b" fontSize="10" fontWeight="bold">(4, 0)</text>
            </svg>
          </div>

          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
              <span className="font-black text-emerald-950 block text-xs">
                Linear Equation = Straight Line
              </span>
              Is equation ke anginat solutions hain, aur wo saare points milkar ek seedhi line banate hain.
            </div>

            <div className="rounded-xl bg-sky-50 border border-sky-200 p-3">
              <span className="font-black text-sky-950 block text-xs">
                Axis Intercepts (Kahan kaat-ti hai):
              </span>
              x-axis par <strong>y = 0</strong> rakho ➔ (4, 0)<br />
              y-axis par <strong>x = 0</strong> rakho ➔ (0, 6)
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <span className="font-black text-amber-950 block text-xs">
                Lines Parallel to Axes:
              </span>
              <strong>y = k</strong> line x-axis ke parallel hoti hai.<br />
              <strong>x = k</strong> line y-axis ke parallel hoti hai.
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-emerald-300 tracking-wide">
          📈 Every point on the line is a solution of the equation!
        </div>
      </div>
    );
  }

  // 11. Unit 1 Euclid's Geometry: The 5th Postulate (Parallel Postulate)
  if (unitId === "u-9math-euclid-1") {
    return (
      <div className="rounded-3xl border-2 border-cyan-200/90 bg-gradient-to-br from-cyan-50/60 via-white to-blue-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Euclid's 5th Postulate (The Parallel Postulate)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Transversal line & Consecutive Interior Angles (&lt; 180°)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-cyan-800 bg-cyan-100/80 px-2.5 py-1 rounded-full">
            5th Postulate
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* SVG Vector 5th Postulate Diagram */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 280 180" className="w-full max-w-[260px] h-auto">
              {/* Transversal Line t */}
              <line x1="80" y1="20" x2="160" y2="160" stroke="#0284c7" strokeWidth="2.5" />
              <text x="75" y="15" fill="#0284c7" fontSize="11" fontWeight="bold">Line t</text>

              {/* Line 1 (slanted) */}
              <line x1="20" y1="65" x2="200" y2="55" stroke="#0f172a" strokeWidth="2" />
              <line x1="200" y1="55" x2="260" y2="50" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3" />

              {/* Line 2 (slanted towards line 1 on right) */}
              <line x1="20" y1="110" x2="200" y2="80" stroke="#0f172a" strokeWidth="2" />
              <line x1="200" y1="80" x2="260" y2="50" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3" />

              {/* Meeting Point P */}
              <circle cx="260" cy="50" r="4.5" fill="#dc2626" />
              <text x="245" y="40" fill="#dc2626" fontSize="10" fontWeight="bold">Meets at P</text>

              {/* Interior Angles on Right */}
              <text x="135" y="58" fill="#d97706" fontSize="11" fontWeight="bold">∠1</text>
              <text x="145" y="98" fill="#d97706" fontSize="11" fontWeight="bold">∠2</text>

              {/* Angle sum label */}
              <text x="120" y="140" fill="#b45309" fontSize="10" fontWeight="bold">∠1 + ∠2 &lt; 180°</text>
            </svg>
          </div>

          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-3">
              <span className="font-black text-cyan-950 block text-xs">
                Euclid ka 5th Postulate:
              </span>
              Jab ek straight line do lines par girti hai aur ek hi taraf ke <strong>interior angles ka sum &lt; 180°</strong> (two right angles) hota hai...
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <span className="font-black text-amber-950 block text-xs">
                Kahan milengi?
              </span>
              Lines usi taraf aage badhane par ek doosre ko kaatengi (intersect karengi) jis taraf sum 180° se kam hai!
            </div>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
              <span className="font-black text-emerald-950 block text-xs">
                Agar sum == 180° ho to?
              </span>
              Dono taraf kabhi nahi milengi, yaani wo <strong>Parallel Lines</strong> ban jayengi!
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-cyan-300 tracking-wide">
          📐 Sum &lt; 180° ➔ Lines will intersect on that side!
        </div>
      </div>
    );
  }

  // 12. Unit 2 Euclid's Geometry: Hierarchy of Dimensions
  if (unitId === "u-9math-euclid-2") {
    return (
      <div className="rounded-3xl border-2 border-blue-200/90 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xs">
              🧱
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Dimensional Hierarchy of Geometry
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Solid (3D) → Surface (2D) → Line (1D) → Point (0D)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full">
            Dimensions
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="rounded-2xl bg-white border-2 border-blue-200 p-4 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block">
              Solid (3 Dimensions)
            </span>
            <div className="h-10 flex items-center justify-center font-bold text-sm text-blue-950">
              Length, Breadth, Height
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Boundaries = Surfaces</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-teal-200 p-4 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 block">
              Surface (2 Dimensions)
            </span>
            <div className="h-10 flex items-center justify-center font-bold text-sm text-teal-950">
              Length & Breadth
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Boundaries = Lines</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-indigo-200 p-4 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
              Line (1 Dimension)
            </span>
            <div className="h-10 flex items-center justify-center font-bold text-sm text-indigo-950">
              Length only
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Ends = Points</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-amber-200 p-4 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
              Point (0 Dimensions)
            </span>
            <div className="h-10 flex items-center justify-center font-bold text-sm text-amber-950">
              No Part (No size)
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Position only</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
            <span className="font-mono text-xs font-bold text-slate-800 block">Line AB (↔)</span>
            <span className="text-[11px] text-slate-500 font-medium">No endpoints (infinite)</span>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
            <span className="font-mono text-xs font-bold text-slate-800 block">Segment AB (•—•)</span>
            <span className="text-[11px] text-slate-500 font-medium">2 endpoints (fixed length)</span>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
            <span className="font-mono text-xs font-bold text-slate-800 block">Ray AB (•→)</span>
            <span className="text-[11px] text-slate-500 font-medium">1 endpoint (one direction)</span>
          </div>
        </div>
      </div>
    );
  }

  // 13. Unit 3 Euclid's Geometry: Lines Through Points
  if (unitId === "u-9math-euclid-3") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs">
              🤝
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Lines Through Points (The Handshake Formula)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                n points se kitni unique lines nikalti hain
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
            Formula Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="rounded-2xl bg-white border border-indigo-200 p-4 space-y-2 text-center shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
              1 Given Point
            </span>
            <div className="h-14 flex items-center justify-center">
              <span className="text-2xl font-mono font-black text-indigo-950">∞ Lines</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold">
              Ek akele point se har disha mein anginat lines guzar sakti hain.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-200 p-4 space-y-2 text-center shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
              2 Distinct Points
            </span>
            <div className="h-14 flex items-center justify-center">
              <span className="text-2xl font-mono font-black text-emerald-950">1 Unique Line</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold">
              Do points se sirf aur sirf ek hi seedhi line guzar sakti hai!
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-200 p-4 space-y-2 text-center shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block">
              n Non-Collinear Points
            </span>
            <div className="h-14 flex items-center justify-center">
              <span className="text-xl font-mono font-black text-purple-950">n(n − 1) / 2</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold">
              6 points = 6 × 5 / 2 = 15 lines (Party mein handshakes jaisa).
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 14. Unit 4 Euclid's Geometry: Proposition 1 (Equilateral Triangle Construction)
  if (unitId === "u-9math-euclid-4") {
    return (
      <div className="rounded-3xl border-2 border-cyan-200/90 bg-gradient-to-br from-cyan-50/60 via-white to-indigo-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-600 text-white font-black text-xs shadow-xs">
              🔺
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Proof: Euclid's Proposition 1 (Equilateral Triangle)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Segment AB par do overlapping circles se triangle banana
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-cyan-800 bg-cyan-100/80 px-2.5 py-1 rounded-full">
            Proposition 1
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* SVG Vector Two Circles & Triangle */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 260 180" className="w-full max-w-[240px] h-auto">
              {/* Circle A */}
              <circle cx="100" cy="110" r="55" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3" />
              {/* Circle B */}
              <circle cx="155" cy="110" r="55" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3" />

              {/* Base AB */}
              <line x1="100" y1="110" x2="155" y2="110" stroke="#0f172a" strokeWidth="2.5" />
              <circle cx="100" cy="110" r="3.5" fill="#2563eb" />
              <circle cx="155" cy="110" r="3.5" fill="#059669" />
              <text x="88" y="125" fill="#1e40af" fontSize="10" fontWeight="bold">A</text>
              <text x="160" y="125" fill="#065f46" fontSize="10" fontWeight="bold">B</text>

              {/* Intersection C */}
              <circle cx="127.5" cy="62.5" r="4" fill="#dc2626" />
              <text x="127.5" y="52" fill="#dc2626" fontSize="11" fontWeight="bold" textAnchor="middle">C</text>

              {/* Triangle Sides AC and BC */}
              <line x1="100" y1="110" x2="127.5" y2="62.5" stroke="#2563eb" strokeWidth="2" />
              <line x1="155" y1="110" x2="127.5" y2="62.5" stroke="#059669" strokeWidth="2" />
            </svg>
          </div>

          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
            <div className="rounded-xl bg-blue-50 border border-blue-200 p-3">
              <span className="font-black text-blue-950 block text-xs">
                1. Circle A (Radius AB)
              </span>
              C usi circle par hai, to <strong>AC = AB</strong> (Circle ke radii).
            </div>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
              <span className="font-black text-emerald-950 block text-xs">
                2. Circle B (Radius AB)
              </span>
              C doosre circle par bhi hai, to <strong>BC = AB</strong>.
            </div>

            <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-3">
              <span className="font-black text-cyan-950 block text-xs">
                3. Euclid's Axiom 1:
              </span>
              AC aur BC dono AB ke barabar hain ➔ <strong>AC = BC = AB</strong>! Teeno sides barabar, isliye △ABC equilateral hai!
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-cyan-300 tracking-wide">
          📐 Things equal to the same thing are equal to one another (Axiom 1)
        </div>
      </div>
    );
  }

  // 15. Unit 1 Lines & Angles: Clock & Types of Angles
  if (unitId === "u-9math-lineang-1") {
    return (
      <div className="rounded-3xl border-2 border-amber-200/90 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-600 text-white font-black text-xs shadow-xs">
              ⏰
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Clock Hands & Types of Angles
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Acute (&lt;90°) • Right (90°) • Obtuse (90°-180°) • Straight (180°)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
            Angle Spectrum
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="rounded-2xl bg-white border-2 border-indigo-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
              2:00 (Acute)
            </span>
            <div className="h-10 flex items-center justify-center font-mono font-black text-lg text-indigo-950">
              60°
            </div>
            <p className="text-[11px] text-slate-500 font-medium">0° &lt; θ &lt; 90°</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-emerald-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
              3:00 (Right)
            </span>
            <div className="h-10 flex items-center justify-center font-mono font-black text-lg text-emerald-950">
              90°
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Exact 90° (Corner)</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-amber-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
              5:00 (Obtuse)
            </span>
            <div className="h-10 flex items-center justify-center font-mono font-black text-lg text-amber-950">
              150°
            </div>
            <p className="text-[11px] text-slate-500 font-medium">90° &lt; θ &lt; 180°</p>
          </div>

          <div className="rounded-2xl bg-white border-2 border-rose-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
              6:00 (Straight)
            </span>
            <div className="h-10 flex items-center justify-center font-mono font-black text-lg text-rose-950">
              180°
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Exact straight line</p>
          </div>
        </div>

        <p className="text-xs font-medium text-slate-600 leading-relaxed text-center bg-white/80 rounded-xl p-2.5 border border-slate-100">
          💡 <strong>Clock Rule:</strong> Ghadi mein har 1 ghante ka gap = 30° hota hai (360° / 12). Reflex angle = 360° − θ.
        </p>
      </div>
    );
  }

  // 16. Unit 2 Lines & Angles: Complementary, Supplementary & Linear Pair
  if (unitId === "u-9math-lineang-2") {
    return (
      <div className="rounded-3xl border-2 border-rose-200/90 bg-gradient-to-br from-rose-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-rose-600 text-white font-black text-xs shadow-xs">
              📐
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Complementary, Supplementary & Linear Pair
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Pizza slices sharing a common arm and straight-line sum (180°)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-rose-800 bg-rose-100/80 px-2.5 py-1 rounded-full">
            Angle Pairs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="rounded-2xl bg-white border border-indigo-200 p-4 space-y-2 shadow-2xs text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
              Complementary Angles
            </span>
            <div className="rounded-xl bg-indigo-50 p-3 font-mono font-black text-base text-indigo-950">
              ∠A + ∠B = 90°
            </div>
            <p className="text-xs text-slate-600">
              Dono angles milkar ek right angle (L-corner) banate hain. Example: 40° aur 50°.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-rose-200 p-4 space-y-2 shadow-2xs text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
              Linear Pair (Line par)
            </span>
            <div className="rounded-xl bg-rose-50 p-3 font-mono font-black text-base text-rose-950">
              ∠1 + ∠2 = 180°
            </div>
            <p className="text-xs text-slate-600">
              Ek straight line par ray khadi ho to dono adjacent angles ka jod hamesha 180° hota hai.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-200 p-4 space-y-2 shadow-2xs text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
              Around a Point (Poora gola)
            </span>
            <div className="rounded-xl bg-amber-50 p-3 font-mono font-black text-base text-amber-950">
              Sum = 360°
            </div>
            <p className="text-xs text-slate-600">
              Ek point ke chaaron taraf jitne bhi angles bante hain, un sabka kul jod 360° hota hai.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 17. Unit 3 Lines & Angles: Parallel Lines & Transversal Z, F, C Angles
  if (unitId === "u-9math-lineang-3") {
    return (
      <div className="rounded-3xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-xs shadow-xs">
              🛤️
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Visual Concept: Transversal Geometry (The Z, F, and C Angles)
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Railway Crossing: Parallel lines cut by a transversal
              </p>
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            Z • F • C Angles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="rounded-2xl bg-white border border-emerald-200 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                Z-Shape: Alternate Interior
              </span>
              <span className="text-xs font-black font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                EQUAL
              </span>
            </div>
            <div className="rounded-xl bg-emerald-50 p-3 text-center font-mono font-bold text-sm text-emerald-950">
              ∠3 = ∠5 &nbsp;|&nbsp; ∠4 = ∠6
            </div>
            <p className="text-xs text-slate-600">
              Z-shape ke dono kono par banne wale angles hamesha barabar hote hain.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-sky-200 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 block">
                F-Shape: Corresponding
              </span>
              <span className="text-xs font-black font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">
                EQUAL
              </span>
            </div>
            <div className="rounded-xl bg-sky-50 p-3 text-center font-mono font-bold text-sm text-sky-950">
              ∠1 = ∠5 &nbsp;|&nbsp; ∠2 = ∠6
            </div>
            <p className="text-xs text-slate-600">
              F-shape mein ek hi disha aur position wale angles barabar hote hain.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-200 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                C-Shape: Co-Interior
              </span>
              <span className="text-xs font-black font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                SUM = 180°
              </span>
            </div>
            <div className="rounded-xl bg-amber-50 p-3 text-center font-mono font-bold text-sm text-amber-950">
              ∠4 + ∠5 = 180°
            </div>
            <p className="text-xs text-slate-600">
              C-shape ke andar wale dono angles ka jod hamesha 180° (supplementary) hota hai.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-emerald-300 tracking-wide">
          🛤️ Parallel lines ➔ Z is Equal, F is Equal, C sums to 180°!
        </div>
      </div>
    );
  }

  // 18. Triangles Unit 1: Dual Classification & Triangle Inequality
  if (unitId === "u-9math-tri-1") {
    return (
      <div className="rounded-3xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm shadow-sm">
              ▲
            </span>
            <div>
              <h4 className="font-black text-slate-900 text-base sm:text-lg">
                Triangle Visualizer: Dual Classification &amp; Inequality Rule
              </h4>
              <p className="text-xs text-slate-500">
                Sides (Equilateral, Isosceles, Scalene) × Angles (Acute, Right, Obtuse)
              </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
            Unit 1 Visual Guide
          </span>
        </div>

        {/* 3 Archetype Triangles SVG */}
        <div className="overflow-x-auto rounded-2xl bg-white border border-emerald-100 p-4 shadow-2xs">
          <svg viewBox="0 0 760 210" className="w-full min-w-[680px] h-auto select-none">
            {/* 1. Equilateral Triangle */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="230" height="190" rx="12" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
              <text x="115" y="24" textAnchor="middle" className="text-[12px] font-black" fill="#047857">1. EQUILATERAL (Samabahu)</text>
              <polygon points="115,40 45,150 185,150" fill="#10b981" fillOpacity="0.15" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Equal tick marks */}
              <line x1="78" y1="92" x2="84" y2="98" stroke="#047857" strokeWidth="2" />
              <line x1="146" y1="98" x2="152" y2="92" stroke="#047857" strokeWidth="2" />
              <line x1="115" y1="146" x2="115" y2="154" stroke="#047857" strokeWidth="2" />
              {/* Angles */}
              <text x="115" y="65" textAnchor="middle" className="text-[11px] font-bold" fill="#047857">60°</text>
              <text x="65" y="142" textAnchor="middle" className="text-[11px] font-bold" fill="#047857">60°</text>
              <text x="165" y="142" textAnchor="middle" className="text-[11px] font-bold" fill="#047857">60°</text>
              <text x="115" y="174" textAnchor="middle" className="text-[10px] font-mono font-bold" fill="#065f46">3 Sides = Equal | 3 Angles = 60°</text>
            </g>

            {/* 2. Right-Angled Isosceles Triangle */}
            <g transform="translate(260, 10)">
              <rect x="0" y="0" width="230" height="190" rx="12" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
              <text x="115" y="24" textAnchor="middle" className="text-[12px] font-black" fill="#1d4ed8">2. RIGHT ISOSCELES (Samadwibahu)</text>
              <polygon points="55,45 55,150 175,150" fill="#3b82f6" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round" />
              {/* 90 deg square */}
              <rect x="55" y="136" width="14" height="14" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
              {/* Equal side ticks */}
              <line x1="51" y1="98" x2="59" y2="98" stroke="#1d4ed8" strokeWidth="2" />
              <line x1="115" y1="146" x2="115" y2="154" stroke="#1d4ed8" strokeWidth="2" />
              {/* Angles */}
              <text x="75" y="68" textAnchor="middle" className="text-[11px] font-bold" fill="#1d4ed8">45°</text>
              <text x="150" y="142" textAnchor="middle" className="text-[11px] font-bold" fill="#1d4ed8">45°</text>
              {/* Hypotenuse label */}
              <text x="125" y="90" textAnchor="middle" transform="rotate(41 125 90)" className="text-[10px] font-mono font-black" fill="#4338ca">Hypotenuse (Karn)</text>
              <text x="115" y="174" textAnchor="middle" className="text-[10px] font-mono font-bold" fill="#1e40af">1 Angle = 90° | 2 Sides = Equal</text>
            </g>

            {/* 3. Obtuse Scalene Triangle */}
            <g transform="translate(510, 10)">
              <rect x="0" y="0" width="240" height="190" rx="12" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
              <text x="120" y="24" textAnchor="middle" className="text-[12px] font-black" fill="#c2410c">3. OBTUSE SCALENE (Vishamabahu)</text>
              <polygon points="120,60 30,150 215,150" fill="#f97316" fillOpacity="0.15" stroke="#ea580c" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Obtuse angle arc */}
              <path d="M 105,75 A 20 20 0 0 0 135,70" fill="none" stroke="#c2410c" strokeWidth="1.8" />
              <text x="120" y="95" textAnchor="middle" className="text-[11px] font-black" fill="#c2410c">120°</text>
              <text x="60" y="142" textAnchor="middle" className="text-[10px] font-bold" fill="#9a3412">25°</text>
              <text x="185" y="142" textAnchor="middle" className="text-[10px] font-bold" fill="#9a3412">35°</text>
              <text x="120" y="174" textAnchor="middle" className="text-[10px] font-mono font-bold" fill="#9a3412">1 Angle &gt; 90° | All 3 Sides Unequal</text>
            </g>
          </svg>
        </div>

        {/* Essential Rules Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-emerald-200 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                Rule 1: Triangle Inequality Theorem
              </span>
              <span className="text-xs font-black font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                GOLDEN RULE
              </span>
            </div>
            <div className="rounded-xl bg-emerald-50 p-3 text-center font-mono font-bold text-sm text-emerald-950">
              a + b &gt; c &nbsp;|&nbsp; b + c &gt; a &nbsp;|&nbsp; c + a &gt; b
            </div>
            <p className="text-xs text-slate-600">
              Kisi bhi do sides ka sum teesri side se <strong>bada</strong> hona hi chahiye. Agar chhota ya barabar hua (jaise 3 + 4 = 7 &lt; 8), to dono lines aapas mein nahi jud payengi!
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-teal-200 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 block">
                Rule 2: Perimeter (Parimaap)
              </span>
              <span className="text-xs font-black font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded-md">
                BOUNDARY SUM
              </span>
            </div>
            <div className="rounded-xl bg-teal-50 p-3 text-center font-mono font-bold text-sm text-teal-950">
              Perimeter P = a + b + c
            </div>
            <p className="text-xs text-slate-600">
              Equilateral triangle mein: <strong>P = 3 × side</strong>. Isosceles mein: <strong>P = 2a + b</strong>. Boundary ke chaaron taraf ek chakkar lagane ki kul doori.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-emerald-300 tracking-wide">
          ⛺ Tip: Equilateral = All sides &amp; angles equal (60°) | Isosceles = 2 sides equal | Scalene = All different!
        </div>
      </div>
    );
  }

  // 19. Triangles Unit 2: The 4 Centres & Exterior Angle Theorem
  if (unitId === "u-9math-tri-2") {
    return (
      <div className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-sm shadow-sm">
              🎯
            </span>
            <div>
              <h4 className="font-black text-slate-900 text-base sm:text-lg">
                The 4 Centres of a Triangle &amp; Exterior Angle Theorem
              </h4>
              <p className="text-xs text-slate-500">
                Centroid (2:1), Orthocentre, Circumcentre, Incentre &amp; Angle Relationships
              </p>
            </div>
          </div>
          <span className="rounded-full bg-indigo-100 px-3 py-1 font-mono text-xs font-bold text-indigo-800">
            Unit 2 Visual Guide
          </span>
        </div>

        {/* SVG Diagram: Centroid (2:1) & Exterior Angle Theorem */}
        <div className="overflow-x-auto rounded-2xl bg-white border border-indigo-100 p-4 shadow-2xs">
          <svg viewBox="0 0 760 220" className="w-full min-w-[680px] h-auto select-none">
            {/* Diagram 1: Centroid & Median 2:1 Ratio */}
            <g transform="translate(15, 10)">
              <rect x="0" y="0" width="345" height="200" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="172" y="24" textAnchor="middle" className="text-[12px] font-black" fill="#1e293b">CENTROID (G): 2:1 MEDIAN RATIO</text>
              {/* Triangle ABC */}
              <polygon points="170,45 60,165 280,165" fill="#e0e7ff" fillOpacity="0.4" stroke="#4338ca" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Vertices */}
              <text x="170" y="38" textAnchor="middle" className="text-[11px] font-black" fill="#4338ca">A</text>
              <text x="48" y="172" textAnchor="middle" className="text-[11px] font-black" fill="#4338ca">B</text>
              <text x="292" y="172" textAnchor="middle" className="text-[11px] font-black" fill="#4338ca">C</text>
              {/* Midpoint D on BC */}
              <circle cx="170" cy="165" r="3.5" fill="#059669" />
              <text x="170" y="180" textAnchor="middle" className="text-[10px] font-bold" fill="#059669">D (Midpoint)</text>
              {/* Median AD */}
              <line x1="170" y1="45" x2="170" y2="165" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" />
              {/* Other medians faded */}
              <line x1="60" y1="165" x2="225" y2="105" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="280" y1="165" x2="115" y2="105" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Centroid G */}
              <circle cx="170" cy="125" r="5" fill="#dc2626" />
              <text x="188" y="128" textAnchor="start" className="text-[12px] font-black" fill="#dc2626">G (Centroid)</text>
              {/* 2:1 badges */}
              <text x="145" y="88" textAnchor="middle" className="text-[10px] font-mono font-black" fill="#4338ca">AG = 2x</text>
              <text x="145" y="150" textAnchor="middle" className="text-[10px] font-mono font-black" fill="#059669">GD = 1x</text>
              <text x="172" y="196" textAnchor="middle" className="text-[10px] font-bold" fill="#64748b">Balance Point: AG : GD = 2 : 1</text>
            </g>

            {/* Diagram 2: Exterior Angle Theorem */}
            <g transform="translate(385, 10)">
              <rect x="0" y="0" width="360" height="200" rx="12" fill="#fdf4ff" stroke="#f5d0fe" strokeWidth="1.5" />
              <text x="180" y="24" textAnchor="middle" className="text-[12px] font-black" fill="#701a75">EXTERIOR ANGLE THEOREM</text>
              {/* Extended base line */}
              <line x1="50" y1="145" x2="330" y2="145" stroke="#701a75" strokeWidth="2.5" />
              <polygon points="120,50 50,145 220,145" fill="#f0abfc" fillOpacity="0.25" stroke="#a21caf" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Labels A, B, C, D */}
              <text x="120" y="42" textAnchor="middle" className="text-[11px] font-black" fill="#701a75">A (∠1)</text>
              <text x="38" y="152" textAnchor="middle" className="text-[11px] font-black" fill="#701a75">B (∠2)</text>
              <text x="215" y="162" textAnchor="middle" className="text-[11px] font-black" fill="#701a75">C</text>
              <text x="325" y="162" textAnchor="middle" className="text-[11px] font-black" fill="#701a75">D (extended)</text>
              {/* Interior Opposite Angles */}
              <path d="M 112,65 A 16 16 0 0 0 128,65" fill="none" stroke="#2563eb" strokeWidth="2.5" />
              <path d="M 66,145 A 16 16 0 0 0 60,132" fill="none" stroke="#2563eb" strokeWidth="2.5" />
              {/* Exterior Angle Arc */}
              <path d="M 235,145 A 20 20 0 0 0 207,130" fill="none" stroke="#dc2626" strokeWidth="3" />
              <text x="245" y="128" textAnchor="start" className="text-[11px] font-black" fill="#dc2626">Ext ∠ACD = ∠1 + ∠2</text>
              <text x="180" y="186" textAnchor="middle" className="text-[10px] font-mono font-bold" fill="#86198f">Ext Angle = Sum of 2 Interior Opposite Angles</text>
            </g>
          </svg>
        </div>

        {/* The 4 Centres Reference Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded-2xl bg-white border border-rose-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
              1. Centroid (Kendraka - G)
            </span>
            <div className="text-xs font-bold text-slate-800">Intersection of Medians</div>
            <p className="text-[11px] text-slate-600">
              Vertex se saamne ke midpoint tak. Median ko <strong>2 : 1</strong> ratio mein baant-ta hai. Hamesha triangle ke andar.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-blue-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block">
              2. Orthocentre (Lambkendra - H)
            </span>
            <div className="text-xs font-bold text-slate-800">Intersection of Altitudes</div>
            <p className="text-[11px] text-slate-600">
              Vertex se 90° perpendicular. Acute mein andar, right triangle mein <strong>90° vertex par</strong>, obtuse mein bahar!
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block">
              3. Circumcentre (Parikendra - O)
            </span>
            <div className="text-xs font-bold text-slate-800">Perpendicular Bisectors</div>
            <p className="text-[11px] text-slate-600">
              Sides ke perpendicular bisectors. Teeno <strong>vertices</strong> se barabar door (OA = OB = OC = R).
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-200 p-3.5 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
              4. Incentre (Antahkendra - I)
            </span>
            <div className="text-xs font-bold text-slate-800">Angle Bisectors</div>
            <p className="text-[11px] text-slate-600">
              Andar ke angles ke bisectors. Teeno <strong>sides</strong> se barabar door (r). Hamesha andar.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-center py-2.5 text-xs sm:text-sm font-mono font-black text-amber-300 tracking-wide">
          📐 Angle Sum Property: ∠A + ∠B + ∠C = 180° | Exterior ∠ = Sum of Two Opposite Interior ∠s!
        </div>
      </div>
    );
  }

  return null;
}

function TrailDetailContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const unitParam = searchParams.get("unit");
  const hasSelectedUnit = unitParam !== null && unitParam !== "";
  const parsedUnitIdx = hasSelectedUnit ? Number(unitParam) : 0;

  const {
    modules,
    profile,
    isAuthenticated,
    completeUnit,
    contentLanguage,
    setContentLanguage,
    submitContentReport,
    signInWithGoogle,
    isChapterFreeStarter,
    isChapterUnlocked,
    unlockChapterWithCredits,
    activateProPass,
  } = useApp();
  const mod = modules.find((m) => m.slug === slug) || modules[0];
  const chapterUnlocked = isChapterUnlocked(mod.id);
  const chapterIsFreeStarter = isChapterFreeStarter(mod.id);
  const [showChapterCreditModal, setShowChapterCreditModal] = useState(false);

  const [activeUnitIdx, setActiveUnitIdx] = useState<number>(
    Math.min(Math.max(0, parsedUnitIdx), mod.units.length - 1)
  );

  // Report Typo / Error modal state
  const [reportTarget, setReportTarget] = useState<string | null>(null);
  const [reportIssueType, setReportIssueType] = useState<
    "TYPO" | "WRONG_ANSWER_KEY" | "FORMULA_CLARIFICATION" | "OTHER"
  >("TYPO");
  const [reportDescription, setReportDescription] = useState("");

  // Contextual Doubt Drawer & @VidyaBot state
  const [doubtDrawerOpen, setDoubtDrawerOpen] = useState(false);
  const [activeQuestionRef, setActiveQuestionRef] = useState<QuestionReference | null>(null);

  // Current selected option index per question
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  // Number of wrong submissions per question
  const [wrongAttemptsByQ, setWrongAttemptsByQ] = useState<Record<string, number>>({});
  // Array of already-tried wrong option indices per question (so student doesn't pick same wrong option twice)
  const [triedWrongOptionsByQ, setTriedWrongOptionsByQ] = useState<Record<string, number[]>>({});
  // Questions that have been verified as correct on a submission
  const [lockedCorrectByQ, setLockedCorrectByQ] = useState<Record<string, boolean>>({});
  const [hasSubmittedAtLeastOnce, setHasSubmittedAtLeastOnce] = useState(false);
  const [lastWrongCount, setLastWrongCount] = useState(0);
  const [testCompletedNow, setTestCompletedNow] = useState(false);

  const resetTestState = () => {
    setSelectedAnswers({});
    setWrongAttemptsByQ({});
    setTriedWrongOptionsByQ({});
    setLockedCorrectByQ({});
    setHasSubmittedAtLeastOnce(false);
    setLastWrongCount(0);
    setTestCompletedNow(false);
  };

  useEffect(() => {
    if (unitParam !== null && unitParam !== "") {
      const idx = Math.min(Math.max(0, Number(unitParam)), mod.units.length - 1);
      setActiveUnitIdx(idx);
      resetTestState();
    }
  }, [unitParam, mod.units.length]);

  const activeUnit = mod.units[activeUnitIdx] || mod.units[0];
  const isHinglish = contentLanguage === "HINGLISH";

  // Viewport-locked Quick Jump sidebar & active section tracker
  const sidebarColRef = useRef<HTMLDivElement | null>(null);
  const mobileBarAnchorRef = useRef<HTMLDivElement | null>(null);
  const [fixedSidebarBox, setFixedSidebarBox] = useState<{
    isFixed: boolean;
    left: number;
    width: number;
  }>({ isFixed: false, left: 0, width: 255 });
  const [isMobileBarFixed, setIsMobileBarFixed] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);

  useEffect(() => {
    if (!hasSelectedUnit) return;

    const handleScrollOrResize = () => {
      if (sidebarColRef.current) {
        const rect = sidebarColRef.current.getBoundingClientRect();
        const shouldFix = rect.top <= 84;
        setFixedSidebarBox((prev) => {
          if (
            prev.isFixed === shouldFix &&
            Math.abs(prev.left - rect.left) < 1 &&
            Math.abs(prev.width - rect.width) < 1
          ) {
            return prev;
          }
          return {
            isFixed: shouldFix,
            left: rect.left,
            width: rect.width,
          };
        });
      }

      if (mobileBarAnchorRef.current) {
        const mRect = mobileBarAnchorRef.current.getBoundingClientRect();
        setIsMobileBarFixed(mRect.top <= 62);
      }

      // Highlight whichever study section is currently near the top of the viewport
      let currentIdx = 0;
      for (let i = 0; i < activeUnit.contentSections.length; i++) {
        const el = document.getElementById(`study-section-${i}`);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 160) {
            currentIdx = i;
          }
        }
      }
      setActiveSectionIdx(currentIdx);
    };

    handleScrollOrResize();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [hasSelectedUnit, activeUnitIdx, activeUnit.contentSections.length]);

  const totalQuestions = activeUnit.checkpointQuestions.length;
  const totalMarks = totalQuestions * 10; // 10 Questions = 100 Marks

  // Total current marks = sum of remaining marks of each question (10 for 0 wrong, 5 for 1 wrong, 2 for 2+ wrong)
  const currentTotalScore = activeUnit.checkpointQuestions.reduce((sum, q) => {
    const wrongs = wrongAttemptsByQ[q.id] || 0;
    return sum + getQuestionMarks(wrongs);
  }, 0);

  const answeredCount = activeUnit.checkpointQuestions.filter(
    (q) => selectedAnswers[q.id] !== undefined
  ).length;
  const allQuestionsAnswered = answeredCount === totalQuestions;

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (testCompletedNow || lockedCorrectByQ[qId]) return;
    // Prevent selecting an option that was already proven wrong
    if ((triedWrongOptionsByQ[qId] || []).includes(optIdx)) return;

    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitTest = () => {
    if (!allQuestionsAnswered || testCompletedNow) return;
    setHasSubmittedAtLeastOnce(true);

    let wrongCountThisTurn = 0;
    const nextWrongAttempts = { ...wrongAttemptsByQ };
    const nextTriedWrong = { ...triedWrongOptionsByQ };
    const nextLockedCorrect = { ...lockedCorrectByQ };
    const nextSelected = { ...selectedAnswers };

    activeUnit.checkpointQuestions.forEach((q) => {
      const chosen = selectedAnswers[q.id];
      if (chosen === q.correctIndex) {
        nextLockedCorrect[q.id] = true;
      } else if (chosen !== undefined) {
        wrongCountThisTurn += 1;
        nextWrongAttempts[q.id] = (nextWrongAttempts[q.id] || 0) + 1;
        const prevTried = nextTriedWrong[q.id] || [];
        if (!prevTried.includes(chosen)) {
          nextTriedWrong[q.id] = [...prevTried, chosen];
        }
        // Clear wrong selection so student must pick a new option for this question
        delete nextSelected[q.id];
      }
    });

    setWrongAttemptsByQ(nextWrongAttempts);
    setTriedWrongOptionsByQ(nextTriedWrong);
    setLockedCorrectByQ(nextLockedCorrect);
    setSelectedAnswers(nextSelected);
    setLastWrongCount(wrongCountThisTurn);

    if (wrongCountThisTurn === 0) {
      // All questions are now 100% correct! Calculate final score
      const finalScore = activeUnit.checkpointQuestions.reduce((sum, q) => {
        const wrongs = nextWrongAttempts[q.id] || 0;
        return sum + getQuestionMarks(wrongs);
      }, 0);
      setTestCompletedNow(true);
      completeUnit(
        mod.id,
        activeUnit.id,
        finalScore,
        selectedAnswers,
        nextWrongAttempts
      );
    }
  };

  const switchUnit = (idx: number) => {
    setActiveUnitIdx(idx);
    resetTestState();
    router.push(`/trails/${mod.slug}?unit=${idx}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb Bar:
          - When viewing Chapter's Full Unit List: Class > Subject > Chapter
          - When viewing a Unit: Class > Subject > Chapter > [Unit Dropdown] */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <Link
            href={`/?class=${mod.classGrade}`}
            className="text-slate-500 hover:text-slate-900 transition"
          >
            Class {mod.classGrade}
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

          <Link
            href={`/?class=${mod.classGrade}&subject=${encodeURIComponent(mod.subject)}`}
            className="text-slate-500 hover:text-slate-900 transition"
          >
            {mod.subject}
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

          {hasSelectedUnit ? (
            <>
              <Link
                href={`/trails/${mod.slug}`}
                className="text-slate-500 hover:text-slate-900 transition"
              >
                {mod.title}
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

              {/* Unit Dropdown Selector in the Top Bar */}
              <div className="relative inline-flex items-center">
                <select
                  aria-label="Select Unit"
                  value={activeUnitIdx}
                  onChange={(e) => switchUnit(Number(e.target.value))}
                  className="appearance-none rounded-xl bg-emerald-50 border border-emerald-200 pl-3 pr-8 py-1.5 text-xs font-extrabold text-emerald-700 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 cursor-pointer max-w-[240px] sm:max-w-[380px] truncate"
                >
                  {mod.units.map((u, i) => (
                    <option key={u.id} value={i} className="text-slate-900 font-bold bg-white">
                      {u.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-emerald-700" />
              </div>
            </>
          ) : (
            <span className="text-emerald-600">{mod.title}</span>
          )}
        </div>

        <Link
          href={
            hasSelectedUnit
              ? `/trails/${mod.slug}`
              : `/?class=${mod.classGrade}&subject=${encodeURIComponent(mod.subject)}`
          }
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 shrink-0"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>
      </div>

      {/* ====================================================================
          CHAPTER CREDIT UNLOCK GATE (Shown when Chapter 3+ is not yet unlocked)
         ==================================================================== */}
      {!chapterUnlocked ? (
        <div className="rounded-3xl bg-white border-2 border-amber-300 shadow-[0_8px_0_0_#f59e0b] p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-100 border-2 border-amber-300 text-3xl shadow-xs">
                🔒
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 text-[11px] font-extrabold text-amber-900 uppercase tracking-wider">
                  <span>🪙 100 Vidya Credits Required</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {mod.title}
                </h1>
                <p className="text-sm text-slate-600 font-medium">
                  {mod.subtitle} • {mod.units.length} Interactive Units &amp; Practice Tests (+{mod.totalXp} GP)
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-indigo-50 border-2 border-indigo-200 px-5 py-3.5 text-center shrink-0">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">
                Your Available Wallet
              </p>
              <p className="text-2xl font-black text-indigo-950 mt-0.5">
                🪙 {(profile.credits ?? 300).toLocaleString()} Credits
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Units Preview inside this chapter */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                What You Unlock Inside &ldquo;{mod.title}&rdquo; ({mod.units.length} Units):
              </h3>
              <div className="space-y-2.5">
                {mod.units.map((u, idx) => (
                  <div
                    key={u.id}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-xs font-extrabold text-indigo-800">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          {u.title}
                        </p>
                        <p className="text-xs text-slate-500 font-medium line-clamp-1">
                          {u.summary}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 shrink-0">
                      🔒 {u.durationMinutes}m
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 1-Click Credit Unlock Box (Requires Sign-In first) */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 space-y-5 shadow-lg">
              <div className="space-y-1.5">
                <span className="inline-block rounded-lg bg-amber-400/20 border border-amber-300/40 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-300 uppercase tracking-wider">
                  Lifetime Chapter Access
                </span>
                <h3 className="text-xl font-extrabold">
                  Unlock Full Chapter for 🪙 100 Credits
                </h3>
                <p className="text-xs text-indigo-200 leading-relaxed">
                  First 2 chapters of every subject are 100% Free. Unlocking{" "}
                  <strong>{mod.title}</strong> gives your account permanent
                  access to all {mod.units.length} story-driven units, worked
                  examples, and interactive 100-mark unit tests.
                </p>
              </div>

              {isAuthenticated ? (
                <>
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-200 font-semibold">
                        Your Account Balance:
                      </span>
                      <span className="font-extrabold text-white">
                        🪙 {(profile.credits ?? 300).toLocaleString()} Credits
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-200 font-semibold">
                        Chapter Unlock Cost:
                      </span>
                      <span className="font-extrabold text-amber-300">
                        - 🪙 100 Credits
                      </span>
                    </div>
                    <div className="border-t border-white/15 pt-1.5 flex items-center justify-between">
                      <span className="text-indigo-200 font-semibold">
                        Balance After Unlock:
                      </span>
                      <span className="font-black text-emerald-300">
                        {(profile.credits ?? 0) >= 100
                          ? `🪙 ${((profile.credits ?? 0) - 100).toLocaleString()} Credits`
                          : "Top Up Needed"}
                      </span>
                    </div>
                  </div>

                  {(profile.credits ?? 0) >= 100 ? (
                    <button
                      type="button"
                      onClick={() => unlockChapterWithCredits(mod.id)}
                      className="w-full btn-3d-amber py-3.5 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Unlock className="h-4 w-4" />
                      <span>Unlock Chapter Now (Spend 🪙 100 Credits)</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowChapterCreditModal(true)}
                      className="w-full btn-3d-emerald py-3.5 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Buy Vidya Credits (From ₹199 • 400 Credits)</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowChapterCreditModal(true)}
                    className="w-full rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 py-2.5 px-3 text-xs font-extrabold text-emerald-200 transition cursor-pointer"
                  >
                    👑 Or Unlock ALL Class {mod.classGrade} PCM Chapters + 1,000 Test Cr (₹1,999)
                  </button>
                </>
              ) : (
                <>
                  <div className="rounded-2xl bg-amber-400/15 border border-amber-300/35 p-4 space-y-1.5 text-xs">
                    <p className="font-extrabold text-amber-300 text-sm">
                      🔐 Sign In Required to Use Vidya Credits
                    </p>
                    <p className="text-indigo-100 leading-relaxed">
                      Please sign into your scholar account first. Every new
                      account gets <strong>🪙 300 Free Welcome Credits</strong>{" "}
                      automatically, and every chapter you unlock stays{" "}
                      <strong>unlocked forever</strong> in your account!
                    </p>
                  </div>

                  <Link
                    href={`/auth?next=${encodeURIComponent(
                      `/trails/${mod.slug}`
                    )}`}
                    className="w-full btn-3d-amber py-3.5 text-sm font-extrabold flex items-center justify-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Sign In to Unlock Chapter (100 Credits)</span>
                  </Link>
                </>
              )}

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-indigo-200">
                <span>Credits spent or chapter unlock issue?</span>
                <Link
                  href={`/support?category=CHAPTER_UNLOCK&chapter=${encodeURIComponent(
                    `${mod.title} (${mod.subject} Class ${mod.classGrade})`
                  )}`}
                  className="font-extrabold text-amber-300 hover:text-amber-200 underline"
                >
                  Raise Support Case →
                </Link>
              </div>

              <p className="text-[11px] text-indigo-200/90 leading-relaxed">
                🛡️ <strong>Upwork-Style Credit Refund Guarantee:</strong> If a chapter or live exam ever has a technical issue, 100% of your spent credits are refunded directly back to your Vidya Credit Wallet.
              </p>
            </div>
          </div>
        </div>
      ) : !hasSelectedUnit ? (
        /* ====================================================================
           VIEW 1: CHAPTER FULL UNIT LIST (When user clicks Chapter Name or View All)
          ==================================================================== */
        <div className="rounded-3xl bg-white border-2 border-slate-200 shadow-[0_6px_0_0_#e2e8f0] p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              {chapterIsFreeStarter ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-extrabold text-emerald-800">
                  <Unlock className="h-3.5 w-3.5" />
                  <span>100% Free Starter Chapter</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 border border-indigo-300 px-3 py-1 text-xs font-extrabold text-indigo-800">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Unlocked Permanently with Vidya Credits</span>
                </span>
              )}
            </div>
            {isAuthenticated ? (
              <span className="text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-1">
                🪙 Wallet: {(profile.credits ?? 300).toLocaleString()} Credits
              </span>
            ) : (
              <Link
                href={`/auth?next=${encodeURIComponent(`/trails/${mod.slug}`)}`}
                className="text-xs font-extrabold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl px-3 py-1 transition"
              >
                🔐 Sign In to Claim 🪙 300 Free Credits
              </Link>
            )}
          </div>
          {/* All Units Stacked Vertically One Below the Other */}
          <div className="relative pl-6 sm:pl-8 space-y-3 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {mod.units.map((unit, idx) => {
              const isDone = profile.completedUnitIds.includes(unit.id);

              return (
                <Link
                  key={unit.id}
                  href={`/trails/${mod.slug}?unit=${idx}`}
                  className={`group relative block rounded-2xl border p-4 transition-all ${
                    isDone
                      ? "bg-emerald-50/50 border-emerald-200 hover:border-emerald-400"
                      : "bg-slate-50/70 border-slate-200 hover:bg-white hover:border-indigo-300 hover:shadow-sm"
                  }`}
                >
                  {/* Vertical Connector Dot */}
                  <span
                    className={`absolute -left-[25px] sm:-left-[29px] top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      isDone
                        ? "bg-emerald-500 border-emerald-600 text-white"
                        : "bg-white border-slate-300 group-hover:border-indigo-500"
                    }`}
                  >
                    {isDone && <CheckCircle2 className="h-3.5 w-3.5" />}
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {unit.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs font-bold">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {unit.durationMinutes}m
                      </span>
                      <span className="text-slate-600">
                        {unit.checkpointQuestions.length} Qs • {unit.checkpointQuestions.length * 10} Marks
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        /* ====================================================================
           VIEW 2: BORDERLESS MAIN UNIT STUDY CONTENT + BORDERED UNIT TEST
          ==================================================================== */
        <div className="space-y-8">
          {/* Main Unit Study Content — No outer border, clean reading layout */}
          <div className="py-2 sm:py-4 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                    Study Guide
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
                    <ShieldCheck className="h-3 w-3" />
                    Story-Driven Concept
                  </span>
                </div>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeUnit.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Contextual Peer & @VidyaBot Discussion Drawer Button */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveQuestionRef({
                      moduleSlug: mod.slug,
                      moduleTitle: mod.title,
                      unitId: activeUnit.id,
                      unitTitle: activeUnit.title,
                      questionPrompt: activeUnit.summary,
                    });
                    setDoubtDrawerOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 border border-indigo-700 px-3.5 py-2 text-xs font-extrabold text-white shadow-xs transition"
                >
                  <Bot className="h-3.5 w-3.5" />
                  <span>Ask @VidyaBot / Discuss</span>
                </button>

                {/* 1-Click Report Typo / Error Button */}
                <button
                  type="button"
                  onClick={() => {
                    setReportTarget(`Study Notes: ${activeUnit.title}`);
                    setReportIssueType("TYPO");
                    setReportDescription("");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 transition"
                >
                  <Flag className="h-3.5 w-3.5 text-amber-600" />
                  <span>Report Typo</span>
                </button>

                {/* Language Switcher hidden per owner instruction (both fields hold the same text) */}
              </div>
            </div>

            {/* Learning Goal Callout */}
            <div className="rounded-2xl bg-sky-50 border border-sky-200 p-4 text-sm font-medium text-slate-800">
              <strong className="text-sky-900 font-extrabold">
                🎯 Topic Goal:{" "}
              </strong>
              {isHinglish && activeUnit.summaryHinglish
                ? activeUnit.summaryHinglish
                : activeUnit.summary}
            </div>

            {/* Mobile / Tablet Fixed-on-Scroll Quick Jump Bar (Always visible at top when scrolling on < lg screens) */}
            <div ref={mobileBarAnchorRef} className="lg:hidden min-h-[46px]">
              <div
                className={`${
                  isMobileBarFixed
                    ? "fixed top-[58px] left-3 right-3 z-40 shadow-lg"
                    : "relative"
                } px-3 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-bold`}
              >
                <span className="text-slate-500 shrink-0 font-extrabold flex items-center gap-1.5 pr-1">
                  <Bookmark className="h-3.5 w-3.5 text-indigo-600" />
                  Quick Jump:
                </span>
                {activeUnit.contentSections.map((sec, sIdx) => {
                  const heading =
                    isHinglish && sec.headingHinglish
                      ? sec.headingHinglish
                      : sec.heading;
                  const shortTitle =
                    heading.replace(/^(Part\s+[A-Z0-9]+|Method\s+\d+):\s*/i, "").slice(0, 24) +
                    (heading.length > 24 ? "…" : "");
                  const sType = detectSectionType(heading, sIdx);
                  const isActiveSec = activeSectionIdx === sIdx;

                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(`study-section-${sIdx}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`shrink-0 rounded-xl px-3 py-1.5 border transition cursor-pointer font-bold ${
                        isActiveSec ? "ring-2 ring-indigo-500 ring-offset-1 " : ""
                      }${
                        sType === "STORY"
                          ? "bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100"
                          : sType === "VOCABULARY"
                          ? "bg-violet-50 border-violet-200 text-violet-900 hover:bg-violet-100"
                          : sType === "MISTAKES"
                          ? "bg-rose-50 border-rose-200 text-rose-900 hover:bg-rose-100"
                          : sType === "RECAP"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-900 hover:bg-emerald-100"
                          : sType === "PRACTICE"
                          ? "bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {shortTitle}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("unit-practice-test");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="shrink-0 rounded-xl px-3 py-1.5 border border-indigo-300 bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer font-extrabold"
                >
                  🎯 Practice Test
                </button>
              </div>
            </div>

            {/* Desktop Layout: Fixed-in-Viewport Side Quick Jump Rail + Main Study Content Sections */}
            <div className="lg:grid lg:grid-cols-[245px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,1fr)] lg:gap-7 items-start">
              {/* Left Column Anchor that holds space and locks the Quick Jump panel into the viewport when scrolling */}
              <div ref={sidebarColRef} className="hidden lg:block min-h-[1px]">
                <aside
                  style={
                    fixedSidebarBox.isFixed
                      ? {
                          position: "fixed",
                          top: "80px",
                          left: `${fixedSidebarBox.left}px`,
                          width: `${fixedSidebarBox.width}px`,
                          zIndex: 35,
                        }
                      : undefined
                  }
                  className="rounded-3xl border-2 border-slate-200/90 bg-white/95 backdrop-blur-md p-4 shadow-md max-h-[calc(100vh-6rem)] overflow-y-auto space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2 px-1 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                        <Bookmark className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                        Quick Jump
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-400">
                      {activeUnit.contentSections.length} Sections
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {activeUnit.contentSections.map((sec, sIdx) => {
                      const heading =
                        isHinglish && sec.headingHinglish
                          ? sec.headingHinglish
                          : sec.heading;
                      const partMatch = heading.match(/^(Part\s+[A-Z0-9]+|Method\s+\d+):\s*(.+)$/i);
                      const badgeLabel = partMatch ? partMatch[1] : null;
                      const cleanLabel = partMatch ? partMatch[2] : heading;
                      const sType = detectSectionType(heading, sIdx);
                      const isActiveSec = activeSectionIdx === sIdx;

                      return (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(`study-section-${sIdx}`);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }}
                          className={`w-full text-left rounded-xl px-3 py-2 border text-xs transition cursor-pointer font-bold flex items-start gap-2 ${
                            isActiveSec
                              ? "ring-2 ring-indigo-500 border-indigo-400 shadow-2xs "
                              : ""
                          }${
                            sType === "STORY"
                              ? "bg-amber-50/90 border-amber-200 text-amber-950 hover:bg-amber-100"
                              : sType === "VOCABULARY"
                              ? "bg-violet-50/90 border-violet-200 text-violet-950 hover:bg-violet-100"
                              : sType === "MISTAKES"
                              ? "bg-rose-50/90 border-rose-200 text-rose-950 hover:bg-rose-100"
                              : sType === "RECAP"
                              ? "bg-emerald-50/90 border-emerald-200 text-emerald-950 hover:bg-emerald-100"
                              : sType === "PRACTICE"
                              ? "bg-indigo-50/90 border-indigo-200 text-indigo-950 hover:bg-indigo-100"
                              : "bg-slate-50/90 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {badgeLabel && (
                            <span className="shrink-0 rounded-md bg-white/90 border border-slate-200 px-1.5 py-0.5 text-[10px] font-black text-indigo-700">
                              {badgeLabel}
                            </span>
                          )}
                          <span className="line-clamp-2 leading-snug">{cleanLabel}</span>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("unit-practice-test");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="mt-1 w-full text-left rounded-xl px-3 py-2.5 border border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold transition cursor-pointer flex items-center justify-between shadow-xs"
                    >
                      <span>🎯 Unit Practice Test</span>
                      <span className="text-[10px] bg-indigo-500 px-1.5 py-0.5 rounded-md">
                        {totalQuestions} Qs
                      </span>
                    </button>
                  </div>
                </aside>
              </div>

              {/* Main Study Content Sections (Cards with specialized themes) */}
              <div className="space-y-6 sm:space-y-8 min-w-0">
                {activeUnit.contentSections.map((sec, idx) => (
                  <React.Fragment key={idx}>
                    <StudySectionCard
                      section={sec}
                      index={idx}
                      isHinglish={isHinglish}
                      isConstructions={mod.slug.includes("constructions")}
                    />
                    {idx === 0 && <UnitVisualDiagram unitId={activeUnit.id} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* UNIT PRACTICE TEST BOX (10 Questions • Requires Login to Access) */}
          <div
            id="unit-practice-test"
            className="scroll-mt-28 rounded-3xl border-2 border-slate-200 bg-white shadow-[0_6px_0_0_#e2e8f0] p-5 sm:p-8 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                  {totalQuestions} Practice Questions • Earn up to {totalMarks} GP
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                  Unit Practice Test
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Earn up to 10 GP per question (1st retry: 5 GP, subsequent retry: 2 GP floor when solved).
                </p>
              </div>

              {isAuthenticated ? (
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-extrabold">
                  <span className="rounded-xl bg-slate-100 border border-slate-200 px-3.5 py-2 text-slate-700">
                    Selected: {answeredCount}/{totalQuestions}
                  </span>
                  <span
                    className={`rounded-xl border px-3.5 py-2 ${
                      currentTotalScore < totalMarks
                        ? "bg-amber-50 border-amber-200 text-amber-800"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700"
                    }`}
                  >
                    Score: {currentTotalScore} / {totalMarks} GP
                  </span>
                </div>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-100 border border-amber-300 px-3.5 py-2 text-xs font-extrabold text-amber-900">
                  <Lock className="h-3.5 w-3.5 text-amber-700" />
                  <span>Login Required for Practice Test</span>
                </span>
              )}
            </div>

            {!isAuthenticated ? (
              <div className="space-y-5">
                {/* Preview of Q1 to spark curiosity */}
                {activeUnit.checkpointQuestions[0] && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-3 opacity-80 select-none">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs sm:text-sm font-extrabold text-slate-700 flex items-start gap-2">
                        <HelpCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>
                          Sample Q1. {activeUnit.checkpointQuestions[0].question}
                        </span>
                      </p>
                      <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-extrabold text-slate-500 shrink-0">
                        10 Marks
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 blur-[2px] pointer-events-none">
                      {activeUnit.checkpointQuestions[0].options.map((opt, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-200 bg-white p-3 text-xs font-bold text-slate-600"
                        >
                          {String.fromCharCode(65 + idx)}. {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Login / Sign Up Gate Card */}
                <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/90 via-white to-emerald-50/60 p-6 sm:p-8 text-center space-y-4 shadow-xs">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
                    <Lock className="h-7 w-7" />
                  </div>
                  <div className="max-w-xl mx-auto space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-300 px-3 py-0.5 text-[11px] font-black uppercase text-indigo-800">
                      Free Student Account Required
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Sign In to Unlock This {totalQuestions}-Question Practice Test 🎯
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                      All chapter study guides and diagrams are <strong>100% open to read</strong>! Sign in or create your free student account in 30 seconds to attempt the Practice Test, view step-by-step solutions, and earn up to{" "}
                      <strong className="text-emerald-700">+{totalMarks} GP</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        signInWithGoogle(
                          `/trails/${mod.slug}?unit=${activeUnitIdx}`
                        )
                      }
                      className="btn-3d-white px-6 py-3.5 text-xs sm:text-sm font-extrabold inline-flex items-center gap-2.5"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill="#4285F4"
                          d="M23.49 12.275c0-.79-.07-1.545-.2-2.275H12v4.51h6.47c-.29 1.48-1.14 2.735-2.405 3.58v2.98h3.88c2.27-2.09 3.545-5.17 3.545-8.795z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.955-1.08 7.94-2.92l-3.88-2.98c-1.075.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.715-4.95H1.275v3.09C3.25 21.305 7.31 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.285 14.3c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.61H1.275C.465 8.22 0 10.055 0 12s.465 3.78 1.275 5.39l4.01-3.09z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.76 0 3.34.605 4.585 1.795l3.435-3.435C17.95 1.19 15.235 0 12 0 7.31 0 3.25 2.695 1.275 6.61l4.01 3.09C6.23 6.86 8.88 4.75 12 4.75z"
                        />
                      </svg>
                      <span>Continue with Google</span>
                    </button>

                    <Link
                      href={`/auth?mode=signup&redirect=${encodeURIComponent(
                        `/trails/${mod.slug}?unit=${activeUnitIdx}`
                      )}`}
                      className="btn-3d-emerald px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>Create Free Account &amp; Start Test</span>
                    </Link>

                    <Link
                      href={`/auth?mode=signin&redirect=${encodeURIComponent(
                        `/trails/${mod.slug}?unit=${activeUnitIdx}`
                      )}`}
                      className="btn-3d-indigo px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Sign In to Existing Account</span>
                    </Link>
                  </div>
                </div>

                {/* Keep Previous / Next Topic navigation open so anyone can continue reading the units */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500">
                    Continue reading chapter study units freely:
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    {activeUnitIdx > 0 && (
                      <button
                        onClick={() => switchUnit(activeUnitIdx - 1)}
                        className="btn-3d-white px-4 py-3 text-xs inline-flex items-center gap-1.5"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous Topic</span>
                      </button>
                    )}

                    {activeUnitIdx + 1 < mod.units.length && (
                      <button
                        onClick={() => switchUnit(activeUnitIdx + 1)}
                        className="btn-3d-white px-5 py-3 text-xs inline-flex items-center gap-1.5"
                      >
                        <span>Next Topic</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Feedback Banner when some answers were wrong */}
                {hasSubmittedAtLeastOnce && !testCompletedNow && lastWrongCount > 0 && (
              <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-4 flex items-start gap-3 text-xs sm:text-sm font-bold text-rose-900">
                <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p>
                    {lastWrongCount} {lastWrongCount === 1 ? "answer was" : "answers were"} incorrect. Correct answers are locked in green!
                  </p>
                  <p className="text-rose-700 font-medium mt-0.5">
                    Select the right option for the remaining {totalQuestions - answeredCount} {totalQuestions - answeredCount === 1 ? "question" : "questions"} below and submit again to finish the quiz.
                  </p>
                </div>
              </div>
            )}

            {/* Success Banner when all answers are correct */}
            {testCompletedNow && (
              <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-emerald-900">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    Quiz Completed! All {totalQuestions} checkpoint questions solved. Final Score: {currentTotalScore} / {totalMarks} GP.
                  </span>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-5">
              {activeUnit.checkpointQuestions.map((q, qIdx) => {
                const chosen = selectedAnswers[q.id];
                const wrongCount = wrongAttemptsByQ[q.id] || 0;
                const triedWrongs = triedWrongOptionsByQ[q.id] || [];
                const isLockedCorrect = Boolean(lockedCorrectByQ[q.id]);
                const questionMarks = getQuestionMarks(wrongCount);

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-4 sm:p-5 space-y-3.5 transition ${
                      isLockedCorrect
                        ? "border-emerald-300 bg-emerald-50/40"
                        : wrongCount > 0
                        ? "border-amber-300 bg-amber-50/30"
                        : "border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm sm:text-base font-extrabold text-slate-900 flex items-start gap-2">
                        <HelpCircle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>
                          Q{qIdx + 1}. {q.question}
                        </span>
                      </p>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          title="Discuss this question with peers or ask @VidyaBot for a Socratic hint"
                          onClick={() => {
                            setActiveQuestionRef({
                              moduleSlug: mod.slug,
                              moduleTitle: mod.title,
                              unitId: activeUnit.id,
                              unitTitle: activeUnit.title,
                              questionId: q.id,
                              questionNumber: qIdx + 1,
                              questionPrompt: q.question,
                              options: q.options,
                              explanationHint: q.explanation,
                            });
                            setDoubtDrawerOpen(true);
                          }}
                          className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-[11px] font-extrabold text-indigo-700 hover:bg-indigo-100 transition"
                        >
                          <MessageSquare className="h-3 w-3 text-indigo-600" />
                          <span>Discuss</span>
                        </button>
                        <button
                          type="button"
                          title="Report an issue or typo in this question"
                          onClick={() => {
                            setReportTarget(`Q${qIdx + 1}: ${q.question}`);
                            setReportIssueType("WRONG_ANSWER_KEY");
                            setReportDescription("");
                          }}
                          className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-2 py-1 text-[11px] font-bold text-slate-500 hover:border-amber-300 hover:text-amber-700 transition"
                        >
                          <Flag className="h-3 w-3 text-amber-500" />
                          <span className="hidden sm:inline">Report</span>
                        </button>
                        <span
                          className={`rounded-lg border px-2.5 py-1 text-[11px] font-extrabold ${
                            isLockedCorrect
                              ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                              : wrongCount > 0
                              ? "bg-amber-100 border-amber-300 text-amber-900"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          {isLockedCorrect
                            ? `✓ +${questionMarks} Marks`
                            : `${questionMarks} / 10 Marks`}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = chosen === optIdx;
                        const wasTriedWrong = triedWrongs.includes(optIdx);

                        let btnStyle =
                          "border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

                        if (isLockedCorrect && isSelected) {
                          btnStyle =
                            "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-300";
                        } else if (wasTriedWrong) {
                          btnStyle =
                            "border-rose-300 bg-rose-50/80 text-rose-400 line-through cursor-not-allowed opacity-75";
                        } else if (isSelected) {
                          btnStyle =
                            "border-indigo-500 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-300";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isLockedCorrect || wasTriedWrong}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`rounded-2xl border-2 border-b-4 p-3.5 text-left text-xs sm:text-sm font-bold transition ${btnStyle}`}
                          >
                            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-50 border border-slate-300 text-xs font-extrabold">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {isLockedCorrect && (
                      <div className="rounded-xl p-3 text-xs font-bold bg-emerald-100 border border-emerald-300 text-emerald-900">
                        <strong>✅ Correct (+{questionMarks} Marks): </strong>
                        {q.explanation}
                      </div>
                    )}

                    {!isLockedCorrect && wrongCount > 0 && (
                      <div className="rounded-xl p-3 text-xs font-bold bg-rose-100 border border-rose-300 text-rose-900">
                        <strong>
                          ❌ Wrong Attempt ({wrongCount === 1 ? "-5 Marks" : wrongCount === 2 ? "-8 Marks total" : "Min 2 Marks remaining"}):{" "}
                        </strong>
                        Pick another option above to earn +{questionMarks} Marks for this question.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Bar: Button is greyed out until ALL questions are answered, then turns green */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <div>
                {!testCompletedNow ? (
                  <button
                    disabled={!allQuestionsAnswered}
                    onClick={handleSubmitTest}
                    className={`px-7 py-3.5 text-sm flex items-center gap-2 rounded-2xl font-extrabold transition ${
                      allQuestionsAnswered
                        ? "btn-3d-emerald"
                        : "bg-slate-200 border-2 border-slate-300 border-b-4 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      Submit Quiz ({answeredCount}/{totalQuestions} Answered)
                    </span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-emerald-100 border border-emerald-300 px-5 py-3 text-xs font-extrabold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Quiz Completed • Final Score: {currentTotalScore} / {totalMarks} GP
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {activeUnitIdx > 0 && (
                  <button
                    onClick={() => switchUnit(activeUnitIdx - 1)}
                    className="btn-3d-white px-4 py-3 text-xs inline-flex items-center gap-1.5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Topic</span>
                  </button>
                )}

                {activeUnitIdx + 1 < mod.units.length && (
                  <button
                    onClick={() => switchUnit(activeUnitIdx + 1)}
                    className="btn-3d-white px-5 py-3 text-xs inline-flex items-center gap-1.5"
                  >
                    <span>Next Topic</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            </>
            )}
          </div>
        </div>
      )}

      {/* 1-Click Report Typo / Academic Review Modal */}
      {reportTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-[0_8px_0_0_#e2e8f0] space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-extrabold text-amber-800">
                  <Flag className="h-3 w-3" /> Academic Quality Shield
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                  Report a Typo or Question Issue
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setReportTarget(null)}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-xs font-bold text-slate-600 line-clamp-2">
              Target: <span className="text-slate-900">{reportTarget}</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Issue Category
                </label>
                <select
                  value={reportIssueType}
                  onChange={(e) =>
                    setReportIssueType(
                      e.target.value as
                        | "TYPO"
                        | "WRONG_ANSWER_KEY"
                        | "FORMULA_CLARIFICATION"
                        | "OTHER"
                    )
                  }
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                >
                  <option value="TYPO">Spelling / Typo in Notes or Question</option>
                  <option value="WRONG_ANSWER_KEY">
                    Answer Key / Calculation Doubt
                  </option>
                  <option value="FORMULA_CLARIFICATION">
                    Formula / Concept Reference Clarification
                  </option>
                  <option value="OTHER">Other Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Brief Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e.target.value)}
                  placeholder="Tell us what looks off according to standard mathematical concepts..."
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setReportTarget(null)}
                className="btn-3d-white px-4 py-2.5 text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  submitContentReport({
                    moduleSlug: mod.slug,
                    chapterTitle: mod.title,
                    unitTitle: activeUnit.title,
                    targetLabel: reportTarget,
                    issueType: reportIssueType,
                    description:
                      reportDescription.trim() ||
                      "Flagged by student for quick textbook verification.",
                  });
                  setReportTarget(null);
                }}
                className="btn-3d-emerald px-5 py-2.5 text-xs"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contextual Peer & @VidyaBot Slide-Over Drawer */}
      <DoubtDrawer
        isOpen={doubtDrawerOpen}
        onClose={() => setDoubtDrawerOpen(false)}
        classGrade={mod.classGrade}
        chapterTag={mod.title.replace(/^Ch\s*\d+:\s*/i, "").trim()}
        questionRef={activeQuestionRef}
      />

      {/* Credit Pack Top-Up Modal */}
      <PaymentModal
        isOpen={showChapterCreditModal}
        onClose={() => setShowChapterCreditModal(false)}
        chapterTitle={mod.title}
        targetClassGrade={mod.classGrade === 10 ? 10 : 9}
        onSuccessPackage={(pkg: PassPackageType, chosenClassGrade?: 9 | 10) => {
          activateProPass(
            pkg,
            undefined,
            mod.id,
            chosenClassGrade || (mod.classGrade === 10 ? 10 : 9)
          );
          setShowChapterCreditModal(false);
        }}
      />
    </div>
  );
}

export default function TrailDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <Suspense fallback={<div className="p-12 text-center font-bold text-slate-400">Loading...</div>}>
      <TrailDetailContent slug={slug} />
    </Suspense>
  );
}
