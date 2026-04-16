export function SearchIcon() {
  return (
    <svg aria-hidden="true" className="search-icon" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16.25 16.25 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function TopicIcon({ name }) {
  const stroke = "currentColor";
  const props = {
    fill: "none",
    stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.8
  };

  switch (name) {
    case "python":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path
            {...props}
            d="M13 4.25h-3.6A3.15 3.15 0 0 0 6.25 7.4v2.05H12a2 2 0 0 1 2 2v2.1H9.35A3.1 3.1 0 0 0 6.25 16.65v.95a3.15 3.15 0 0 0 3.15 3.15H13"
          />
          <path
            {...props}
            d="M11 19.75h3.6a3.15 3.15 0 0 0 3.15-3.15v-2.05H12a2 2 0 0 1-2-2v-2.1h4.65a3.1 3.1 0 0 0 3.1-3.1V6.4a3.15 3.15 0 0 0-3.15-3.15H11"
          />
          <circle cx="9.15" cy="6.95" r="0.8" fill={stroke} />
          <circle cx="14.85" cy="17.05" r="0.8" fill={stroke} />
        </svg>
      );
    case "browser":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="3.5" y="4" width="12.5" height="9.5" rx="1.5" />
          <path {...props} d="M3.5 7.25H16" />
          <circle {...props} cx="6.25" cy="5.75" r="0.6" />
          <circle {...props} cx="8.5" cy="5.75" r="0.6" />
          <circle {...props} cx="10.75" cy="5.75" r="0.6" />
          <circle {...props} cx="17.75" cy="15.75" r="4.75" />
          <path {...props} d="M13 15.75h9.5M17.75 11v9.5M14.7 12.7c1.9.9 4.2.9 6.1 0M14.7 18.8c1.9-.9 4.2-.9 6.1 0" />
        </svg>
      );
    case "rust":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <circle {...props} cx="12" cy="12" r="3.25" />
          <path {...props} d="M12 4.1v1.6M12 18.3v1.6M19.9 12h-1.6M5.7 12H4.1M17.55 6.45l-1.1 1.1M7.55 16.45l-1.1 1.1M17.55 17.55l-1.1-1.1M7.55 7.55l-1.1-1.1" />
          <path {...props} d="M15.6 4.95 15 6.3M9 17.7l-.6 1.35M19.05 15.6 17.7 15M6.3 9l-1.35-.6M8.4 4.95 9 6.3M15 17.7l.6 1.35M19.05 8.4 17.7 9M6.3 15l-1.35.6" />
        </svg>
      );
    case "javascript":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="4.5" y="4.5" width="15" height="15" rx="1.5" />
          <path {...props} d="M10.25 8.75v6.1c0 1.5-.85 2.4-2.35 2.4-.85 0-1.45-.25-2-.75" />
          <path {...props} d="M13.3 15.2c.75 1.25 1.75 1.95 3.1 1.95 1.25 0 2.1-.65 2.1-1.6 0-.9-.55-1.4-1.95-2l-.7-.3c-1.95-.8-2.85-1.7-2.85-3.3 0-1.7 1.3-2.95 3.3-2.95 1.45 0 2.45.5 3.15 1.8" />
        </svg>
      );
    case "typescript":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="4.5" y="4.5" width="15" height="15" rx="1.5" />
          <path {...props} d="M8.15 8.25h7.7M12 8.25v8.1M15.1 11.35c.55-.6 1.2-.95 2-.95 1.15 0 1.95.6 1.95 1.45 0 .9-.55 1.35-1.95 1.75-1.5.45-2.2.95-2.2 2 0 .95.9 1.65 2.2 1.65.95 0 1.75-.3 2.45-1" />
        </svg>
      );
    case "sre":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path {...props} d="M4 18h16M6.75 18V11.5M11.75 18V8M16.75 18v-4.5" />
          <path {...props} d="M5.5 10.25 9 7.25l3.25 2.5 5.75-5" />
          <path {...props} d="M15.9 4.75h2.1v2.1" />
        </svg>
      );
    case "backend":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="4" y="5" width="16" height="5" rx="1.2" />
          <rect {...props} x="4" y="13.25" width="16" height="5" rx="1.2" />
          <path {...props} d="M7 7.5h.01M7 15.75h.01M11 7.5h5M11 15.75h5" />
        </svg>
      );
    case "script":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path {...props} d="M5 6.25h14M5 12h14M5 17.75h9" />
          <path {...props} d="m15.5 14.4 3.4 3.35-3.4 3.35" />
          <path {...props} d="m12.75 14.4-3.4 3.35 3.4 3.35" />
        </svg>
      );
    case "ai":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path
            {...props}
            d="M9 6.25A3.25 3.25 0 0 1 15.25 5a3.1 3.1 0 0 1 4 3 3 3 0 0 1 1.5 4.75 3.2 3.2 0 0 1-1 4.35 3.15 3.15 0 0 1-4.1 3.4 3.25 3.25 0 0 1-5.65 0 3.15 3.15 0 0 1-4.1-3.4 3.2 3.2 0 0 1-1-4.35A3 3 0 0 1 6.25 8a3.1 3.1 0 0 1 2.75-1.75Z"
          />
          <path {...props} d="M10.25 8.5c1.1.55 1.75 1.35 1.75 2.5v9M13.75 8.25c-1.1.6-1.75 1.5-1.75 2.75M8.1 11.25c1.5.2 2.55.8 3.15 1.85M15.9 11.25c-1.5.2-2.55.8-3.15 1.85M8.75 16c1.2 0 2.05.4 2.5 1.15M15.25 16c-1.2 0-2.05.4-2.5 1.15" />
        </svg>
      );
    case "pipeline":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="3.5" y="4.5" width="6.25" height="4.25" rx="1" />
          <rect {...props} x="14.25" y="4.5" width="6.25" height="4.25" rx="1" />
          <rect {...props} x="8.9" y="15.25" width="6.25" height="4.25" rx="1" />
          <path {...props} d="M6.6 8.75V12h10.8V8.75M12 12v3.25" />
        </svg>
      );
    case "linux":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path {...props} d="M12 3.75c1.55 0 2.8 1.2 2.8 2.7v2.15c1.45.8 2.45 2.35 2.45 4.15 0 1.1-.35 2.1-.95 2.95l1.15 3.8c.15.55-.25 1.1-.8 1.1H7.35c-.55 0-.95-.55-.8-1.1l1.15-3.8a5.1 5.1 0 0 1-.95-2.95c0-1.8 1-3.35 2.45-4.15V6.45c0-1.5 1.25-2.7 2.8-2.7Z" />
          <circle cx="10.05" cy="11.4" r="0.7" fill={stroke} />
          <circle cx="13.95" cy="11.4" r="0.7" fill={stroke} />
          <path {...props} d="M10.1 14.8c1.15.85 2.65.85 3.8 0M9.1 18.55h5.8" />
        </svg>
      );
    case "architecture":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="3.5" y="5" width="7" height="5" rx="1" />
          <rect {...props} x="13.5" y="5" width="7" height="5" rx="1" />
          <rect {...props} x="8.5" y="14" width="7" height="5" rx="1" />
          <path {...props} d="M7 10v2h10v-2M12 12v2" />
        </svg>
      );
    case "oop":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="4.5" y="4.5" width="6.5" height="6.5" rx="1.1" />
          <rect {...props} x="13" y="4.5" width="6.5" height="6.5" rx="1.1" />
          <rect {...props} x="8.75" y="13" width="6.5" height="6.5" rx="1.1" />
          <path {...props} d="M11 8h2M12 8v5" />
        </svg>
      );
    case "cbadge":
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <path {...props} d="m12 3.75 7 4v8.5l-7 4-7-4v-8.5l7-4Z" />
          <path {...props} d="M15.2 9.2a4 4 0 1 0 0 5.6" />
          <path {...props} d="M16.8 10.6h2.5M16.8 13.4h2.5" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" className="subject-icon" viewBox="0 0 24 24">
          <rect {...props} x="5" y="4.5" width="14" height="15" rx="1.4" />
          <path {...props} d="M8.5 9.25h7M8.5 13h7M8.5 16.75h4.25" />
        </svg>
      );
  }
}
