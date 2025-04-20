"use client";
import {
  FileText,
  PenLine,
  ShieldCheck,
  Building2,
  ScrollText,
  Stamp,
} from "lucide-react";

const documents = [
  {
    name: "Loan Agreement",
    colab:
      "https://colab.research.google.com/drive/12osnGPuxEmczHfMj7vg3fBHUuZHXEjEN",
    icon: FileText,
  },
  {
    name: "Simple Will",
    colab:
      "https://colab.research.google.com/drive/1pwQRtOyG5hgAG4wp14dcE7MXCYATrwwk",
    icon: PenLine,
  },
  {
    name: "House Sale (Lease Deed)",
    colab:
      "https://colab.research.google.com/drive/1Ek7777poNsrxpEWNDtw3fD9H7032lKOz",
    icon: ScrollText,
  },
  {
    name: "Lease (Rent Agreement)",
    colab:
      "https://colab.research.google.com/drive/1CqGpSJyT_qbz36l0zXRuSUE0y5xAn9FZ",
    icon: Building2,
  },
  {
    name: "Friendly Loan Notice",
    colab:
      "https://colab.research.google.com/drive/16UEdudtzDSuAzZveeh1IP7MIFpipzy0H",
    icon: ShieldCheck,
  },
  {
    name: "Signature Verification",
    colab:
      "https://colab.research.google.com/drive/1DCSXUH5-Lc3r-rk_3zirKmdNQqHRA1sX",
    icon: Stamp,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Generate Legal Documents
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <a
            key={doc.name}
            href={doc.colab}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform hover:border-blue-600"
          >
            <doc.icon className="w-10 h-10 text-blue-600 mb-3" />
            <h2 className="text-lg font-semibold text-center text-blue-800">
              {doc.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}
