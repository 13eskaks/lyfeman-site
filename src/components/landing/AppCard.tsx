// src/components/landing/AppCard.tsx
import Link from "next/link";

interface AppCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  status: "live" | "beta" | "soon";
  link: string;
  isExternal?: boolean;
}

export default function AppCard({
  icon,
  title,
  description,
  features,
  status,
  link,
  isExternal = false,
}: AppCardProps) {
  const statusConfig = {
    live: {
      label: "🟢 DISPONIBLE",
      className: "bg-green-100 text-green-800",
    },
    beta: {
      label: "🟡 BETA",
      className: "bg-yellow-100 text-yellow-800",
    },
    soon: {
      label: "🔨 PRÓXIMAMENTE",
      className: "bg-gray-200 text-gray-700",
    },
  };

  const currentStatus = statusConfig[status];
  const isDisabled = status === "soon";

  const cardContent = (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
        isDisabled ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-500"
      }`}
    >
      {/* Icon */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* Status badge */}
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${currentStatus.className}`}
      >
        {currentStatus.label}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-blue-600 font-bold mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        disabled={isDisabled}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
          isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
        }`}
      >
        {isDisabled ? "Próximamente" : `Abrir ${title} →`}
      </button>
    </div>
  );

  if (isDisabled) {
    return cardContent;
  }

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <Link href={link}>{cardContent}</Link>;
}