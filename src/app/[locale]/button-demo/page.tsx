"use client";

import { ArrowRight, Palette, Package } from "lucide-react";

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">
          Button Color Combinations
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Color Palette: Reddish Orange (#FF5828), Cadmium Yellow (#DCFF00), Iris Purple (#6450D2)
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#FF5828'}}></div>
            <span className="text-sm text-gray-600">#FF5828</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#DCFF00'}}></div>
            <span className="text-sm text-gray-600">#DCFF00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#6450D2'}}></div>
            <span className="text-sm text-gray-600">#6450D2</span>
          </div>
        </div>

        {/* Вариант 1: Желтый + Оранжевый + Фиолетовый */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 1: Яркий и энергичный
          </h2>
          <p className="text-gray-600 mb-6">
            Желтый (primary) + Оранжевый (secondary) + Фиолетовый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-[#6450D2] text-white rounded-full hover:bg-[#5642bd] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 2: Фиолетовый + Желтый + Оранжевый outline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 2: Премиум с контрастом
          </h2>
          <p className="text-gray-600 mb-6">
            Фиолетовый (primary) + Желтый (secondary) + Оранжевый outline (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#6450D2] text-white rounded-full hover:bg-[#5642bd] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#FF5828] border-2 border-[#FF5828] rounded-full hover:bg-[#FF5828] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 3: Оранжевый + Желтый + Фиолетовый outline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 3: Теплый и дружелюбный
          </h2>
          <p className="text-gray-600 mb-6">
            Оранжевый (primary) + Желтый (secondary) + Фиолетовый outline (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#6450D2] border-2 border-[#6450D2] rounded-full hover:bg-[#6450D2] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 4: Градиенты */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 4: Современные градиенты
          </h2>
          <p className="text-gray-600 mb-6">
            Желтый→Оранжевый (primary) + Фиолетовый→Оранжевый (secondary) + Желтый outline (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#DCFF00] to-[#FF5828] text-gray-900 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium shadow-lg flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-gradient-to-r from-[#6450D2] to-[#FF5828] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium shadow-lg flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-[#DCFF00] rounded-full hover:bg-[#DCFF00] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 5: Минималистичный с акцентами */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 5: Минималистичный с яркими акцентами
          </h2>
          <p className="text-gray-600 mb-6">
            Черный с желтым текстом (primary) + Желтый (secondary) + Оранжевый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gray-900 text-[#DCFF00] rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 6: Фиолетовый доминант */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 6: Премиум фиолетовый (рекомендуемый)
          </h2>
          <p className="text-gray-600 mb-6">
            Фиолетовый (primary) + Желтый outline (secondary) + Оранжевый outline (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#6450D2] text-white rounded-full hover:bg-[#5642bd] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-[#DCFF00] border-2 border-[#DCFF00] rounded-full hover:bg-[#DCFF00] hover:text-gray-900 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#FF5828] border-2 border-[#FF5828] rounded-full hover:bg-[#FF5828] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 7: Все outline с hover fill */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 7: Легкий и воздушный
          </h2>
          <p className="text-gray-600 mb-6">
            Все кнопки outline с заливкой при hover
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-white text-[#6450D2] border-2 border-[#6450D2] rounded-full hover:bg-[#6450D2] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-[#DCFF00] border-2 border-[#DCFF00] rounded-full hover:bg-[#DCFF00] hover:text-gray-900 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#FF5828] border-2 border-[#FF5828] rounded-full hover:bg-[#FF5828] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 8: Желтый доминант */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 8: Энергичный желтый (рекомендуемый)
          </h2>
          <p className="text-gray-600 mb-6">
            Желтый (primary) + Фиолетовый (secondary) + Оранжевый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#6450D2] text-white rounded-full hover:bg-[#5642bd] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 9: Черный + Белый outline + Оранжевый (из скриншота 1) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 9: Классический с оранжевым акцентом
          </h2>
          <p className="text-gray-600 mb-6">
            Черный (primary) + Белый outline (secondary) + Оранжевый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gray-900 text-[#FF5828] rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get Quote</span>
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 10: Черный с желтым текстом + Желтый + Оранжевый (из скриншота 2) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 10: Контрастный с желтым акцентом
          </h2>
          <p className="text-gray-600 mb-6">
            Черный с желтым текстом (primary) + Желтый (secondary) + Оранжевый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gray-900 text-[#DCFF00] rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#DCFF00] text-gray-900 rounded-full hover:bg-[#c9e600] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 11: Оранжевый + Черный + Желтый outline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 11: Оранжевый доминант
          </h2>
          <p className="text-gray-600 mb-6">
            Оранжевый (primary) + Черный (secondary) + Желтый outline (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#DCFF00] border-2 border-[#DCFF00] rounded-full hover:bg-[#DCFF00] hover:text-gray-900 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 12: Черный + Оранжевый + Фиолетовый */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 12: Темный премиум
          </h2>
          <p className="text-gray-600 mb-6">
            Черный (primary) + Оранжевый (secondary) + Фиолетовый (tertiary)
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-[#FF5828] text-white rounded-full hover:bg-[#e64d23] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-[#6450D2] text-white rounded-full hover:bg-[#5642bd] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Вариант 13: Все черные outline с цветными текстами */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Вариант 13: Минималистичный outline
          </h2>
          <p className="text-gray-600 mb-6">
            Все outline с черной рамкой, цветной текст
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-white text-[#6450D2] border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-[#6450D2] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Palette size={20} />
                <span>Create Design</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-[#DCFF00] border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-[#DCFF00] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Get quote</span>
              </button>

              <button className="px-8 py-4 bg-white text-[#FF5828] border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-[#FF5828] transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <Package size={20} />
                <span>Order Samples</span>
              </button>
            </div>
          </div>
        </div>

        {/* Рекомендации */}
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            🎨 Рекомендации по выбору
          </h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Вариант 6 (Премиум фиолетовый):</strong> Лучший для премиум-бренда, создает ощущение качества и надежности</p>
            <p><strong>Вариант 8 (Энергичный желтый):</strong> Максимальная видимость и энергия, привлекает внимание</p>
            <p><strong>Вариант 10 (Контрастный):</strong> Высокий контраст, отлично читается, современный вид</p>
            <p><strong>Вариант 9 (Классический):</strong> Элегантный и профессиональный, универсальный выбор</p>
            <p><strong>Вариант 1 (Яркий):</strong> Молодежный и современный, подходит для креативной аудитории</p>
            <p><strong>Вариант 4 (Градиенты):</strong> Самый современный и трендовый вид</p>
          </div>
        </div>
      </div>
    </div>
  );
}
