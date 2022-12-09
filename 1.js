const temp = Number.parseInt(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${temp}, Фаренгейт: ${Math.round((9 / 5) * temp + 32)}`);