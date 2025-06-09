import { useTheme } from "@/hooks/useTheme";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import TrainingCard from "@/components/TrainingCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, MapPin } from "lucide-react";
import { newsData, trainingsData } from "@/data/mockData";

const Index = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Достигни своих
              <span className="block text-yellow-300">фитнес-целей</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
              Современный спортивный клуб с лучшими тренерами и оборудованием
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Записаться на тренировку
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "1200+", label: "Активных членов" },
              { icon: Award, value: "15+", label: "Опытных тренеров" },
              { icon: Star, value: "4.9", label: "Рейтинг клуба" },
              { icon: MapPin, value: "3", label: "Филиала в городе" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Новости клуба
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Следите за последними обновлениями и событиями
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Все новости
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ближайшие тренировки
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Запишись на тренировку прямо сейчас
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Все тренировки
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {trainingsData.map((training) => (
              <TrainingCard key={training.id} {...training} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
