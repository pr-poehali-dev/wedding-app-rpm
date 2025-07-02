import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-romantic-pink to-romantic-coral shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={32} className="text-white" />
            <h1 className="text-2xl font-bold text-white font-montserrat">
              Давай Поженимся На RPM
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              О проекте
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Подать заявку
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Просмотр заявок
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Женаты
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Вход для редактора
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
