import {
  Brain,
  Sparkles,
  Lightbulb,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { useRecommendations } from "../hooks/useRecommendations";
import { useTheme } from "../context/ThemeContext";

function Recommendations() {
  const { data, isLoading, error } = useRecommendations();
  const { darkMode } = useTheme();

  if (isLoading)
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-center">
          <Brain size={50} className="mx-auto animate-pulse text-blue-600" />
          <h2
            className={`mt-4 text-xl font-semibold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            AI is generating your recommendations...
          </h2>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="rounded-xl bg-red-100 p-6 text-red-600 dark:bg-red-900/30 dark:text-red-300">
        Unable to load AI recommendations.
      </div>
    );

  if (!data || data.length === 0)
    return (
      <div
        className={`rounded-xl p-10 text-center shadow ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
        }`}
      >
        <Brain className="mx-auto mb-5 text-blue-600" size={60} />
        <h2 className="text-2xl font-bold">No AI Recommendations Yet</h2>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Complete more workout activities and your AI coach will begin giving
          personalized suggestions.
        </p>
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <Brain size={40} className="text-blue-600" />

          <div>
            <h1
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              AI Fitness Coach
            </h1>

            <p className="text-slate-500 dark:text-slate-400">
              Personalized insights powered by AI.
            </p>
          </div>
        </div>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className={`overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl ${
            darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
          }`}
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
            <div className="flex items-center gap-3">
              <Activity size={30} />

              <div>
                <h2 className="text-2xl font-bold">{item.activityType}</h2>

                <p className="text-blue-100">AI Performance Analysis</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-6">
            {/* Recommendation */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="text-yellow-500" />

                <h3 className="text-xl font-bold">AI Recommendation</h3>
              </div>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                {item.recommendation}
              </p>
            </div>

            {/* Improvements */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Lightbulb className="text-orange-500" />

                <h3 className="text-xl font-bold">Improvements</h3>
              </div>

              <ul className="space-y-2">
                {item.improvements.map((imp) => (
                  <li key={imp} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggestions */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="text-green-500" />

                <h3 className="text-xl font-bold">Suggestions</h3>
              </div>

              <ul className="space-y-2">
                {item.suggestions.map((sug) => (
                  <li key={sug} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-500"></span>
                    <span>{sug}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="text-red-500" />

                <h3 className="text-xl font-bold">Safety Tips</h3>
              </div>

              <ul className="space-y-2">
                {item.safety.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
