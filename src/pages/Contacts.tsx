import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Wifi } from "lucide-react";

const Contacts = () => {
  const { isDark, toggleTheme } = useTheme();

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@fitclub.ru", "support@fitclub.ru"],
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: ["ул. Спортивная, 15", "Москва, 101000"],
    },
    {
      icon: Clock,
      title: "Режим работы",
      details: ["Пн-Пт: 06:00 - 23:00", "Сб-Вс: 08:00 - 22:00"],
    },
  ];

  const amenities = [
    { icon: Car, name: "Парковка" },
    { icon: Wifi, name: "WiFi" },
    { icon: MapPin, name: "Рядом с метро" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-blue-500" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Карта */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Как добраться</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Интерактивная карта
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Удобства:</h4>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <amenity.icon className="h-4 w-4" />
                        {amenity.name}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Форма обратной связи */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Напишите нам</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <Button className="w-full">Отправить сообщение</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Contacts;
