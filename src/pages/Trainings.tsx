import { useState } from "react";
import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { trainingsData } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, Star } from "lucide-react";

const Trainings = () => {
  const { isDark, toggleTheme } = useTheme();
  const [selectedLevel, setSelectedLevel] = useState<string>("Все");

  const levels = ["Все", "Начинающий", "Средний", "Продвинутый"];

  const filteredTrainings =
    selectedLevel === "Все"
      ? trainingsData
      : trainingsData.filter((training) => training.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Средний":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Продвинутый":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Расписание тренировок
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Выберите подходящую тренировку и запишитесь прямо сейчас
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {levels.map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? "default" : "outline"}
              onClick={() => setSelectedLevel(level)}
              className="mb-2"
            >
              {level}
            </Button>
          ))}
        </div>

        {/* Карточки тренировок */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainings.map((training) => (
            <Card
              key={training.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">
                    {training.name}
                  </CardTitle>
                  <Badge className={getLevelColor(training.level)}>
                    {training.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span>
                    {training.time} • {training.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>{training.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Star className="h-4 w-4" />
                  <span>{training.trainer}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>
                    Свободно мест: {training.spotsLeft}/{training.maxSpots}
                  </span>
                </div>

                <Button className="w-full" disabled={training.spotsLeft === 0}>
                  {training.spotsLeft === 0 ? "Мест нет" : "Записаться"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Trainings;
