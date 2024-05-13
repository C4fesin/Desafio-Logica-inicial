let heroi = {
    nome: "Superman",
    XP: 1000
};
let nivel;

if (heroi.XP <= 1000) {
    nivel = "Ferro";
} else if (heroi.XP >= 1001 && heroi.XP <= 2000) {
    nivel = "Bronze";
} else if (heroi.XP >= 2001 && heroi.XP <= 6000) {
    nivel = "Prata";
} else if (heroi.XP >= 6001 && heroi.XP <= 8000) {
    nivel = "Ouro";
} else if (heroi.XP >= 8001 && heroi.XP <= 9000) {
    nivel = "Ascendente";
} else if (heroi.XP >= 9001 && heroi.XP <= 10000) {
    nivel = "Imortal";
} else if (heroi.XP >= 10001) {
    nivel = "Radiante";
}

console.log(`O herói de nome ${heroi.nome} está no nível ${nivel}.`);
