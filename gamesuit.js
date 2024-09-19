let scoreKomputer = 0;
let scorePlayer = 0;
const hasilScoreKomputer = document.getElementById("scoreKomputer");
const hasilScorePlayer = document.getElementById("scorePlayer");

// pilihan komputer
function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

// rules hasil
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "gunting") return comp == "kertas" ? "KALAH!" : "MENANG!";
  if (player == "kertas") return comp == "batu" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector("img[alt=batu]");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// jalannkan eventnya
const pilihan = document.querySelectorAll("#sectionb img[alt]");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    setTimeout(function tambahScore() {
      if (hasil == "MENANG!") {
        scorePlayer++;
        return (hasilScorePlayer.textContent = scorePlayer);
      }
      if (hasil == "KALAH!") {
        scoreKomputer++;
        return (hasilScoreKomputer.textContent = scoreKomputer);
      }
    }, 1000);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector("img[alt=batu]");
      imgComputer.setAttribute("src", "img/" + pilihanComp + ".png");
      const info = document.querySelector("#info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
