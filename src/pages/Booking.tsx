import { useState } from "react";
import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";

const Booking = () => {
  const { isDark, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    training: "",
    date: "",
    time: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Здесь будет обработка формы
    alert("Спасибо за запись! Мы свяжемся с вами в ближайшее время.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Записаться на тренировку
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Заполните форму и мы подберем для вас лучшее время
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Форма записи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Имя и фамилия
                    </Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Тип тренировки</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("training", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тренировку" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strength">
                        Силовая тренировка
                      </SelectItem>
                      <SelectItem value="yoga">Йога</SelectItem>
                      <SelectItem value="crossfit">Кроссфит</SelectItem>
                      <SelectItem value="pilates">Пилатес</SelectItem>
                      <SelectItem value="cardio">Кардио</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Предпочитаемая дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Время
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("time", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="19:00">19:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Комментарии</Label>
                  <Textarea
                    id="comments"
                    placeholder="Дополнительные пожелания или вопросы..."
                    value={formData.comments}
                    onChange={(e) =>
                      handleInputChange("comments", e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Booking;
