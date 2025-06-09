import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { trainersData } from "@/data/mockData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Calendar, MessageCircle } from "lucide-react";

const Trainers = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши тренеры
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Профессиональные инструкторы для достижения ваших целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer) => (
            <Card
              key={trainer.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {trainer.name}
                </h3>
                <Badge variant="secondary" className="mx-auto">
                  {trainer.specialization}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{trainer.rating}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  {trainer.description}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Опыт: {trainer.experience}
                </p>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Записаться
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Написать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Trainers;
