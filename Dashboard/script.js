// Contoh data riwayat penyetoran
const riwayatData = [
  { tanggal: "12 Okt 2025", jenis: "Plastik", berat: 3.2, keuntungan: "Rp 20.000" },
  { tanggal: "15 Okt 2025", jenis: "Kertas", berat: 5.1, keuntungan: "Rp 30.000" },
  { tanggal: "22 Okt 2025", jenis: "Logam", berat: 2.8, keuntungan: "Rp 25.000" },
];

// Render data ke tabel
const tbody = document.querySelector("#riwayatTable tbody");
riwayatData.forEach((data, index) => {
  const row = `
    <tr>
      <td>${index + 1}</td>
      <td>${data.tanggal}</td>
      <td>${data.jenis}</td>
      <td>${data.berat}</td>
      <td>${data.keuntungan}</td>
    </tr>
  `;
  tbody.insertAdjacentHTML("beforeend", row);
});

// Tombol logout sederhana
document.getElementById("logoutBtn").addEventListener("click", () => {
  if (confirm("Yakin ingin keluar dari dashboard ReGreen?")) {
    window.location.href = "login.html"; 
  }
});
