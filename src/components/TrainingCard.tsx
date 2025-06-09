import { Clock, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TrainingCardProps {
  id: string;
  name: string;
  time: string;
  duration: string;
  trainer: string;
  location: string;
  level: string;
  spotsLeft: number;
  maxSpots: number;
}

const TrainingCard = ({
  name,
  time,
  duration,
  trainer,
  location,
  level,
  spotsLeft,
  maxSpots,
}: TrainingCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "начинающий":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "средний":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "продвинутый":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-[320px]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}
          >
            {level}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-500">
            {time.split(" ")[0]}
          </div>
          <div className="text-sm text-gray-500">{time.split(" ")[1]}</div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <User className="h-4 w-4 mr-2" />
          <span className="text-sm">{trainer}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Свободных мест</span>
          <span>
            {spotsLeft} из {maxSpots}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((maxSpots - spotsLeft) / maxSpots) * 100}%` }}
          />
        </div>
      </div>

      <Button
        className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-medium"
        disabled={spotsLeft === 0}
      >
        {spotsLeft === 0 ? "Мест нет" : "Записаться"}
      </Button>
    </Card>
  );
};

export default TrainingCard;
