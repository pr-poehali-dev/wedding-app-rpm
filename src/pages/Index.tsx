import Header from "@/components/Header";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-soft to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-romantic-pink to-romantic-coral bg-clip-text text-transparent font-montserrat">
              Найди свою любовь на РПМ
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Присоединяйся к нашему сообществу и найди свою вторую половинку.
              Заполни заявку и позволь судьбе свести вас вместе!
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-romantic-pink to-romantic-coral hover:from-romantic-coral hover:to-romantic-pink"
              >
                <Icon name="Heart" className="mr-2" />
                Подать заявку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-romantic-pink text-romantic-pink hover:bg-romantic-soft"
              >
                <Icon name="Users" className="mr-2" />
                Просмотреть заявки
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-romantic-pink">50+</div>
              <div className="text-gray-600">Активных участников</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-romantic-coral">12</div>
              <div className="text-gray-600">Счастливых пар</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-romantic-pink">100%</div>
              <div className="text-gray-600">Безопасность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-romantic-pink mb-4 font-montserrat">
              Заполни заявку на знакомство
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Расскажи о себе и о том, кого ищешь. Наши модераторы рассмотрят
              твою заявку и помогут найти подходящую пару.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-romantic-soft">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-romantic-pink mb-12 font-montserrat">
            Почему выбирают нас?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-romantic-light">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="mx-auto text-romantic-pink mb-4"
                />
                <CardTitle className="text-romantic-pink">
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все заявки проходят модерацию. Мы заботимся о безопасности
                  наших участников.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-romantic-light">
              <CardHeader>
                <Icon
                  name="UserCheck"
                  size={48}
                  className="mx-auto text-romantic-coral mb-4"
                />
                <CardTitle className="text-romantic-coral">
                  Проверенные анкеты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Каждая анкета проверяется администрацией для исключения
                  фейковых профилей.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-romantic-light">
              <CardHeader>
                <Icon
                  name="Heart"
                  size={48}
                  className="mx-auto text-romantic-pink mb-4"
                />
                <CardTitle className="text-romantic-pink">
                  Реальные отношения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Наша цель — помочь найти серьезные отношения и создать крепкие
                  пары.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} className="text-romantic-pink" />
            <span className="text-xl font-bold font-montserrat">
              Давай Поженимся На RPM
            </span>
          </div>
          <p className="text-gray-400">Сделано с ❤️ для РПМ сообщества</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
