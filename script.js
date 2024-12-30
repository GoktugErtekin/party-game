// Kartlarda bulunan bilgiler
const cardInfos = [
    "Utandığın bir anını anlat ya da 2 shot at.",
    "Arkadaşının, galerindeki fotoğrafını herkese göster ya da 2 shot at.",
    "Tüm kızlar 1 shot atsın.",
    "Seçtiğin kişi 1 shot atsın.",
    "Herkes 1 shot atsın.",
    "İnternet arama geçmişini göster ya da 1 shot at.",
    "Bu kartı çeken kişi, gruptan herhangi birinin sorduğu soruya cevap vericek ya da 2 shot atıcak.",
    "Tüm erkekler 1 shot atsın.",
    "3 el sürecek bir kural belirle(herkes peltek konuşacak), kurala uymayan ya da yapamayan kişi her seferinde 1 shot atar.",
    "Seçtiğin kişi bir şarkının nakaratını söylesin ya da 2 shot atsın.",
    "Bir kategori belirle(ayakkabı markası), gruptaki herkes o kategoriden birşey söylesin(adidas,nike). Söyleyemeyen 1 shot atsın.",
    "15 saniye boyunca tavuk taklidi yap ya da 2 shot at.",
    "15 saniye boyunca grubun seçtiği hayvanın taklidini yap ya da 3 shot at.",
    "Gruptan biri ile bakışma yarışması yap, kaybeden 1 shot atsın.",
    "15 saniye boyunca dinazor taklidi yap ya da 1 shot at.",
    "Seçtiğin kişiye 3 el boyunca herkes seçtiğin lakap ile seslenecek.",
    "3 el boyunca 'ben daha önce hiç...' oyunu oynayın. Soran sensin.",
    "Diğer oyuncular senin gözlerini bağlayacak ve önüne herhangi bir obje koyacak. Dokunarak ne olduğunu tahmin et. Doğruysa grup 1 shot atar, yanlışsa sen.",
    "Hem yatakta hem mutfakta söylenebilecek bir cümle söyle. Takılırsan 1 shot at.",
    "Hem yatakta hem tuvalette söylenebilecek bir cümle söyle. Takılırsan 1 shot at.",
    "Gruptakiler bir pozisyon çizecek. Bu pozisyonda 15 saniye kalacaksın, kalamazsan 2 shot at.",
    "Birine seni en utandıran hikayeni anlat ya da 2 shot at.",
    "Bir şarkıyı yanlış söylemeye çalış, bir harf bile eksik olsa 1 shot at.",
    "Birini öp ya da 2 shot at.",
    "Sana yapılan en çılgın teklifi anlat ya da 1 shot at.",
    "Bu masadaki herkese sırayla birer kompliman yap ya da 1 shot at.",
    "Gözlerin kapalı şekilde birinin saçını taramaya çalış, doğru yapamazsan 2 shot at.",
    "İçinde hayalindeki meslekle ilgili 30 saniye boyunca konuş, takılırsan 1 shot at.",
    "Bir karakter sesiyle 1 dakika konuş ya da 2 shot at.",
    "Herkes seni 30 saniye boyunca gözleriyle takip etsin, buna dayanamazsan 1 shot at.",
    "İlk aşkın hakkında komik bir anı anlat ya da 2 shot at.",
    "Bir şarkının en kötü halini söylemeye çalış ya da 2 shot at.",
    "Bir anını anlat ve gruptakiler bunun sarhoşken mi yoksa çocukken mi yaşandığını tahmin etsinler. Yanlış tahmin edenler 2 shot atsın.",
    "Herkesin favori tatlısını sırayla say, söyleyemeyen 1 shot atsın.",
    "Bir hikaye uydur, ama her 10 saniyede bir doğruyu söylemek zorundasın. Takılırsan 1 shot at.",
    "Kendini bir televizyon reklamında oyuncu gibi tanıt, takılırsan 2 shot at.",
    "Gözlerin kapalıyken birine selam ver, doğru yapamazsan 1 shot at.",
    "En sevdiğin film karakteriyle konuşmaya başla, 30 saniye dayanamazsan 1 shot at.",
    "Birisinin senin yerine bir espri yapmasına izin ver ya da 2 shot at.",
    "Farklı aksanlarla 3 farklı cümle söyle, başarılı olamazsan 1 shot at.",
    "Seçtiğin birinin saçını şekillendir ya da 2 shot at.",
    "Birine en ilginç takma adını söyle ya da 2 shot at.",
    "Herkesin önünde seni en fazla utandıran anını anlat ya da 1 shot at.",
    "Bir hayvanın hareketlerini taklit et, grup 10 saniye sonra sana karar versin. Takılırsan 2 shot at.",
    "Daha önce hiç yapmadığın bir şeyi hayal et ve bunu yapacakmış gibi anlat, doğru yapamazsan 2 shot at.",
    "Bir şarkıyı 'hamur sesleriyle' söyle, doğru yapamazsan 1 shot at.",
   "Sana en garip soruyu soracak birini seç, soruyu doğru cevaplarsan 1 shot at, yanlışsa 2 shot at.",
   "Sessiz sinema, anlatan sensin. 1 dakika içerisinde anlatamazsan 3 shot at.",
   "Sadece burunla konuşmaya çalış, başarısız olursan 1 shot at.",
   "Başka birine kendini bir super kahraman olarak tanıt, takılırsan 1 shot at.",
   "Son izlediğin şey hakkında 30 saniye boyunca konuş, anlatırken takılırsan 1 shot at.",
   "İki kişilik bir dans koreografisi yap ve bunu göster, başarılı olamazsan 2 shot at.",
   "Başka birinin Instagram'ını stalkla, ilginç bir şey bulursan 1 shot at.",
   "Herkese senin en sevdiğin yemek hakkında 1 dakikalık sunum yap, sunumun komik olursa 2 shot atsınlar.",
   "Birini en komik şekilde korkutmaya çalış, başarılı olamazsan 1 shot at."
];

const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardInfos.length);
    return cardInfos[randomIndex];
};

// Rastgele bir kart seçme fonksiyonu
const changeCard = () => {
    const card = document.getElementById("cardContent");
    card.innerHTML = getRandomCard();

    // Kart öğesini seçin
    const animatedCard = document.getElementById("card");
    const animatedCardContent = document.getElementById("cardContent");

    // Animasyonu uygulayın
    animatedCard.style.animation = "flip-vertical-left .5s ease";
    animatedCardContent.style.animation = "tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";

    // Animasyonun bitişini bekleyin ve animasyonu temizleyin
    animatedCard.addEventListener("animationend", () => {
        animatedCard.style.animation = "";
        animatedCardContent.style.animation = "";
    });
};

// Sayfa yüklendiğinde ilk kartı göster
window.onload = changeCard;

// Kart üzerine tıklandığında kartı değiştir
document.getElementById("card").addEventListener("click", changeCard);
