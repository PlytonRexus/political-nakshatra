// Progress Bar Component

export function ProgressBar({ current, total, percentage }) {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium text-gray-300">
          {percentage}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
