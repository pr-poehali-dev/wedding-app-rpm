import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    lookingFor: "",
    phone: "",
    fullName: "",
    discord: "",
    description: "",
    age: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-romantic-soft border-romantic-light">
      <CardHeader className="text-center bg-gradient-to-r from-romantic-pink to-romantic-coral text-white">
        <CardTitle className="text-3xl font-montserrat flex items-center justify-center gap-2">
          <Icon name="HeartHandshake" size={32} />
          Подать заявку на знакомство
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-lg font-medium text-romantic-pink">
              Ваш пол
            </Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Женский</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Мужской</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium text-romantic-pink">
              Кого ищете
            </Label>
            <RadioGroup
              value={formData.lookingFor}
              onValueChange={(value) =>
                setFormData({ ...formData, lookingFor: value })
              }
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="lookingFemale" />
                <Label htmlFor="lookingFemale">Женский</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="lookingMale" />
                <Label htmlFor="lookingMale">Мужской</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-romantic-pink font-medium"
              >
                ФИО на РПМ
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="border-romantic-light focus:border-romantic-pink"
                placeholder="Введите ваше ФИО"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="text-romantic-pink font-medium">
                Реальный возраст
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="border-romantic-light focus:border-romantic-pink"
                placeholder="Ваш возраст"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-romantic-pink font-medium">
              Номер телефона на РПМ
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border-romantic-light focus:border-romantic-pink"
              placeholder="+7 (XXX) XXX-XX-XX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discord" className="text-romantic-pink font-medium">
              Discord
            </Label>
            <Input
              id="discord"
              value={formData.discord}
              onChange={(e) =>
                setFormData({ ...formData, discord: e.target.value })
              }
              className="border-romantic-light focus:border-romantic-pink"
              placeholder="username#1234"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-romantic-pink font-medium"
            >
              Описание себя и кого ищете
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border-romantic-light focus:border-romantic-pink min-h-32"
              placeholder="Расскажите о себе и о том, кого вы ищете..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-romantic-pink to-romantic-coral hover:from-romantic-coral hover:to-romantic-pink text-white py-3 text-lg font-medium"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
