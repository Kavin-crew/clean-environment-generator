import { useWidgetStore } from "@/src/store/widgetStore";

export default function LanguageSelect() {
  const language = useWidgetStore((state) => state.language);
  const setLanguage = useWidgetStore((state) => state.setLanguage);

  const languages = [
    { code: "en", label: "English" },
    { code: "hr", label: "Croatian" },
    { code: "cs", label: "Czech" },
    { code: "zh-CN", label: "Chinese (Simplified)" },
    { code: "zh-TW", label: "Chinese (Traditional)" },
    { code: "da", label: "Danish" },
    { code: "nl", label: "Dutch" },
    { code: "fr", label: "French" },
    { code: "fi", label: "Finnish" },
    { code: "de", label: "German" },
    { code: "el", label: "Greek" },
    { code: "hi", label: "Hindi" },
    { code: "hu", label: "Hu" },
    { code: "id", label: "Indonesian" },
    { code: "it", label: "Italian" },
    { code: "ja", label: "Japanese" },
    { code: "ko", label: "Korean" },
    { code: "lt", label: "Lithuanian" },
    { code: "ms", label: "Malay" },
    { code: "no", label: "Norwegian" },
    { code: "pl", label: "Polish" },
    { code: "pt-BR", label: "Portuguese (Brazil)" },
    { code: "pt-PT", label: "Portuguese (Portugal)" },
    { code: "ro", label: "Romanian" },
    { code: "ru", label: "Russian" },
    { code: "sk", label: "Slovak" },
    { code: "sl", label: "Slovenian" },
    { code: "es", label: "Spanish" },
    { code: "sv", label: "Swedish" },
    { code: "th", label: "Thai" },
    { code: "tr", label: "Turkish" },
    { code: "vi", label: "Vietnamese" },
  ];

  return (
    <select
      id="language"
      name="language"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
