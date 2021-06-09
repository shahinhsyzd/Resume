let flash;
flash = prompt("LÜTFƏN, ŞİFRƏNİ DAXİL EDİN / PLEASE, ENTER THE PASSWORD", "");
const frfrfr = "1234s";
if (frfrfr == flash) {
  alert(
    "DÜZGÜN ŞİFRƏ. DAXİL OLMAQ ÜÇÜN OK DÜYƏMSİNƏ BASIN / CORRECT PASSWORD! CLICK OK TO ENTER"
  );
} else {
  alert(
    "ŞİFRƏ DÜZGÜN DEYİL! LİNKEDİNƏ YÖNLƏNDİRİLİR / WRONG PASSWORD! REDIRECTING TO LINKEDIN!"
  );
  window.location = "https://www.linkedin.com/in/shahinhsynzd/";
}
